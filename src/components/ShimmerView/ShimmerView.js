import React from 'react';
import { Image, View } from 'react-native';
import Shimmer from 'react-native-shimmer';
import PropTypes from 'prop-types';
import range from 'lodash/range';

const ShimmerView = ({ total, contentSpace, duration, imgPath, imgStyle }) => {
  return (
    <View>
      {range(total || 1).map((v, i) => (
        <View style={{ marginTop: contentSpace || 0 }} key={`shimmer${i}`}>
          <Shimmer
            direction="right"
            animationOpacity={1}
            duration={duration || 750}
          >
            <Image source={imgPath} style={imgStyle} />
          </Shimmer>
        </View>
      ))}
    </View>
  );
};

ShimmerView.propTypes = {
  total: PropTypes.number,
  contentSpace: PropTypes.number,
  duration: PropTypes.number,
  imgPath: PropTypes.any.isRequired,
  imgStyle: PropTypes.any
};

export default ShimmerView;
