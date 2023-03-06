import styled from 'styled-components'
import { theme } from '../../../../theme/theme'

export const HeaderStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 20px 0 10px;
  border-bottom: none;

  .reading {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    color: ${theme.text.body.primary};
  }

  .message {
    display: flex;
    align-items: center;
    color: ${theme.text.body.primary};
    height: 60px;

    .home {
      height: 30px;
      padding-top: 5px;
    }

    .reading {
      height: 30px;
    }
  }

  form {
    display: flex;
    gap: 15px;
    height: 60px;
    padding: 0;
    width: 300px;

    input {
      border-radius: 15px;
      padding: 0 10px;
      width: 300px;
      border: 4px solid ${theme.border.pokedexBody};
      color: ${theme.text.body.secondary};
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
  }

  @media screen and (max-width: 900px) {
    padding: 10px 0;
    form {
      gap: 10px;
    }
  }
  @media screen and (max-width: 350px) {
    form {
      display: flex;
      justify-content: center;
      gap: 5px;
      input {
        padding: 0 5px;
        width: 200px;
      }
    }
  }
`
