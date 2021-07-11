import { NavbarStyles } from './styles'

interface NavbarParams {
  isReading: boolean
}

export function Navbar({ isReading }: NavbarParams) {
  return (
    <NavbarStyles>
      <div className="header">
        <div className="main">
          <div className="border">
            <div className={`ligth ${isReading ? 'active' : ''}`} />
          </div>
        </div>
        <h1 className="name">POKEDEX</h1>
        <div className="auxiliary">
          <div className="ligth red" />
          <div className="ligth yellow" />
          <div className="ligth green" />
        </div>
      </div>
    </NavbarStyles>
  )
}
