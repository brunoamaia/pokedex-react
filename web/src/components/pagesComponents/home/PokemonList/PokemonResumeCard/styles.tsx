import styled from 'styled-components'

export const PokemonResumeCardStyles = styled.div`
  background-color: #1f1f2a;
  border-radius: 10px;
  height: 200px;
  padding: 6px;
  cursor: pointer;

  .image-area {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;

    height: 130px;
    width: 100%;
    border-radius: 8px;
    background-color: #fff;

    img {
      transition: 0.2s ease-in-out;
      :hover {
        transform: scale(1.5);
      }
    }

    p {
      position: absolute;
      top: 5px;
      left: 5px;
      font-size: 20px;
      font-weight: 500;
    }
  }

  .types {
    display: flex;
    align-items: flex-start;

    width: 100%;
    gap: 5px;
    margin-top: 10px;

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 22px;
      width: 100%;
      border-radius: 8px;
      font-size: 14px;
    }
  }

  .name {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    padding-top: 5px;
    color: #fff;
  }
`
