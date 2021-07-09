import { useHistory, useParams } from 'react-router-dom'

import { Navbar } from '../../components/common/Navbar'
import { PokemonCard } from '../../components/pages/PokemonDetails/PokemonCard'

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
      <Navbar isReading={true} />
      <PokemonCard id={pokemonId} />
    </PokemonDetailsStyles>
  )
}
