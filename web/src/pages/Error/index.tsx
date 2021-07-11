// import { useSelector } from 'react-redux'
import { BodyPokedex } from '../../components/common/BodyPokedex'
import { Navbar } from '../../components/common/Navbar'
import { Footer } from '../../components/common/Footer'

import { ErrorStyles } from './styles'

export function Errorpage() {
  return (
    <ErrorStyles>
      <Navbar isReading={false} />
      <BodyPokedex isInHomepage={false} isErrorPage={true} />
      <Footer />
    </ErrorStyles>
  )
}
