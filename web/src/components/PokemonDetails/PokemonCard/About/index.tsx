import { AboutStyles } from './styles'

import Height from '../../../../assets/img/height.png'
import Weight from '../../../../assets/img/weight.png'

interface AboutParams {
  abilities: Array<string>
  height: number
  types: Array<string>
  weight: number
}
export function About({ abilities, height, types, weight }: AboutParams) {
  return (
    <AboutStyles>
      <span className={`${types[0]}-txt`}>About</span>
      <div className="data">
        <div className="weight">
          <div className="value">
            <img src={Weight} alt="" />
            <p>{weight / 10} Kg</p>
          </div>
          <p>Weight</p>
        </div>
        <div className="height">
          <div className="value">
            <img src={Height} alt="" />
            <p>{height / 10} m</p>
          </div>
          <p>Height</p>
        </div>
        <div className="moves">
          <div className="value">
            {abilities.map((move) => (
              <p key={move}> {move} </p>
            ))}
          </div>
          <p>Moves</p>
        </div>
      </div>
    </AboutStyles>
  )
}
