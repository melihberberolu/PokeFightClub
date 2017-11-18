import React, { PureComponent } from 'react';
import { Modal, Animated, Dimensions, Text } from 'react-native';
import styles from './Pokemon.DetailModal.styles';
import PropTypes from 'prop-types';
import Mask from '../../../components/Mask/Mask';
import PokemonImage from '../../../components/PokemonImage/PokemonImage';
import PokemonDetail from '../../../components/PokemonDetail/PokemonDetail';

const INIT_CARD_POSITION = {
  width: 0,
  height: 0,
  x: 0,
  y: 0
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');

class PokemonDetailModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: props.isVisible,
      cardPosition: INIT_CARD_POSITION,
      pokemon: null
    };
    this.imageAnimationValue = new Animated.Value(0);
    this.cardAnimationValue = new Animated.Value(0);
  }

  openPokemonDetail = (
    isShow,
    initCardPosition = INIT_CARD_POSITION,
    pokemon = null
  ) => {
    this.setState(
      { isVisible: isShow, cardPosition: initCardPosition, pokemon },
      () => isShow && this.startAnimationChain(isShow)
    );
  };

  startAnimationChain(isShow) {
    Animated.parallel([
      this.startImageAnimation(isShow),
      this.startCardAnimation(isShow)
    ]).start(({ finished }) => {
      if (finished && !isShow) {
        this.openPokemonDetail(false);
      }
    });
  }

  startCardAnimation(isShow) {
    return Animated.timing(this.cardAnimationValue, {
      toValue: isShow ? 1 : 0,
      duration: 300
    });
  }

  startImageAnimation(isShow) {
    return Animated.timing(this.imageAnimationValue, {
      toValue: isShow ? 1 : 0,
      duration: 300
    });
  }

  _generateInterpolate(animVal, inputRange, outputRange) {
    return animVal.interpolate({
      inputRange: inputRange,
      outputRange: outputRange
    });
  }

  render() {
    const { isVisible, pokemon, cardPosition } = this.state;
    if (!isVisible) return null;

    return (
      <Modal visible={isVisible} transparent>
        <Mask onPress={() => this.startAnimationChain(false)} />
        <Animated.View
          style={{
            position: 'absolute',
            zIndex: 9,
            height: cardPosition.height - 12, // -12 for margin size
            width: cardPosition.width - 12, // -12 for margin size
            transform: [
              {
                translateX: this._generateInterpolate(
                  this.imageAnimationValue,
                  [0, 1],
                  [
                    cardPosition.x,
                    SCREEN_WIDTH * 0.5 - cardPosition.width * 0.5
                  ]
                )
              },
              {
                translateY: this._generateInterpolate(
                  this.imageAnimationValue,
                  [0, 1],
                  [cardPosition.y, 104]
                )
              },
              {
                scale: this._generateInterpolate(
                  this.imageAnimationValue,
                  [0, 1],
                  [1, 1.5]
                )
              }
            ]
          }}
        >
          <PokemonImage pokemonId={pokemon.pkdx_id} />
        </Animated.View>
        <Animated.View
          style={[
            styles.cardWrapper,
            {
              paddingTop: cardPosition.height * 1.5,
              opacity: this.cardAnimationValue
            }
          ]}
        >
          <Text style={styles.name}>{pokemon.name}</Text>
          <PokemonDetail
            attack={pokemon.attack}
            defense={pokemon.defense}
            speed={pokemon.speed}
            abilities={pokemon.abilities}
          />
        </Animated.View>
      </Modal>
    );
  }
  static defaultProps = {
    isVisible: false
  };
}

PokemonDetailModal.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

export default PokemonDetailModal;
