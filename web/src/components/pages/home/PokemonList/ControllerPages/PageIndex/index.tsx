// import { useState } from 'react'

import { PageIndexStyles } from './styles'

interface PageIndexParams {
  limit: number
  offsetActually: number
}

export function PageIndex({ limit, offsetActually }: PageIndexParams) {
  const quantityPages = Math.ceil(900 / limit)
  const pageActually = offsetActually / limit + 1
  const offsets: Array<number> = []
  for (let i = 0; i < quantityPages; i++) {
    offsets.push(limit * i)
  }
  console.log(offsets)
  console.log(`offset: ${offsetActually} | pagina: ${pageActually}`)

  function handleChangePage(offset: number) {
    console.log(`limit=${limit} | offset=${offset}`)
  }

  return (
    <PageIndexStyles>
      {pageActually < 6 && (
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

      {pageActually >= 6 && pageActually < quantityPages - 5 && (
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
    </PageIndexStyles>
  )
}
