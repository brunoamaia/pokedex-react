import styled from 'styled-components'

export const PokemonCardStyles = styled.div`
  position: relative;
  height: 570px;
  width: 360px;
  padding: 10px;
  border-radius: 14px;
  text-align: center;
  background-color: #f8f8f8;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);

  .pokeball {
    position: absolute;
    top: 20px;
    right: 15px;
    height: 20%;
  }

  .details-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 13px;
    height: 100%;
    width: 100%;
  }

  .infos-container {
    position: relative;
    margin: 10px;
    border-radius: 10px;
    height: 430px;
    background-color: #f8f8f8;
    color: #29292e;
  }
`
