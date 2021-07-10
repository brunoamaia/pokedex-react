// import { useSelector } from 'react-redux'
import { BodyPokedex } from '../../components/common/BodyPokedex'
import { Navbar } from '../../components/common/Navbar'
import { Footer } from '../../components/common/Footer'

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
      <BodyPokedex isInHomepage={true} />
      <Footer />
    </HomeStyles>
  )
}
