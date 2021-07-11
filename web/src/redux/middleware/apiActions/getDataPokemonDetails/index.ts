// @ts-nocheck
import api from '../../../../services/api'

import { addPokemonDetails } from '../../../reducers/ApiReducer/pokemonDetailsData'
import { endLoading, isLoading } from '../../../reducers/isLoading'

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
    api
      .get(`pokemon/${id}`)
      .then((response) => {
        const newdata = response.data
        let movesPokemon = []
        if (newdata.abilities.length > 1) {
          for (let i = 0; i < newdata.abilities.length; i++) {
            movesPokemon[i] = newdata.abilities[i].ability.name
          }
        } else {
          movesPokemon = [newdata.abilities[0].ability.name]
        }

        let typesPokemon = []
        if (newdata.types.length > 1) {
          for (let i = 0; i < newdata.types.length; i++) {
            typesPokemon[i] = newdata.types[i].type.name
          }
        } else {
          typesPokemon = [newdata.types[0].type.name]
        }
        const pokeDetail: PokemonAllDataProps = {
          abilities: movesPokemon,
          height: newdata.height,
          id: newdata.id,
          image: {
            front: newdata.sprites.front_default,
            back: newdata.sprites.back_default,
          },
          name: newdata.name,
          stats: {
            hp: newdata.stats[0].base_stat,
            attack: newdata.stats[1].base_stat,
            defense: newdata.stats[2].base_stat,
            specialAttack: newdata.stats[3].base_stat,
            specialDefense: newdata.stats[4].base_stat,
            speed: newdata.stats[5].base_stat,
          },
          types: typesPokemon,
          weight: newdata.weight,
        }

        dispatch(addPokemonDetails(pokeDetail))
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        dispatch(endLoading())
      })
  }
}
