// @ts-nocheck
import api from '../../../../services/api'

import { addPokemonList } from '../../../reducers/ApiReducer/listPokemom'

interface PokemonListProps {
  name: string
  url: string
}
type DatabaseProps = Array<PokemonListProps>

export const getPokemonList = (limit: number, offset: number) => {
  return (dispatch) => {
    api
      .get(`pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        const newList: DatabaseProps = response.data.results
        dispatch(addPokemonList(newList))
      })
      .catch((error) => {
        console.log(error.response.status)
      })
  }
}
