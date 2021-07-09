import { useEffect, useState } from 'react'

import api from '../../../services/api'

import { PokemonCardStyles } from './styles'

interface PokemonAllDataProps {
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

interface PokemonDetailsProps {
  id: number
}
export function PokemonCard({ id }: PokemonDetailsProps) {
  const [pokemonInfos, setpokemonInfos] = useState<PokemonAllDataProps>()
  async function SearchPokemonData() {
    try {
      api.get(`pokemon/${id}`).then((response) => {
        const newdata = response.data
        let movesPokemon = []
        if (newdata.abilities.length > 1) {
          for (let i = 0; i < newdata.abilities.length; i++) {
            movesPokemon[i] = newdata.abilities[i].ability.name
          }
        } else {
          movesPokemon = [newdata.abilities[0].ability.name]
        }

        let typesPokemon = []
        if (newdata.types.length > 1) {
          for (let i = 0; i < newdata.types.length; i++) {
            typesPokemon[i] = newdata.types[i].type.name
          }
        } else {
          typesPokemon = [newdata.types[0].type.name]
        }
        const pokeDetail: PokemonAllDataProps = {
          abilities: movesPokemon,
          height: newdata.height,
          id: newdata.id,
          image: {
            front: newdata.sprites.front_default,
            back: newdata.sprites.back_default,
          },
          name: newdata.name,
          stats: {
            hp: newdata.stats[0].base_stat,
            attack: newdata.stats[1].base_stat,
            defense: newdata.stats[2].base_stat,
            specialAttack: newdata.stats[3].base_stat,
            specialDefense: newdata.stats[4].base_stat,
            speed: newdata.stats[5].base_stat,
          },
          types: typesPokemon,
          weight: newdata.weight,
        }

        setpokemonInfos(pokeDetail)
      })
    } catch (error) {}
  }
  useEffect(() => {
    SearchPokemonData()
  }, [])

  return (
    <PokemonCardStyles>
      {pokemonInfos !== undefined && (
        <div className={pokemonInfos.types[0]}>
          <h2>{pokemonInfos.name}</h2>
          <div className="picture">
            <img src={pokemonInfos.image.front} alt="" />
            <img src={pokemonInfos.image.back} alt="" />
          </div>
          {pokemonInfos.types.map((type) => (
            <p key={type}> {type} </p>
          ))}

          <br />
          <p>Height: {pokemonInfos.height / 10} m</p>
          <p>Weight: {pokemonInfos.weight}</p>

          <br />
          <p>Moves</p>
          {pokemonInfos.abilities.map((move) => (
            <p key={move}> {move} </p>
          ))}

          <br />
          <span>Base Stats</span>
          <div className="stats">
            <p>ATK</p> <p>{pokemonInfos.stats.attack}</p>
          </div>
          <div className="stats">
            <p>DEF</p> <p>{pokemonInfos.stats.defense}</p>
          </div>
          <div className="stats">
            <p>HP</p> <p>{pokemonInfos.stats.hp}</p>
          </div>
          <div className="stats">
            <p>SATK</p> <p>{pokemonInfos.stats.specialAttack}</p>
          </div>
          <div className="stats">
            <p>SDEF</p> <p>{pokemonInfos.stats.specialDefense}</p>
          </div>
          <div className="stats">
            <p>SPD</p> <p>{pokemonInfos.stats.speed}</p>
          </div>
        </div>
      )}
    </PokemonCardStyles>
  )
}
