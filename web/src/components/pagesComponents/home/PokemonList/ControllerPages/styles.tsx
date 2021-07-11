import styled from 'styled-components'
import { theme } from '../../../../../theme/theme'

export const ControllerPagesStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 50px;
  height: 50px;
  border-top: 1px solid ${theme.border.pokedexBody};

  .pagination {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  @media screen and (max-width: 800px) {
    height: 90px;
    padding: 0;
    .pagination {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  @media screen and (max-width: 320px) {
    word-wrap: wrap;
    height: 120px;
  }
`
