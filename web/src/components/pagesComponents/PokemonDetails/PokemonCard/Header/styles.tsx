import styled from 'styled-components'

export const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  font-size: 15px;
  height: 60px;
  position: relative;

  h2 {
    font-size: 28px;
    font-weight: 600;
    text-transform: capitalize;
  }

  span {
    position: absolute;
    top: 5px;
    right: 10px;
    font-weight: 500;
  }

  @media screen and (max-width: 500px) {
    padding-bottom: 60px;
  }
`
