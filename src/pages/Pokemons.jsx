import { useState, useMemo, useCallback } from 'react'
import Row from '../components/Row'
import Col from '../components/Col'
import PokemonListItem from '../components/PokemonListItem'
import styled from 'styled-components'
import Input from '../components/Input'
import usePokemons from '../hooks/usePokemons'
import useDonePokemonLoad from '../hooks/useDonePokemonLoad'
import usePokemonsQty from '../hooks/usePokemonsQty'

const Pokemons = () => {
  const [ page, setPage ] = useState( 1 )
  const [ search, setSearch ] = useState( '' )
  const [ qty ] = useState( 10 )
  const pokemons = usePokemons( page, qty, search )
  const done = useDonePokemonLoad()
  const pokemonsQty = usePokemonsQty( search )

  const pageQty = useMemo( () => Math.round( pokemonsQty / qty ), [ pokemonsQty, qty ] )

  const pages = useMemo( () => {
    if ( page <= 6 )
      return Array( pageQty ).fill( undefined )
        .map( ( v, index ) => index + 1 )
        .slice( 0, 11 )
    else
      return Array( pageQty ).fill( undefined )
        .map( ( v, index ) => index + 1 )
        .slice( page - 6, page + 5 )
  }, [ pageQty, page ] )

  const onChangeInput = useCallback( event => {
    setPage( 1 )
    setSearch( event.target.value )
  }, [] )

  const createPageChangeCallback = useCallback( ( number ) => {
    return () => setPage( number )
  }, [] )

  return (
    <Row margin={'10px 0'}>
      <Col>
        { !done && <h5>Carregando...</h5> }
        <Input
          value={search}
          placeholder={'Inserir nome do pokémon...'}
          onChange={onChangeInput} />
        <List>
          { pokemons.map( pokemon => (
            <PokemonListItem key={pokemon.name} pokemon={pokemon}/>
          ) ) }
        </List>
        <ContainerPagesNumber>
          {pages.map( number => (
            <div key={number}
              className={ number === page ? 'active' : undefined }
              onClick={createPageChangeCallback( number )}>
              {number}
            </div>
          ) )}
        </ContainerPagesNumber>
      </Col>
    </Row>
  )
}

const ContainerPagesNumber = styled( Row )`
  align-items: center;
  justify-content: center;
  & > div {
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    width: 44px;
    text-align: center;
    cursor: pointer;
    &.active {
      background-color: ${ props => props.theme.colors.primary };
      color: white;
    }
  }
`

const List = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  border: 1px solid ${props => props.theme.colors.neutral}40;
  border-radius: 5px;
`

export default Pokemons
