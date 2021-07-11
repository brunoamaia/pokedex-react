// @ts-nocheck
import { createAction, createReducer } from '@reduxjs/toolkit'

type limitParams = number

const INITIAL_STATE: limitParams = 20

export const setLimit = createAction('UPDATE_LIMIT_VALUE')

export default createReducer(INITIAL_STATE, {
  [setLimit.type]: (state, action) => action.payload,
})
