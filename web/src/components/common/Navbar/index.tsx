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
            <div className={`light ${isReading ? 'active' : ''}`} />
          </div>
        </div>
        <h1 className="name">POKEDEX</h1>
        <div className="auxiliary">
          <div className="light red" />
          <div className="light yellow" />
          <div className="light green" />
        </div>
      </div>
    </NavbarStyles>
  )
}
