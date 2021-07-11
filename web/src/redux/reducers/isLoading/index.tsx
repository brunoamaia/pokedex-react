// @ts-nocheck
import { createAction, createReducer } from '@reduxjs/toolkit'

type loadingParams = boolean

const INITIAL_STATE: loadingParams = true

export const isLoading = createAction('UPDATE_LOADING_TO_ON')
export const endLoading = createAction('UPDATE_LOADING_TO_OFF')

export default createReducer(INITIAL_STATE, {
  [isLoading.type]: (state, action) => true,
  [endLoading.type]: (state, action) => false,
})
