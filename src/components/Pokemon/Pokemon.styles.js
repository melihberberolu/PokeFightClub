import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e9e9e9',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6
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
