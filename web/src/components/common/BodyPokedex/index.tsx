import { PokemonList } from '../../pagesComponents/home/PokemonList'
import { PokemonCard } from '../../pagesComponents/PokemonDetails/PokemonCard'
import { Header } from './Header'
// import { ErrorPage } from '../Error'

import { BodyPokedexStyles } from './styles'

interface BodyPokedexParams {
  id?: string
  isInHomepage: boolean
}

export function BodyPokedex({ id, isInHomepage }: BodyPokedexParams) {
  return (
    <BodyPokedexStyles>
      <Header isInHomepage={isInHomepage} />
      <div className="display">
        {isInHomepage ? <PokemonList /> : <>{id && <PokemonCard id={id} />}</>}
        {/* <ErrorPage stats={stats} /> */}
      </div>
    </BodyPokedexStyles>
  )
}