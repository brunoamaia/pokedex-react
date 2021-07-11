// import { useSelector } from 'react-redux'
import { BodyPokedex } from '../../components/common/BodyPokedex'
import { Navbar } from '../../components/common/Navbar'
import { Footer } from '../../components/common/Footer'

import { HomeStyles } from './styles'

export function Home() {
  return (
    <HomeStyles>
      <Navbar isReading={false} />
      <BodyPokedex isInHomepage={true} />
      <Footer />
    </HomeStyles>
  )
}
