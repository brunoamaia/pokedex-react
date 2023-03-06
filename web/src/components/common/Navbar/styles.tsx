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

    .light {
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

    .light {
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

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    .main {
      height: 70px;
      width: 70px;
    }
    .auxiliary {
      gap: 5px;
      .ligth {
        height: 32px;
        width: 32px;
        &:after {
          top: 5px;
          left: 5px;
          height: 22px;
          width: 22px;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .header {
      height: 80px;
    }
  }
  @media screen and (max-width: 450px) {
    .main {
      height: 50px;
      width: 50px;
      margin: 0 10px;
      .active {
        &:after {
          top: 10px;
          left: 10px;
        }
      }
    }
    .auxiliary {
      gap: 5px;
      .ligth {
        height: 26px;
        width: 26px;
        &:after {
          top: 4px;
          left: 4px;
          height: 18px;
          width: 18px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    .main {
      margin: 0 5px;
    }

    .name {
      font-size: 30px;
    }
    .auxiliary {
      gap: 3px;

      .ligth {
        height: 22px;
        width: 22px;

        &:after {
          top: 3px;
          left: 3px;
          height: 16px;
          width: 16px;
        }
      }
    }
  }
`
