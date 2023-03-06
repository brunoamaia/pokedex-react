import { ControlStateCard } from '../../pagesComponents/PokemonDetails/ControlStateCard'
import { ErrorPage } from '../Error'
import { Header } from './Header'
import { PokemonList } from '../../pagesComponents/home/PokemonList'

import { BodyPokedexStyles } from './styles'
import { useSelector } from 'react-redux'

interface BodyPokedexParams {
  isErrorPage?: boolean
  isInHomepage: boolean
}

type ReduxParams = {
  notHasPokemon: boolean
}

export function BodyPokedex({ isErrorPage, isInHomepage }: BodyPokedexParams) {
  const notHasPokemon = useSelector((state: ReduxParams) => state.notHasPokemon)

  return (
    <BodyPokedexStyles>
      <Header isInHomepage={isInHomepage} />
      <div className="display">
        {notHasPokemon || isErrorPage ? (
          <ErrorPage />
        ) : (
          <>{isInHomepage ? <PokemonList /> : <ControlStateCard />}</>
        )}
      </div>
    </BodyPokedexStyles>
  )
}
