import { useEffect, useState } from 'react'
import api from '../../../../services/api'

import { PokemonResumeCard } from './PokemonResumeCard'
import { ControllerPages } from './ControllerPages'

import { PokemonListStyles } from './styles'

interface PokemonListProps {
  name: string
  url: string
}
type DatabaseProps = Array<PokemonListProps>

interface Types {
  slot: number
  type: {
    name: string
  }
}
type PokemonResumeProps = Array<{
  id: number
  image: string
  name: string
  types: Array<Types>
}>

export function PokemonList() {
  const limit = 100
  const offset = 800
  const [pokemonList, setPokemonList] = useState<PokemonListProps[]>()
  const [pokemonResume, setPokemonResume] = useState<PokemonResumeProps>()

  useEffect(() => {
    api
      .get(`pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        const newdata: DatabaseProps = response.data.results
        setPokemonList(newdata)
      })
      .catch((error) => {
        console.log(error.response.status)
      })
  }, [])

  async function SearchPokemonData() {
    try {
      if (pokemonList !== undefined && pokemonList.length > 1) {
        const searchInfo = pokemonList.map((pokemon) =>
          api.get(`pokemon/${pokemon.name}`)
        )
        const pokemonInfo = await Promise.all(searchInfo)

        const newdata: PokemonResumeProps = []
        for (let i = 0; i < pokemonInfo.length; i++) {
          newdata[i] = {
            id: pokemonInfo[i].data.id,
            image: pokemonInfo[i].data.sprites.front_default,
            name: pokemonInfo[i].data.name,
            types: pokemonInfo[i].data.types,
          }
        }
        setPokemonResume(newdata)
      }
    } catch (error) {}
  }

  useEffect(() => {
    SearchPokemonData()
  }, [pokemonList])
  return (
    <PokemonListStyles>
      <div className="list-container">
        <div className="list">
          {pokemonResume?.length && (
            <>
              {pokemonResume.map((pokemon) => (
                <div key={pokemon.id}>
                  <PokemonResumeCard data={pokemon} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <ControllerPages />
    </PokemonListStyles>
  )
}
