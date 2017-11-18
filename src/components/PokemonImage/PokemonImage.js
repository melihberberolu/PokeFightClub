import React from 'react';
import { View, Image } from 'react-native';
import styles from './PokemonImage.styles';
import PropTypes from 'prop-types';

const PokemonImage = ({ pokemonId }) => {
  return (
    <View style={styles.imgWrapper}>
      <Image
        style={styles.img}
        source={{ uri: `https://pokeapi.co/media/img/${pokemonId}.png` }}
      />
    </View>
  );
};

PokemonImage.propTypes = {
  pokemonId: PropTypes.number.isRequired
};

export default PokemonImage;
