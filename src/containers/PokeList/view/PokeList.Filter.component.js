import React from 'react';
import { View, Text } from 'react-native';
import styles from './PokeList.Filter.styles';
import PropTypes from 'prop-types';
import Button from '../../../components/Button/Button';
import LIMITS from '../../../constants/queryLimits';
import LoadingStatus from '../../../constants/loadingStatus';

const Filter = ({ onFilterList, limit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Limit: </Text>
      <View style={styles.row}>
        {LIMITS.map(queryLimit => (
          <Button
            key={queryLimit}
            btnStyle={[styles.btn, limit === queryLimit && styles.activeBtn]}
            title={`${queryLimit}`}
            disabled={limit === queryLimit}
            onPress={() => onFilterList(queryLimit, LoadingStatus.loading)}
          />
        ))}
      </View>
    </View>
  );
};

Filter.propTypes = {
  onFilterList: PropTypes.func.isRequired,
  limit: PropTypes.number
};

export default Filter;
