import { Link, useHistory, useParams } from 'react-router-dom'

import { PokemonCard } from '../../components/PokemonDetails/PokemonCard'

import { PokemonDetailsStyles } from './styles'

interface URLParams {
  id: string
}

export function PokemonDetails() {
  const params = useParams<URLParams>()
  const pokemonId = Number(params.id)
  const router = useHistory()

  if (pokemonId < 1 || pokemonId > 898) {
    router.push('/')
  }

  return (
    <PokemonDetailsStyles>
      <h1>Detalhes, sala: {pokemonId}</h1>
      <Link to="/">
        <h2>volta para a home</h2>
      </Link>
      <PokemonCard id={pokemonId} />
    </PokemonDetailsStyles>
  )
}
