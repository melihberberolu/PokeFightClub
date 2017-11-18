import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  imgWrapper: {
    width: 72,
    height: 72,
    borderRadius: 72,
    overflow: 'hidden',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 72,
    height: 72,
    borderRadius: Platform.OS === 'ios' ? 0 : 72
  }
});

export default styles;
