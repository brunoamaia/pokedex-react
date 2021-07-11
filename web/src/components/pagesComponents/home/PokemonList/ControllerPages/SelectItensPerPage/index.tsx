// @ts-nocheck
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from '../../../../../../redux/middleware/apiActions/getPokemonList'
import { setLimit } from '../../../../../../redux/reducers/limit'
import { setOffset } from '../../../../../../redux/reducers/offset'

import { SelectItensPerPageStyles } from './styles'

type ReduxParams = {
  limit: number
  offset: number
}
export function SelectItensPerPage() {
  const dispatch = useDispatch()
  const limit: number = useSelector((state: ReduxParams) => state.limit)
  const offset: number = useSelector((state: ReduxParams) => state.offset)

  const [itensPerPage, setItensPerPage] = useState('')

  const options = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
  ]

  function handleChangeItemsPerPage() {
    dispatch(setLimit(itensPerPage))
    dispatch(setOffset(0))
    dispatch(getPokemonList(limit, offset))
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
