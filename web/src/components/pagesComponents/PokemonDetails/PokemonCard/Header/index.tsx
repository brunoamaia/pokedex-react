import { HeaderStyles } from './styles'

interface HeaderParams {
  id: number
  name: string
}

export function Header({ id, name }: HeaderParams) {
  let number: string = ''
  if (id < 10) {
    number = `00${id}`
  } else if (id < 100) {
    number = `0${id}`
  } else {
    number = `${id}`
  }
  return (
    <HeaderStyles>
      <h2>{name}</h2>
      <span>#{number}</span>
    </HeaderStyles>
  )
}
