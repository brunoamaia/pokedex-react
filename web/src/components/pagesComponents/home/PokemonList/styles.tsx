import styled from 'styled-components'

export const PokemonListStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  height: 100%;

  .list-container {
    overflow-y: scroll;
    height: 100%;
    padding: 20px 0;
    width: 100%;

    .list {
      display: grid;
      grid-template-columns: repeat(5, 150px);
      justify-content: center;
      gap: 10px;
    }
  }

  .loading-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
  }

  @media screen and (max-width: 950px) {
    .list-container {
      .list {
        grid-template-columns: repeat(4, 180px);
      }
    }
  }

  @media screen and (max-width: 900px) {
    .list-container {
      .list {
        grid-template-columns: repeat(4, 150px);
      }
    }
  }

  @media screen and (max-width: 780px) {
    .list-container {
      .list {
        grid-template-columns: repeat(4, 130px);
      }
    }
  }

  @media screen and (max-width: 700px) {
    .list-container {
      .list {
        grid-template-columns: repeat(4, 120px);
      }
    }
  }

  @media screen and (max-width: 650px) {
    .list-container {
      .list {
        grid-template-columns: repeat(3, 140px);
      }
    }
  }

  @media screen and (max-width: 600px) {
    .list-container {
      .list {
        grid-template-columns: repeat(3, 130px);
      }
    }
  }

  @media screen and (max-width: 510px) {
    .list-container {
      .list {
        grid-template-columns: repeat(3, 120px);
      }
    }
  }

  @media screen and (max-width: 450px) {
    .list-container {
      .list {
        grid-template-columns: repeat(2, 150px);
      }
    }
  }

  @media screen and (max-width: 400px) {
    .list-container {
      .list {
        grid-template-columns: repeat(2, 130px);
      }
    }
  }

  @media screen and (max-width: 350px) {
    .list-container {
      .list {
        grid-template-columns: repeat(2, 110px);
        gap: 8px;
      }
    }
  }

  @media screen and (max-width: 320px) {
    .list-container {
      .list {
        grid-template-columns: repeat(1, 160px);
        gap: 8px;
      }
    }
  }
`
