import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const FooterStyles = styled.footer`
  height: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${theme.background.body.body};
  border: 4px solid ${theme.border.pokedexBody};
  border-top: none;

  .powered {
    color: ${theme.text.body.primary};
    font-size: 20px;

    p {
      padding-right: 8px;
    }
  }

  @media screen and (max-width: 500px) {
    height: 50px;
  }
`
