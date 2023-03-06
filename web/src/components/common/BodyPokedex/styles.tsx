import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const BodyPokedexStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 730px;
  height: calc(100vh - 180px);
  padding: 0 120px 20px;
  background-color: ${theme.background.body.menu};
  border: 4px solid ${theme.border.pokedexBody};

  .display {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
    border: 5px solid ${theme.border.pokedexBody};
    background-color: ${theme.background.body.frame};
    overflow: hidden;
  }

  @media screen and (max-width: 1080px) {
    padding: 0 90px 20px;
  }

  @media screen and (max-width: 1030px) {
    padding: 0 70px 20px;
  }

  @media screen and (max-width: 1000px) {
    padding: 0 40px 20px;
    min-height: calc(100vh - 150px);
  }

  @media screen and (max-width: 500px) {
    padding: 0 20px 20px;
    height: calc(100vh - 130px);
  }
`
