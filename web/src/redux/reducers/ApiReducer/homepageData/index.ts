import { createAction, createReducer } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'

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

const INITIAL_STATE: PokemonResumeProps = []

export const addDataToHomepage = createAction('ADD_DATA_TO_HOMEPAGE')

export default createReducer(INITIAL_STATE, {
  [addDataToHomepage.type]: (state, action: AnyAction) => [...action.payload],
})
