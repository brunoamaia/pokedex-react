import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PageLoading } from '../../../common/PageLoading'
import { PokemonCard } from '../PokemonCard'

import { getPokemonDetails } from '../../../../redux/middleware/apiActions/getDataPokemonDetails'

type ReduxParams = {
  isLoading: boolean
  pokemonId: string
}

export function ControllStateCard() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: ReduxParams) => state.isLoading)
  const pokemonId = useSelector((state: ReduxParams) => state.pokemonId)

  useEffect(() => {
    dispatch(getPokemonDetails(pokemonId))
  }, [pokemonId])

  return <>{isLoading ? <PageLoading /> : <PokemonCard />}</>
}
