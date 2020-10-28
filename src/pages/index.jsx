import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Pokemons from './Pokemons'

const Pages = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/home' exact component={Home}/>
      <Route path='/pokemons' exact component={Pokemons}/>
    </Switch>
  )
}

export default Pages
