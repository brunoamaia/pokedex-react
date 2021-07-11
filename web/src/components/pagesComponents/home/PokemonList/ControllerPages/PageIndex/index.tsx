// @ts-nocheck
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from '../../../../../../redux/middleware/apiActions/getPokemonList'
import { setOffset } from '../../../../../../redux/reducers/offset'
import { PageIndexStyles } from './styles'

type ReduxParams = {
  limit: number
  offset: number
}
export function PageIndex() {
  const dispatch = useDispatch()
  const offset: number = useSelector((state: ReduxParams) => state.offset)
  const limit: number = useSelector((state: ReduxParams) => state.limit)
  console.log(`limit: ${limit} | offset: ${offset}`)

  const quantityPages = Math.ceil(900 / limit)
  const pageActually = offset / limit + 1
  const offsets: Array<number> = []
  for (let i = 0; i < quantityPages; i++) {
    offsets.push(limit * i)
  }

  function handleChangePage(offset: number) {
    dispatch(setOffset(offset))
    dispatch(getPokemonList(limit, offset))
  }

  return (
    <PageIndexStyles>
      {pageActually < 5 && (
        <>
          <button onClick={() => handleChangePage(offsets[0])}>1</button>
          <button onClick={() => handleChangePage(offsets[1])}>2</button>
          <button onClick={() => handleChangePage(offsets[2])}>3</button>
          <button onClick={() => handleChangePage(offsets[3])}>4</button>
          <button onClick={() => handleChangePage(offsets[4])}>5</button>
          <button>...</button>
          <button onClick={() => handleChangePage(offsets[quantityPages - 1])}>
            {quantityPages}
          </button>
        </>
      )}

      {pageActually >= 5 && quantityPages - pageActually >= 4 && (
        <>
          <button onClick={() => handleChangePage(offsets[0])}>1</button>
          <button>...</button>
          <button onClick={() => handleChangePage(offsets[pageActually - 2])}>
            {pageActually - 1}
          </button>
          <button onClick={() => handleChangePage(offsets[pageActually - 1])}>
            {pageActually}
          </button>
          <button onClick={() => handleChangePage(offsets[pageActually])}>
            {pageActually + 1}
          </button>
          <button>...</button>
          <button onClick={() => handleChangePage(offsets[quantityPages - 1])}>
            {quantityPages}
          </button>
        </>
      )}

      {pageActually >= 5 && quantityPages - pageActually < 4 && (
        <>
          <button onClick={() => handleChangePage(offsets[0])}>1</button>
          <button>...</button>
          <button onClick={() => handleChangePage(offsets[quantityPages - 5])}>
            {quantityPages - 4}
          </button>
          <button onClick={() => handleChangePage(offsets[quantityPages - 4])}>
            {quantityPages - 3}
          </button>
          <button onClick={() => handleChangePage(offsets[quantityPages - 3])}>
            {quantityPages - 2}
          </button>
          <button onClick={() => handleChangePage(offsets[quantityPages - 2])}>
            {quantityPages - 1}
          </button>
          <button onClick={() => handleChangePage(offsets[quantityPages - 1])}>
            {quantityPages}
          </button>
        </>
      )}
    </PageIndexStyles>
  )
}
