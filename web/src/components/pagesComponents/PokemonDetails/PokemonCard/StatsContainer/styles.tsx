import styled from 'styled-components'

export const StatsStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 19px;

  span {
    padding: 5px 0 5px;
    font-size: 18px;
    font-weight: 500;
  }

  .stats {
    display: flex;
    justify-content: center;
  }
  .names {
    display: flex;
    flex-direction: column;
    gap: 3px;
    text-align: right;
    padding-right: 5px;
    border-right: 2px solid #254131;
  }

  .values {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding-left: 5px;
  }

  .values-details {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      text-align: left;
      width: 35px;
    }
  }
`
