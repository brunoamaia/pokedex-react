import styled from 'styled-components'

import { theme } from '../../../../../theme/theme'

export const ControllerPagesStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.background.body.menu};

  .display {
    height: 140px;
    margin: 0 120px;
    background-color: ${theme.background.body.frame};
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    border: 5px solid ${theme.border.pokedexBody};
    border-top: none;
  }

  .pagination {
    display: flex;
    justify-content: space-around;
  }
`
