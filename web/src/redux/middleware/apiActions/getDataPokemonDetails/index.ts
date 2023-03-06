// @ts-nocheck
import api from '../../../../services/api'

import { addPokemonDetails } from '../../../reducers/ApiReducer/pokemonDetailsData'
import { endLoading, isLoading } from '../../../reducers/isLoading'
import { foundPokemon, notFoundPokemon } from '../../../reducers/notHasPokemon'

interface PokemonAllDataProps {
  abilities: Array<string>
  height: number
  id: number
  image: {
    front: string
    back: string
  }
  name: string
  stats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
  }
  types: Array<string>
  weight: number
}

export const getPokemonDetails = (id: string) => {
  return (dispatch) => {
    dispatch(isLoading())
    dispatch(foundPokemon())
    api
      .get(`pokemon/${id}`)
      .then((response) => {
        const newData = response.data
        let movesPokemon = []
        if (newData.abilities.length > 1) {
          for (let i = 0; i < newData.abilities.length; i++) {
            movesPokemon[i] = newData.abilities[i].ability.name
          }
        } else {
          movesPokemon = [newData.abilities[0].ability.name]
        }

        let typesPokemon = []
        if (newData.types.length > 1) {
          for (let i = 0; i < newData.types.length; i++) {
            typesPokemon[i] = newData.types[i].type.name
          }
        } else {
          typesPokemon = [newData.types[0].type.name]
        }
        const pokeDetail: PokemonAllDataProps = {
          abilities: movesPokemon,
          height: newData.height,
          id: newData.id,
          image: {
            front: newData.sprites.front_default,
            back: newData.sprites.back_default,
          },
          name: newData.name,
          stats: {
            hp: newData.stats[0].base_stat,
            attack: newData.stats[1].base_stat,
            defense: newData.stats[2].base_stat,
            specialAttack: newData.stats[3].base_stat,
            specialDefense: newData.stats[4].base_stat,
            speed: newData.stats[5].base_stat,
          },
          types: typesPokemon,
          weight: newData.weight,
        }

        dispatch(addPokemonDetails(pokeDetail))
      })
      .catch(() => {
        dispatch(notFoundPokemon())
      })
      .finally(() => {
        dispatch(endLoading())
      })
  }
}
