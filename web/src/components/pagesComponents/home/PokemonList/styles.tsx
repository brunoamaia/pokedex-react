import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const PokemonListStyles = styled.div`
  background-color: ${theme.background.body.menu};
  border-left: 4px solid ${theme.border.pokedexBody};
  border-right: 4px solid ${theme.border.pokedexBody};

  .frame {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0 120px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    background-color: ${theme.background.body.frame};
    border: 5px solid ${theme.border.pokedexBody};
    border-bottom: none;
    max-height: 500px;

    .display {
      overflow-y: scroll;
      height: 490px;
      padding: 20px 0;
      width: 94%;

      .list {
        display: grid;
        grid-template-columns: repeat(5, 150px);
        justify-content: center;
        gap: 10px;
      }
    }
  }
`
