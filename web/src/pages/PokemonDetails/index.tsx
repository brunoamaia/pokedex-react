// @ts-nocheck
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { BodyPokedex } from '../../components/common/BodyPokedex'
import { Footer } from '../../components/common/Footer'
import { Navbar } from '../../components/common/Navbar'
import { setPokemonId } from '../../redux/reducers/pokemomId'

import { BodyContentStyles } from '../styles'

interface URLParams {
  id: string
}

export function PokemonDetails() {
  const params = useParams<URLParams>()
  const pokemonId: string = params.id
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPokemonId(pokemonId))
  }, [pokemonId])

  return (
    <BodyContentStyles>
      <Navbar isReading={true} />
      <BodyPokedex isInHomepage={false} />
      <Footer />
    </BodyContentStyles>
  )
}
