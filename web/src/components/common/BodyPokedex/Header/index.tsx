// @ts-nocheck
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Back from '../../../../assets/img/arrow-left.svg'
import Search from '../../../../assets/img/search.svg'

import { foundPokemon } from '../../../../redux/reducers/notHasPokemon'
import { setPokemonId } from '../../../../redux/reducers/pokemomId'

import { HeaderStyles } from './styles'

interface HeaderParams {
  isInHomepage: boolean
}

export function Header({ isInHomepage }: HeaderParams) {
  const dispatch = useDispatch()
  const router = useHistory()
  const [pokemonSearch, setPokemonSearch] = useState('')

  function handleSearchPokemon(event: FormEvent) {
    event.preventDefault()

    if (pokemonSearch.trim() === '') {
      return
    }

    dispatch(foundPokemon())
    dispatch(setPokemonId(pokemonSearch))
    setPokemonSearch('')
    router.push(`/pokemon/${pokemonSearch}`)
  }

  function handleBacktoHomepage() {
    dispatch(foundPokemon())
    router.push(`/`)
  }

  return (
    <HeaderStyles>
      <div className="message">
        {isInHomepage ? (
          <p>Search a pokemon or click on your card.</p>
        ) : (
          <button
            className="reading"
            type="button"
            onClick={handleBacktoHomepage}
          >
            <img src={Back} alt="back to home page" />
            <p>Back to home</p>
          </button>
        )}
      </div>
      <form onSubmit={handleSearchPokemon}>
        <input
          type="text"
          placeholder="Insert the name or number"
          onChange={(event) => setPokemonSearch(event.target.value)}
          value={pokemonSearch}
        />
        <button type="submit">
          <img src={Search} alt="search the pokemon" />
        </button>
      </form>
    </HeaderStyles>
  )
}
