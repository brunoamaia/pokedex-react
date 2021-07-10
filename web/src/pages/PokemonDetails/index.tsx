import { useHistory, useParams } from 'react-router-dom'

import { BodyPokedex } from '../../components/common/BodyPokedex'
import { Footer } from '../../components/common/Footer'
import { Navbar } from '../../components/common/Navbar'

import { PokemonDetailsStyles } from './styles'

interface URLParams {
  id: string
}

export function PokemonDetails() {
  const params = useParams<URLParams>()
  const pokemonId: string = params.id
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
      <BodyPokedex id={pokemonId} isInHomepage={false} />
      <Footer />
    </PokemonDetailsStyles>
  )
}
