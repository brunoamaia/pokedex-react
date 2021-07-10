import { useHistory, useParams } from 'react-router-dom'

import { BodyPokedex } from '../../components/common/BodyPokedex'
import { Navbar } from '../../components/common/Navbar'
import { PokemonCard } from '../../components/pagesComponents/PokemonDetails/PokemonCard'

import { PokemonDetailsStyles } from './styles'

interface URLParams {
  id: string
}

export function PokemonDetails() {
  const params = useParams<URLParams>()
  const pokemonId: number | string = params.id
  const router = useHistory()

  if (typeof pokemonId === 'number') {
    if (pokemonId < 1 || pokemonId > 898) {
      if (pokemonId < 10001 || pokemonId > 10002) {
        router.push('/')
      }
    }
  }

  return (
    <PokemonDetailsStyles>
      <Navbar isReading={true} />
      <BodyPokedex />
      <PokemonCard id={pokemonId} />
    </PokemonDetailsStyles>
  )
}
