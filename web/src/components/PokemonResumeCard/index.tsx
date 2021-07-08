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
  let quantidade = ''
  let types: string[] = []
  if (data.types.length > 1) {
    for (let i = 0; i < data.types.length; i++) {
      types[i] = data.types[i].type.name
    }
    quantidade = 'mais de 1'
  } else {
    types = [data.types[0].type.name]
  }

  return (
    <div>
      <p>
        {data.name} | {data.id}
      </p>
      <img src={data.image} alt="imagem do pokemon" />
      {types.map((type) => (
        <p key={type}>{type}</p>
      ))}
      <p>{quantidade}</p>
    </div>
  )
}
