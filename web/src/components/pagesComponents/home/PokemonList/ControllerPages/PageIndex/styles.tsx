import styled from 'styled-components'
import { theme } from '../../../../../../theme/theme'

export const PageIndexStyles = styled.div`
  display: flex;
  gap: 3px;
  button {
    padding: 0 10px;
  }

  .active {
    background-color: ${theme.background.body.body};
    border: 4px solid ${theme.background.body.body};
  }

  @media screen and (max-width: 800px) {
    gap: 10px;
    button {
      width: 60px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-around;
    gap: 0;
    button {
      width: 55px;
    }
  }

  @media screen and (max-width: 500px) {
    button {
      width: 48px;
    }
  }

  @media screen and (max-width: 450px) {
    display: flex;
    flex-wrap: wrap;
    button {
      width: 40px;
    }
  }
`
