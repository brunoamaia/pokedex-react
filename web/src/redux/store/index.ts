import { configureStore } from '@reduxjs/toolkit'

import homeDataReducer from '../reducers/ApiReducer/homepageData'
import pokemonListReducer from '../reducers/ApiReducer/listPokemom'

export default configureStore({
  reducer: {
    homeData: homeDataReducer,
    pokemonList: pokemonListReducer,
  },
})
