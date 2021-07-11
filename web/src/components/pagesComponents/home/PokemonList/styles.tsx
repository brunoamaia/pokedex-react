import styled from 'styled-components'

export const PokemonListStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  height: 100%;

  .list-container {
    overflow-y: scroll;
    height: 100%;
    padding: 20px 0;
    width: 100%;

    .list {
      display: grid;
      grid-template-columns: repeat(5, 150px);
      justify-content: center;
      gap: 10px;
    }
  }

  .loading-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
  }
`
