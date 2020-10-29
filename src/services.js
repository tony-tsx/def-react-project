import store from './store'
import api from './helpers/api'
import { ADD_POKEMONS_IN_LIST, SET_POKEMONS_LIST_END } from './constants/actions'
// import { AxiosError } from 'axios'

const loadPokemons = ( offset, limit ) => {
  api.get( '/pokemon', { params: { offset, limit } } )
    .then( response => {
      store.dispatch( {
        type: ADD_POKEMONS_IN_LIST,
        pokemons: response.data.results
      } )

      if ( response.data.count > ( offset + limit ) )
        loadPokemons( offset + limit, limit )

      else store.dispatch( { type: SET_POKEMONS_LIST_END } )
    } )
    .catch( console.error )
}

loadPokemons( 0, 100 )
