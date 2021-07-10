import { useHistory } from 'react-router-dom'
import { PokemonResumeCardStyles } from './styles'

interface Types {
  slot: number
  type: {
    name: string
  }
}
interface PokemonResumeProps {
  data: {
    id: number
    image: string
    name: string
    types: Array<Types>
  }
}
export function PokemonResumeCard({ data }: PokemonResumeProps) {
  let types: string[] = []
  if (data.types.length > 1) {
    for (let i = 0; i < data.types.length; i++) {
      types[i] = data.types[i].type.name
    }
  } else {
    types = [data.types[0].type.name]
  }

  let number: string = ''
  if (data.id < 10) {
    number = `00${data.id}`
  } else if (data.id < 100) {
    number = `0${data.id}`
  } else {
    number = `${data.id}`
  }

  const router = useHistory()
  function showPokemon() {
    router.push(`/${number}`)
  }

  return (
    <PokemonResumeCardStyles onClick={showPokemon}>
      <div className="image-area">
        <p>#{number}</p>
        <img src={data.image} alt="imagem do pokemon" />
      </div>

      <div className="types">
        {types.map((type) => (
          <p className={type} key={type}>
            {type}
          </p>
        ))}
      </div>
      <p className="name">{data.name}</p>
    </PokemonResumeCardStyles>
  )
}
