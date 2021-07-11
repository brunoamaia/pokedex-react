// @ts-nocheck
import { createAction, createReducer } from '@reduxjs/toolkit'

type offsetParams = number

const INITIAL_STATE: offsetParams = 550

export const setOffset = createAction('UPDATE_OFFSET_VALUE')

export default createReducer(INITIAL_STATE, {
  [setOffset.type]: (state, action) => action.payload,
})
