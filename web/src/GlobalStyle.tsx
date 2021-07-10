import { createGlobalStyle } from 'styled-components'

import { theme } from './theme/theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    color: #29292E;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    border-radius: 15px;
    padding: 0 15px;
    color: ${theme.text.body.primary};
    border: 4px solid ${theme.border.pokedexBody};
    background-color: ${theme.border.pokedexBody};
    cursor: pointer;
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


  .bug-txt {
    color: ${theme.type.bug};
  }
  .dark-txt {
    color: ${theme.type.dark};
  }
  .dragon-txt {
    color: ${theme.type.dragon};
  }
  .electric-txt {
    color: ${theme.type.electric};
  }
  .fairy-txt {
    color: ${theme.type.fairy};
  }
  .fighting-txt {
    color: ${theme.type.fighting};
  }
  .fire-txt {
    color: ${theme.type.fire};
  }
  .flying-txt {
    color: ${theme.type.flying};
  }
  .ghost-txt {
    color: ${theme.type.ghost};
  }
  .grass-txt {
    color: ${theme.type.grass};
  }
  .ground-txt {
    color: ${theme.type.ground};
  }
  .ice-txt {
    color: ${theme.type.ice};
  }
  .normal-txt {
    color: ${theme.type.normal};
  }
  .poison-txt {
    color: ${theme.type.poison};
  }
  .psychic-txt {
    color: ${theme.type.psychic};
  }
  .rock-txt {
    color: ${theme.type.rock};
  }
  .shadow-txt {
    color: ${theme.type.shadow};
  }
  .steel-txt {
    color: ${theme.type.steel};
  }
  .unknown-txt {
    color: ${theme.type.unknown};
  }
  .water-txt {
    color: ${theme.type.water};
  }

`
