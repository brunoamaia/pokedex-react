import { PageLoadingStyles } from './styles'

import Pokeball from '../../../assets/img/pokeball.svg'

export function PageLoading() {
  return (
    <PageLoadingStyles>
      <h1>
        Loading
        <div className="dot-a">.</div>
        <div className="dot-b">.</div>
        <div className="dot-c">.</div>
      </h1>
      <img src={Pokeball} alt="" />
    </PageLoadingStyles>
  )
}
