import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <div>
        <h1> Pokédex </h1>
        <ul>
          { pokemonList
            .map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)}
        </ul>
      </div>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })),
};

export default Pokedex;
