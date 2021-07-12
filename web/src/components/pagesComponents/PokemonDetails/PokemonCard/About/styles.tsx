import styled from 'styled-components'

export const AboutStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 135px;

  span {
    padding: 10px 0 5px;
    font-size: 18px;
    font-weight: 500;
  }

  .data {
    display: flex;
    align-items: center;
    justify-content: space-around;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      min-height: 60px;
      font-size: 14px;
      padding: 10px 0;
      gap: 10px;
      height: 100px;

      .value {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        min-width: 100px;
        font-weight: 500;
        height: 50px;
      }

      > p {
        font-size: 11px;
      }
    }
    .height {
      border-left: 1px solid black;
      border-right: 1px solid black;
    }

    .moves .value {
      flex-direction: column;
      line-height: 0.8rem;
      gap: 0.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    height: 120px;
    .data {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 0;

      > div {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        gap: 0;
        min-height: 10px;
        height: 30px;
        > p {
          font-size: 14px;
        }
      }
      .height {
        border: none;
      }

      .moves {
        gap: 10px;
        .value {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding-top: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 360px) {
    height: 150px;

    .moves {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .value {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 10px;
        max-width: 60px;
        p {
          line-height: 80%;
        }
      }
    }
  }
`
