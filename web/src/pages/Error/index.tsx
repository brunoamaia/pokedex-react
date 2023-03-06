// import { useSelector } from 'react-redux'
import { BodyPokedex } from '../../components/common/BodyPokedex'
import { Navbar } from '../../components/common/Navbar'
import { Footer } from '../../components/common/Footer'

import { BodyContentStyles } from '../styles'

export function ErrorPage() {
  return (
    <BodyContentStyles>
      <Navbar isReading={false} />
      <BodyPokedex isInHomepage={false} isErrorPage={true} />
      <Footer />
    </BodyContentStyles>
  )
}
