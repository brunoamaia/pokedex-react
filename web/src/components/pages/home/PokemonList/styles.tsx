import styled from 'styled-components'

export const PokemonListStyles = styled.div`
  .list {
    display: grid;
    grid-template-columns: repeat(5, 150px);
    grid-auto-columns: max-content;
    justify-content: center;
    gap: 10px;
  }
`
