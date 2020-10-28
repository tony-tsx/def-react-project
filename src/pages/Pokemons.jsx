import { useEffect, useState } from 'react'
import Row from '../components/Row'
import Col from '../components/Col'
import api from '../helpers/api'
import { Link } from 'react-router-dom'

const Pokemons = () => {
  const [ loading, setLoading ] = useState( false )
  const [ pokemons, setPokemons ] = useState( [] )

  useEffect( () => {
    setLoading( true )
    api.get( '/pokemon', { params: { limit: 40 } } )
      .then( response => {
        setPokemons( response.data.results )
      } )
      .catch( error => console.error( error ) )
      .finally( () => setLoading( false ) )
  }, [] )

  return (
    <Row>
      <Col>
        { loading && <h5>Carregando...</h5> }
        <ul>
          { pokemons.map( pokemon => (
            <li key={pokemon.id}>
              <Link to={`/pokemons/${pokemon.name}`}>
                {pokemon.name}
              </Link>
            </li>
          ) ) }
        </ul>
      </Col>
    </Row>
  )
}

export default Pokemons
