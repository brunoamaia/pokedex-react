import { TypesStyles } from './styles'

interface TypesParams {
  types: Array<string>
}

export function Types({ types }: TypesParams) {
  return (
    <TypesStyles>
      {types.map((type) => (
        <p key={type} className={type}>
          {' '}
          {type}{' '}
        </p>
      ))}
    </TypesStyles>
  )
}
