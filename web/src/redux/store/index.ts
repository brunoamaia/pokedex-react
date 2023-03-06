import { configureStore } from '@reduxjs/toolkit'

import apiHomeDataReducer from '../reducers/ApiReducer/homepageData'
import apiPokemonListReducer from '../reducers/ApiReducer/listPokemon'
import apiPokemonDetailReducer from '../reducers/ApiReducer/pokemonDetailsData'
import isLoadingReducer from '../reducers/isLoading'
import limitReducer from '../reducers/limit'
import notHasPokemonReducer from '../reducers/notHasPokemon'
import offsetReducer from '../reducers/offset'
import pokemonIdReducer from '../reducers/pokemonId'

export default configureStore({
  reducer: {
    apiHomeData: apiHomeDataReducer,
    apiPokemonList: apiPokemonListReducer,
    apiPokemonDetail: apiPokemonDetailReducer,
    isLoading: isLoadingReducer,
    limit: limitReducer,
    notHasPokemon: notHasPokemonReducer,
    offset: offsetReducer,
    pokemonId: pokemonIdReducer,
  },
})
