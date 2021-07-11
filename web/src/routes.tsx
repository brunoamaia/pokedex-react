import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { PokemonDetails } from './pages/PokemonDetails'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/pokemon/:id" component={PokemonDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
