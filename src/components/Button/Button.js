import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles';
import PropTypes from 'prop-types';

const Button = ({ title, onPress, btnStyle, txtStyle, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, btnStyle]}
      disabled={disabled}
      onPress={() => onPress()}
    >
      <Text style={[styles.title, txtStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  btnStyle: PropTypes.any,
  txtStyle: PropTypes.any,
  disabled: PropTypes.bool
};

export default Button;
