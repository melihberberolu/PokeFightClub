import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import PropTypes from 'prop-types';
import icoMoonConfig from '../../../resource/selection.json';
const PokeIcon = createIconSetFromIcoMoon(icoMoonConfig);

const Icon = ({ name, size, color, style }) => {
  return <PokeIcon style={style} name={name} size={size} color={color} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.any
};

export default Icon;
