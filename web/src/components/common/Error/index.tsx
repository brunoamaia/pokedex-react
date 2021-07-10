import { ErrorStyles } from './styles'

import Error from '../../../assets/img/error.png'

interface ErrorParams {
  stats?: number | null
}

export function ErrorPage({ stats }: ErrorParams) {
  return (
    <ErrorStyles>
      <div className="message">
        <h1>Something went wrong.</h1>
        <p>Verify the name or number, or back to home.</p>
      </div>
      <img src={Error} alt="a image of pikachu surprise" />
      {stats && <span>Error: {stats}</span>}
    </ErrorStyles>
  )
}
