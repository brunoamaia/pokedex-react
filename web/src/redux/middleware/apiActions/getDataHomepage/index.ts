// @ts-nocheck
import api from '../../../../services/api'

import { addDataToHomepage } from '../../../reducers/ApiReducer/homepageData'
import { endLoading } from '../../../reducers/isLoading'

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
        api.get(`pokemon/${pokemon.name}`).catch((error) => {
          console.log(error.response.status)
        })
      )
      const pokemonInfo = await Promise.all(searchInfo)

      const newdata: PokemonResumeProps = []
      for (let i = 0; i < pokemonInfo.length; i++) {
        newdata[i] = {
          id: pokemonInfo[i].data.id,
          image: pokemonInfo[i].data.sprites.front_default,
          name: pokemonInfo[i].data.name,
          types: pokemonInfo[i].data.types,
        }
      }
      dispatch(addDataToHomepage(newdata))
      dispatch(endLoading())
    }
  }
}
