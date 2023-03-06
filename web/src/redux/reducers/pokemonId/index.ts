import { createAction, createReducer } from '@reduxjs/toolkit'

type IdParams = string

const INITIAL_STATE: IdParams = '1'

export const setPokemonId = createAction('UPDATE_POKEMON_ID')

export default createReducer(INITIAL_STATE, {
  [setPokemonId.type]: (state, action) => action.payload,
})
