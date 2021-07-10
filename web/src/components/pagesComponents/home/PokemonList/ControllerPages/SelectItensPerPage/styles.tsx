import styled from 'styled-components'
import { theme } from '../../../../../../theme/theme'

export const SelectItensPerPageStyles = styled.form`
  display: flex;
  gap: 20px;

  button {
    height: 30px;
    background-color: ${theme.border.pokedexBody};
    color: ${theme.text.body.primary};
  }

  fieldset {
    border: none;
  }

  select {
    height: 30px;
    width: 120px;
    text-align: center;
    border-radius: 0.8rem;
    color: ${theme.text.body.primary};
    background: ${theme.border.pokedexBody};
    border: none;
  }
`
