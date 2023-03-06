import styled, { keyframes } from 'styled-components'
import { theme } from '../../../../../theme/theme'

const rotationToBack = keyframes`
 0% { transform: rotateY(0deg) scaleX(1); }
 49% { transform: rotateY(90deg) scaleX(1); }
 51% { transform: rotateY(90deg) scaleX(-1); }
 100% { transform: rotateY(180deg) scaleX(-1); }
`
const rotationToFront = keyframes`
 0% { transform: rotateY(180deg) scaleX(-1); }
 49% { transform: rotateY(270deg) scaleX(-1); }
 51% { transform: rotateY(270deg) scaleX(1); }
 100% { transform: rotateY(360deg) scaleX(1); }
`
export const ImageStyles = styled.div`
  position: absolute;
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  .control {
    margin-bottom: 0;
    cursor: pointer;
    background-color: ${theme.border.pokedexBody};
    padding: 5px 20px;
    border: none;
  }

  .card {
    perspective: 1000px;
    height: 100px;
    width: 100px;
  }

  .image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;

    img {
      height: 100px;
      width: 100px;
    }
  }

  .card.rotation-to-back {
    animation: ${rotationToBack} 1s linear forwards;
  }

  .card.rotation-to-front {
    animation: ${rotationToFront} 1s ease-in 1;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .back {
    color: white;
    transform: rotateY(180deg);
  }
`
