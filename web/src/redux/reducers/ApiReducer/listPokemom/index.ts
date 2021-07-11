import { createAction, createReducer } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'

interface PokemonListProps {
  name: string
  url: string
}

const INITIAL_STATE: Array<PokemonListProps> = []

export const addPokemonList = createAction('ADD_POKEMON_LIST')

export default createReducer(INITIAL_STATE, {
  [addPokemonList.type]: (state, action: AnyAction) => [...action.payload],
})
