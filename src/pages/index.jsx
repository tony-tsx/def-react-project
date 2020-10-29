import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Pokemons from './Pokemons'
import Pokemon from './Pokemon'

const Pages = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/home' exact component={Home}/>
      <Route path='/pokemons' exact component={Pokemons}/>
      <Route path='/pokemons/:pokemon' exact component={Pokemon}/>
    </Switch>
  )
}

export default Pages
