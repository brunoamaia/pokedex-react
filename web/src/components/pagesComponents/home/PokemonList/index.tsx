import { useEffect } from 'react'

import { PokemonResumeCard } from './PokemonResumeCard'
import { ControllerPages } from './ControllerPages'

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
  pokemonList: Array<PokemonListProps>
  homeData: PokemonResumeProps
  limit: number
  offset: number
}

export function PokemonList() {
  const dispatch = useDispatch()
  const pokemonList: Array<PokemonListProps> = useSelector(
    (state: ReduxParams) => state.pokemonList
  )
  const pokemonResume: PokemonResumeProps = useSelector(
    (state: ReduxParams) => state.homeData
  )
  const limit: number = useSelector((state: ReduxParams) => state.limit)
  const offset: number = useSelector((state: ReduxParams) => state.offset)

  useEffect(() => {
    dispatch(getPokemonList(limit, offset))
  }, [dispatch, limit, offset])

  useEffect(() => {
    dispatch(getDataHomepage(pokemonList))
  }, [pokemonList])

  return (
    <PokemonListStyles>
      <div className="list-container">
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
      </div>
      <ControllerPages />
    </PokemonListStyles>
  )
}
