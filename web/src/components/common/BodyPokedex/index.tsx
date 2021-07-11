import { ControllStateCard } from '../../pagesComponents/PokemonDetails/ControllStateCard'
import { Header } from './Header'
import { PokemonList } from '../../pagesComponents/home/PokemonList'
// import { ErrorPage } from '../Error'

import { BodyPokedexStyles } from './styles'

interface BodyPokedexParams {
  isInHomepage: boolean
}

export function BodyPokedex({ isInHomepage }: BodyPokedexParams) {
  return (
    <BodyPokedexStyles>
      <Header isInHomepage={isInHomepage} />
      <div className="display">
        {isInHomepage ? <PokemonList /> : <ControllStateCard />}
        {/* <ErrorPage stats={stats} /> */}
      </div>
    </BodyPokedexStyles>
  )
}
