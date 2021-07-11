import { configureStore } from '@reduxjs/toolkit'

import homeDataReducer from '../reducers/ApiReducer/homepageData'
import pokemonListReducer from '../reducers/ApiReducer/listPokemom'
import isLoadingReducer from '../reducers/isLoading'
import limitReducer from '../reducers/limit'
import offsetReducer from '../reducers/offset'

export default configureStore({
  reducer: {
    homeData: homeDataReducer,
    pokemonList: pokemonListReducer,
    isLoading: isLoadingReducer,
    limit: limitReducer,
    offset: offsetReducer,
  },
})
