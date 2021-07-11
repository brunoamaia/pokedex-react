import { useEffect } from 'react'

import { PokemonResumeCard } from './PokemonResumeCard'
import { ControllerPages } from './ControllerPages'
import { PageLoading } from '../../../common/PageLoading'

import { PokemonListStyles } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from '../../../../redux/middleware/apiActions/getPokemonList'
import { getDataHomepage } from '../../../../redux/middleware/apiActions/getDataHomepage'

interface PokemonListProps {
  name: string
  url: string
}

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

type ReduxParams = {
  apiHomeData: PokemonResumeProps
  apipokemonList: Array<PokemonListProps>
  isLoading: boolean
  limit: number
  offset: number
}

export function PokemonList() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: ReduxParams) => state.isLoading)
  const limit = useSelector((state: ReduxParams) => state.limit)
  const offset = useSelector((state: ReduxParams) => state.offset)
  const pokemonList = useSelector((state: ReduxParams) => state.apipokemonList)
  const pokemonResume = useSelector((state: ReduxParams) => state.apiHomeData)

  useEffect(() => {
    dispatch(getPokemonList(limit, offset))
  }, [dispatch, limit, offset])

  useEffect(() => {
    dispatch(getDataHomepage(pokemonList))
  }, [pokemonList])

  return (
    <PokemonListStyles>
      <div className="list-container">
        {isLoading ? (
          <div className="loading-page">
            <PageLoading />
          </div>
        ) : (
          <>
            <div className="list">
              {pokemonResume?.length && (
                <>
                  {pokemonResume.map((pokemon) => (
                    <div key={pokemon.id}>
                      <PokemonResumeCard data={pokemon} />
                    </div>
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </div>
      <ControllerPages />
    </PokemonListStyles>
  )
}
