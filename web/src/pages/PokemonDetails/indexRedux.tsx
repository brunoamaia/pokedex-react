import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PokemonDetailsStyles } from './styles'

type DataProps = {
  data: Array<number>
}
interface URLParams {
  id: string
}
export function PokemonDetails() {
  const params = useParams<URLParams>()
  const pokemonId = params.id

  const dataRedux = useSelector((state: DataProps) => state.data)
  const dispatch = useDispatch()
  function addValueAction() {
    dispatch({ type: 'ADD_VALUE', value: dataRedux.length + 1 })
  }
  return (
    <PokemonDetailsStyles>
      <h1>Detalhes, sala: {pokemonId}</h1>
      <div className="values">
        {dataRedux.map((data) => (
          <p key={data}>{data},</p>
        ))}
      </div>
      <button type="button" onClick={addValueAction}>
        Adicionar valor
      </button>

      <Link to="/">
        <h2>volta para a home</h2>
      </Link>
    </PokemonDetailsStyles>
  )
}
