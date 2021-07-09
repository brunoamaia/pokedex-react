import { StatsStyles } from './styles'

import { ProgressBar } from '../ProgressBar'

interface StatsContainerParams {
  stats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
  }
  types: Array<string>
}

export function StatsContainer({ stats, types }: StatsContainerParams) {
  return (
    <StatsStyles>
      <span className={`${types[0]}-txt`}>Base Stats</span>
      <div className="stats">
        <div className="names">
          <p>ATK</p>
          <p>DEF</p>
          <p>HP</p>
          <p>SATK</p>
          <p>SDEF</p>
          <p>SPD</p>
        </div>
        <div className="values">
          <div className="values-details">
            <p>{stats.attack}</p>
            <ProgressBar type={types[0]} value={stats.attack} />
          </div>
          <div className="values-details">
            <p>{stats.defense}</p>
            <ProgressBar type={types[0]} value={stats.defense} />
          </div>
          <div className="values-details">
            <p>{stats.hp}</p>
            <ProgressBar type={types[0]} value={stats.hp} />
          </div>
          <div className="values-details">
            <p>{stats.specialAttack}</p>
            <ProgressBar type={types[0]} value={stats.specialAttack} />
          </div>
          <div className="values-details">
            <p>{stats.specialDefense}</p>
            <ProgressBar type={types[0]} value={stats.specialDefense} />
          </div>
          <div className="values-details">
            <p>{stats.speed}</p>
            <ProgressBar type={types[0]} value={stats.speed} />
          </div>
        </div>
      </div>
    </StatsStyles>
  )
}
