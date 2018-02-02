import React, { PureComponent } from 'react';
import { View, Animated, Text } from 'react-native';
import styles from './PokemonDetail.styles';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

class PokemonDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lineWidth: 0
    };
    this.lineAnimationValue = new Animated.Value(0);
    this._handleLineLayout = this._handleLineLayout.bind(this);
  }

  componentDidMount() {
    this.startLineAnimation();
  }

  startLineAnimation() {
    Animated.timing(this.lineAnimationValue, {
      toValue: 1,
      duration: 500,
      delay: 700
    }).start();
  }

  _handleLineLayout({ nativeEvent: { layout: { width } } }) {
    this.setState({ lineWidth: width });
  }

  render() {
    const { attack, defense, speed, abilities } = this.props;
    const { lineWidth } = this.state;

    const attackTranslateX = this.lineAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, lineWidth < attack ? lineWidth - 4 : attack]
    });
    const defenseTranslateX = this.lineAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, lineWidth < defense ? lineWidth - 4 : defense]
    });
    const speedTranslateX = this.lineAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, lineWidth < speed ? lineWidth - 4 : speed]
    });

    return (
      <View style={styles.container}>
        <View style={styles.lineRow}>
          <Icon name={'uniF102'} style={styles.icon} color={'#dd611b'} />
          <View style={[styles.line]} onLayout={this._handleLineLayout}>
            <Animated.View
              style={[
                styles.activeLine,
                styles.attackBg,
                { transform: [{ translateX: attackTranslateX }] }
              ]}
            />
          </View>
        </View>
        <View style={styles.lineRow}>
          <Icon name={'uniF101'} style={styles.icon} color={'#55addd'} />
          <View style={[styles.line]}>
            <Animated.View
              style={[
                styles.activeLine,
                styles.defenseBg,
                { transform: [{ translateX: defenseTranslateX }] }
              ]}
            />
          </View>
        </View>
        <View style={styles.lineRow}>
          <Icon name={'uniF100'} style={styles.icon} color={'#951200'} />
          <View style={[styles.line]}>
            <Animated.View
              style={[
                styles.activeLine,
                styles.speedBg,
                { transform: [{ translateX: speedTranslateX }] }
              ]}
            />
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Abilities</Text>
        </View>
        <View style={styles.abilityRow}>
          {abilities.map(ability => (
            <Text key={ability.name} style={styles.ability}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

PokemonDetail.propTypes = {
  attack: PropTypes.number,
  defense: PropTypes.number,
  speed: PropTypes.number,
  abilities: PropTypes.array
};

export default PokemonDetail;
