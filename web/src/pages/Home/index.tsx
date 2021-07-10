// import { useSelector } from 'react-redux'
import { PokemonList } from '../../components/pagesComponents/home/PokemonList'
import { Navbar } from '../../components/common/Navbar'

import { HomeStyles } from './styles'

// type DataProps = {
//   data: Array<number>
// }
// type dataprops = Array<number>
export function Home() {
  // const dataRedux: dataprops = useSelector((state: DataProps) => state.data)

  return (
    <HomeStyles>
      <Navbar isReading={false} />
      {/* dataRedux.map((data) => (
        <p key={data}> {data}</p>
      )) */}
      <PokemonList />
    </HomeStyles>
  )
}
