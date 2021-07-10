import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const BodyPokedexStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 180px);
  padding: 0 120px 20px;
  background-color: ${theme.background.body.menu};
  border: 4px solid ${theme.border.pokedexBody};

  .display {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
    border: 5px solid ${theme.border.pokedexBody};
    background-color: ${theme.background.body.frame};
    overflow: hidden;
  }
`
