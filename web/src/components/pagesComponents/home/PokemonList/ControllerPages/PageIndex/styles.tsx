import styled from 'styled-components'
import { theme } from '../../../../../../theme/theme'

export const PageIndexStyles = styled.div`
  display: flex;
  gap: 3px;
  button {
    padding: 0 10px;
  }

  .active {
    background-color: ${theme.background.body.body};
    border: 4px solid ${theme.background.body.body};
  }
`
