import { useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'

import Back from '../../../../assets/img/arrow-left.svg'
import Search from '../../../../assets/img/search.svg'

import { HeaderStyles } from './styles'

interface HeaderParams {
  isInHomepage: boolean
}

export function Header({ isInHomepage }: HeaderParams) {
  const router = useHistory()
  const [pokemonSearch, setPokemonSearch] = useState('')

  async function handleSearchPokemon(event: FormEvent) {
    event.preventDefault()

    if (pokemonSearch.trim() === '') {
      return
    }

    setPokemonSearch('')
    router.push(`/pokemon/${pokemonSearch}`)
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
            onClick={() => router.push(`/`)}
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
