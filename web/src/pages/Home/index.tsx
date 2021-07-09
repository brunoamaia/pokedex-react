import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PokemonList } from '../../components/home/PokemonList'
import { HomeStyles } from './styles'

type DataProps = {
  data: Array<number>
}
type dataprops = Array<number>
export function Home() {
  const dataRedux: dataprops = useSelector((state: DataProps) => state.data)

  return (
    <HomeStyles>
      <h1>Home</h1>
      {dataRedux.map((data) => (
        <p key={data}> {data}</p>
      ))}

      <Link to="/10">
        <h2>Detalhes</h2>
      </Link>
      <PokemonList />
    </HomeStyles>
  )
}
