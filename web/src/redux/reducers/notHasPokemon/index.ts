import { createAction, createReducer } from '@reduxjs/toolkit'

type ErrorParams = boolean

const INITIAL_STATE: ErrorParams = false

export const notFoundPokemon = createAction('UPDATE_ERROR_TO_ON')
export const foundPokemon = createAction('UPDATE_ERROR_TO_OFF')

export default createReducer(INITIAL_STATE, {
  [notFoundPokemon.type]: (state, action) => true,
  [foundPokemon.type]: (state, action) => false,
})
