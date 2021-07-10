import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Search from '../../../assets/img/search.svg'
import Back from '../../../assets/img/arrow-left.svg'

import { NavbarStyles } from './styles'

interface NavbarParams {
  isReading: boolean
}

export function Navbar({ isReading }: NavbarParams) {
  const router = useHistory()
  const [pokemonSearch, setPokemonSearch] = useState('')

  async function handleSearchPokemon(event: FormEvent) {
    event.preventDefault()

    if (pokemonSearch.trim() === '') {
      return
    }

    setPokemonSearch('')
    router.push(`/${pokemonSearch}`)
  }
  return (
    <NavbarStyles>
      <div className="header">
        <div className="main">
          <div className="border">
            <div className={`ligth ${isReading ? 'active' : 'active'}`} />
          </div>
        </div>
        <h1 className="name">POKEDEX</h1>
        <div className="auxiliary">
          <div className="ligth red" />
          <div className="ligth yellow" />
          <div className="ligth green" />
        </div>
      </div>

      <nav>
        <div className="message">
          {isReading ? (
            <button
              className="reading"
              type="button"
              onClick={() => router.push(`/`)}
            >
              <img src={Back} alt="back to home page" />
              <p>Back to home</p>
            </button>
          ) : (
            <p>Search a pokemon or click on your card.</p>
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
      </nav>
    </NavbarStyles>
  )
}
