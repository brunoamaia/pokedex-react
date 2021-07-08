import { createGlobalStyle } from 'styled-components'

import { theme } from './theme/theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F8F8F8;
    color: #29292E;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }


  .bug {
    background-color: ${theme.type.bug};
    color: #FFF;
  }
  .dark {
    background-color: ${theme.type.dark};
    color: #FFF;
  }
  .dragon {
    background-color: ${theme.type.dragon};
    color: #FFF;
  }
  .electric {
    background-color: ${theme.type.electric};
    color: #FFF;
  }
  .fairy {
    background-color: ${theme.type.fairy};
    color: #FFF;
  }
  .fighting {
    background-color: ${theme.type.fighting};
    color: #FFF;
  }
  .fire {
    background-color: ${theme.type.fire};
    color: #FFF;
  }
  .flying {
    background-color: ${theme.type.flying};
    color: #FFF;
  }
  .ghost {
    background-color: ${theme.type.ghost};
    color: #FFF;
  }
  .grass {
    background-color: ${theme.type.grass};
    color: #FFF;
  }
  .ground {
    background-color: ${theme.type.ground};
    color: #FFF;
  }
  .ice {
    background-color: ${theme.type.ice};
    color: #FFF;
  }
  .normal {
    background-color: ${theme.type.normal};
    color: #FFF;
  }
  .poison {
    background-color: ${theme.type.poison};
    color: #FFF;
  }
  .psychic {
    background-color: ${theme.type.psychic};
    color: #FFF;
  }
  .rock {
    background-color: ${theme.type.rock};
    color: #FFF;
  }
  .shadow {
    background-color: ${theme.type.shadow};
    color: #FFF;
  }
  .steel {
    background-color: ${theme.type.steel};
    color: #FFF;
  }
  .unknown {
    background-color: ${theme.type.unknown};
    color: #FFF;
  }
  .water {
    background-color: ${theme.type.water};
    color: #FFF;
  }

`
