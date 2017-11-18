import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import styles from './Mask.styles';
import PropTypes from 'prop-types';

const Mask = ({ style, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
      <View style={[styles.mask, style]} />
    </TouchableWithoutFeedback>
  );
};

Mask.propTypes = {
  style: PropTypes.any,
  onPress: PropTypes.func
};

export default Mask;
