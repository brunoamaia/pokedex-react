import styled, { keyframes } from 'styled-components'

const rotationLogo = keyframes`
  0% { transform: rotate(-90deg); }
  100% { transform: rotate(270deg); }
`
const resizeDot = keyframes`
  0% {filter: opacity(0);}
  50% {filter: opacity(1);}
  100% {filter: opacity(0);}
`

export const PageLoadingStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 50px;
  max-height: 50%;
  max-width: 50%;

  h1 {
    display: flex;
    gap: 10px;
    font-weight: 500;
    color: #555;
  }

  .dot-a {
    animation: ${resizeDot} 1.8s infinite linear;
  }
  .dot-b {
    animation: ${resizeDot} 1.8s infinite linear 0.6s;
  }
  .dot-c {
    animation: ${resizeDot} 1.8s infinite linear 1.2s;
  }

  img {
    filter: opacity(0.5);
    animation: ${rotationLogo} 2s infinite linear;
  }
`
