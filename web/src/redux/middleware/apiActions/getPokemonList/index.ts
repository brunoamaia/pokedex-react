// @ts-nocheck
import api from '../../../../services/api'

import { addPokemonList } from '../../../reducers/ApiReducer/listPokemon'
import { isLoading } from '../../../reducers/isLoading'
import { notFoundPokemon } from '../../../reducers/notHasPokemon'

interface PokemonListProps {
  name: string
  url: string
}
type DatabaseProps = Array<PokemonListProps>

export const getPokemonList = (limit: number, offset: number) => {
  return (dispatch) => {
    dispatch(isLoading())
    api
      .get(`pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        const newList: DatabaseProps = response.data.results
        dispatch(addPokemonList(newList))
      })
      .catch(() => {
        dispatch(notFoundPokemon())
      })
  }
}
