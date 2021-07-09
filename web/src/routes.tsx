import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { PokemonDetails } from './pages/PokemonDetails'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/:id" component={PokemonDetails} />
    </BrowserRouter>
  )
}

export default Routes
