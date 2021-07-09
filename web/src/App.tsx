import Routes from './routes'
import { Provider } from 'react-redux'

import store from './redux/store'

import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  )
}

export default App
