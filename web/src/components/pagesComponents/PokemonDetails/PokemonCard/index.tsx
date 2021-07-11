import { useSelector } from 'react-redux'

import { About } from './About'
import { Header } from './Header'
import { ImagePokemon } from './ImagePokemon'
import { StatsContainer } from './StatsContainer'
import { Types } from './Types'

import Pokeball from '../../../../assets/img/Pokeball.png'

import { PokemonCardStyles } from './styles'

interface PokemonAllDataParams {
  abilities: Array<string>
  height: number
  id: number
  image: {
    front: string
    back: string
  }
  name: string
  stats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
  }
  types: Array<string>
  weight: number
}

type ReduxParams = {
  apiPokemonDetail: PokemonAllDataParams
}

export function PokemonCard() {
  const pokemonInfos = useSelector(
    (state: ReduxParams) => state.apiPokemonDetail
  )

  return (
    <PokemonCardStyles>
      <div className={`details-container ${pokemonInfos.types[0]}`}>
        <img className="pokeball" src={Pokeball} alt="" />
        <Header id={pokemonInfos.id} name={pokemonInfos.name} />

        <div className="infos-container">
          <ImagePokemon image={pokemonInfos.image} />
          <Types types={pokemonInfos.types} />
          <About
            abilities={pokemonInfos.abilities}
            height={pokemonInfos.height}
            types={pokemonInfos.types}
            weight={pokemonInfos.weight}
          />
          <StatsContainer
            stats={pokemonInfos.stats}
            types={pokemonInfos.types}
          />
        </div>
      </div>
    </PokemonCardStyles>
  )
}
