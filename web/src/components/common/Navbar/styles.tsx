import styled from 'styled-components'

import { theme } from '../../../theme/theme'

export const NavbarStyles = styled.header`
  width: 1200px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    background-color: ${theme.background.body.body};
    border: 4px solid ${theme.border.pokedexBody};
    border-bottom: none;
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 86px;
    width: 86px;
    margin: 0 37px;
    background-color: ${theme.background.body.frame};
    border-radius: 50%;

    .border {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 75%;
      width: 75%;
      border-radius: 50%;
      background-color: ${theme.border.pokedexBody};
    }

    .ligth {
      height: 85%;
      width: 85%;
      border-radius: 50%;
      background-color: ${theme.background.body.lightBlue};
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    }

    .active {
      position: relative;
      background-color: ${theme.background.body.lightBlueReading};

      &:after {
        content: '';
        position: absolute;
        top: 18px;
        left: 18px;
        height: 8px;
        width: 10px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.7);
        box-shadow: 0 0 10px #fff;
      }
    }
  }

  .name {
    color: ${theme.text.body.primary};
    font-size: 40px;
  }

  .auxiliary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .ligth {
      position: relative;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: ${theme.border.pokedexBody};

      &:after {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
      }
    }
    .red {
      &:after {
        background-color: ${theme.background.body.lightRed};
      }
    }
    .yellow {
      &:after {
        background-color: ${theme.background.body.lightYellow};
      }
    }
    .green {
      &:after {
        background-color: ${theme.background.body.lightGreen};
      }
    }
  }

  button {
    background-color: ${theme.border.pokedexBody};
  }
`
