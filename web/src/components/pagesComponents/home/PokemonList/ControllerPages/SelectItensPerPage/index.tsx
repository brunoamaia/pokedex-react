import { useState } from 'react'

import { SelectItensPerPageStyles } from './styles'

export function SelectItensPerPage() {
  const [itensPerPage, setItensPerPage] = useState('')

  const options = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
  ]

  function handleChangeItemsPerPage() {
    console.log(itensPerPage)
  }
  return (
    <SelectItensPerPageStyles>
      <button type="button" onClick={handleChangeItemsPerPage}>
        Change
      </button>

      <fieldset>
        <select
          value=""
          id="quantity"
          onChange={(e) => {
            setItensPerPage(e.target.value)
          }}
        >
          <option value="">
            {itensPerPage ? `${itensPerPage}` : 'Itens per page'}
          </option>

          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>
      </fieldset>
    </SelectItensPerPageStyles>
  )
}
