import Col from '../components/Col'
import Row from '../components/Row'
import usePokemon from '../hooks/usePokemon'
import usePokemonDetails from '../hooks/usePokemonDetails'
// import { useRoute, useParams } from 'react-router-dom'
// useRoute().params
// useParams()

const Pokemon = ( {
  match: { params }
} ) => {
  const pokemon = usePokemon( params.pokemon )
  const { details, loading } = usePokemonDetails( params.pokemon )
  return (
    <Row>
      <Col margin={'10px 0'}>
        <h1 style={ { textTransform: 'capitalize' } }>{pokemon.name}</h1>
        { loading && <h5>Carregando...</h5> }
        { !loading && (
          <Row>
            <Col>
              <h3>Altura: {details.height}</h3>
              <h3>Peso: {details.weight}</h3>
            </Col>
            <Col></Col>
          </Row>
        ) }
      </Col>
    </Row>
  )
}

export default Pokemon
