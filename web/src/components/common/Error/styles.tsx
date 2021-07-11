import styled from 'styled-components'
import { theme } from '../../../theme/theme'

export const ErrorStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${theme.background.body.frame};

  .message {
    text-align: center;
    color: #555;
  }

  @media screen and (max-width: 600px) {
    .message {
      padding: 0 20px;
    }
    width: 100%;
  }
`
