// @ts-nocheck
import api from '../../../../services/api'

import { addDataToHomepage } from '../../../reducers/ApiReducer/homepageData'
import { endLoading } from '../../../reducers/isLoading'
import { notFoundPokemon } from '../../../reducers/notHasPokemon'

type PokemonResumeProps = Array<{
  id: number
  image: string
  name: string
  types: Array<{
    slot: number
    type: {
      name: string
    }
  }>
}>

export const getDataHomepage = (pokemonList) => {
  return async (dispatch) => {
    if (pokemonList !== undefined && pokemonList.length > 1) {
      const searchInfo = pokemonList.map((pokemon) =>
        api.get(`pokemon/${pokemon.name}`).catch(() => {
          dispatch(notFoundPokemon())
        })
      )
      const pokemonInfo = await Promise.all(searchInfo)

      const newData: PokemonResumeProps = []
      for (let i = 0; i < pokemonInfo.length; i++) {
        newData[i] = {
          id: pokemonInfo[i].data.id,
          image: pokemonInfo[i].data.sprites.front_default,
          name: pokemonInfo[i].data.name,
          types: pokemonInfo[i].data.types,
        }
      }
      dispatch(addDataToHomepage(newData))
      dispatch(endLoading())
    }
  }
}
