import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import styles from './Loading.styles';
import PropTypes from 'prop-types';

const Loading = ({ loading, style }) => {
  return (
    <Modal transparent onRequestClose={() => {}} visible={loading}>
      <View style={[styles.container, style]}>
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
  style: PropTypes.any
};

export default Loading;
