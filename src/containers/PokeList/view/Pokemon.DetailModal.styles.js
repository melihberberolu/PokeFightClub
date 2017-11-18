import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  cardWrapper: {
    backgroundColor: '#fff',
    margin: 6,
    marginTop: 84,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 6,
    padding: 12
  },
  imgWrapper: {
    borderWidth: 0
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    alignSelf: 'center',
    marginVertical: 8,
    fontSize: 18,
    fontWeight: '500'
  }
});

export default styles;
