import { StyleSheet } from 'react-native';
import Helpers from '../../utils/helpers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e9e9e9',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: Helpers.screenWidth * 0.5
  },

  name: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: '500',
    marginTop: 12
  },
  firstLetter: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold'
  }
});

export default styles;
