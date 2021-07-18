import { Link } from 'react-router-dom'

import GitHub from '../../../assets/img/github.svg'
// import Linkedin from '../../../assets/img/linkedin.svg'

import { FooterStyles } from './styles'

export function Footer() {
  return (
    <FooterStyles>
      <div className="powered">
        <p>created by: Bruno Maia</p>
      </div>
      {/* <Link
        to={{ pathname: 'https://www.linkedin.com/in/brunoamaia94/' }}
        target="_blank"
      >
        <img src={Linkedin} alt="" />
      </Link> */}
      <Link to={{ pathname: 'https://github.com/brunoamaia/pokedex-react' }} target="_blank">
        <img src={GitHub} alt="" />
      </Link>
    </FooterStyles>
  )
}
