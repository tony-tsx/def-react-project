import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { memo } from 'react'

const PokemonListItem = ( { pokemon } ) => {
  return (
    <Item>
      <CustomLink to={`/pokemons/${pokemon.name}`}>
        {pokemon.name}
      </CustomLink>
    </Item>
  )
}

const CustomLink = styled( Link )`
  width: 100%;
  display: flex;
  padding: 15px 5px;
  text-decoration: none;
  color: black;
`

const Item = styled.li`
  width: 100%;
  border-bottom: 1px solid ${ props => props.theme.colors.neutral }40;
  &:last-child {
    border-bottom: unset;
  }
`

PokemonListItem.propTypes = {
  pokemon: PropTypes.objectOf( {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  } ).isRequired
}

export default memo( PokemonListItem )
