import { createAction, createReducer } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'

interface PokemonAllDataParams {
  abilities: Array<string>
  height: number
  id: number
  image: {
    front: string
    back: string
  }
  name: string
  stats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
  }
  types: Array<string>
  weight: number
}

const INITIAL_STATE: PokemonAllDataParams = {
  abilities: [],
  height: 0,
  id: 0,
  image: {
    front: '',
    back: '',
  },
  name: '',
  stats: {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
  types: [],
  weight: 0,
}

export const addPokemonDetails = createAction('ADD_POKEMON_DETAILS')

export default createReducer(INITIAL_STATE, {
  [addPokemonDetails.type]: (state, action: AnyAction) => action.payload,
})
