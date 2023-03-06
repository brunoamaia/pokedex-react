import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { ErrorPage } from './pages/Error'
import { Home } from './pages/Home'
import { PokemonDetails } from './pages/PokemonDetails'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pokemon/:id" component={PokemonDetails} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
