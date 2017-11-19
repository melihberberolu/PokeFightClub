import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PokemonImage from '../PokemonImage/PokemonImage';
import styles from './Pokemon.styles';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Pokemon extends PureComponent {
  render() {
    const { style, pokemon, showPokemonDetail } = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={() => showPokemonDetail(pokemon, pokemon.pkdx_id)}
      >
        <View ref={ref => (this.image = ref)} collapsable={false}>
          <PokemonImage pokemonId={pokemon.pkdx_id} />
        </View>
        <Text style={styles.name}>{_.upperFirst(pokemon.name)}</Text>
      </TouchableOpacity>
    );
  }
}

Pokemon.propTypes = {
  style: PropTypes.any,
  pokemon: PropTypes.object,
  showPokemonDetail: PropTypes.func
};

export default Pokemon;
