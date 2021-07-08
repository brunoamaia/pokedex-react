import { PokemonList } from '../../components/home/PokemonList'
import { HomeStyles } from './styles'

export function Home() {
  return (
    <HomeStyles>
      <h1>Home</h1>
      <PokemonList />
    </HomeStyles>
  )
}
