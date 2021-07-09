import { AnyAction, createStore } from 'redux'

interface DataProps {
  data: number[]
}

const apiData: DataProps = {
  data: [1, 2, 3, 4, 5],
}

function ApiReducer(state = apiData, action: AnyAction) {
  switch (action.type) {
    case 'ADD_VALUE':
      return { ...state, data: [...state.data, action.value] }
    default:
      return state
  }
}

const store = createStore(ApiReducer)

export default store
