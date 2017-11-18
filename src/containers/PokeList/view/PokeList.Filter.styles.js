import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 6,
    marginTop: 6
  },
  txt: {
    fontSize: 20,
    color: '#000',
    fontWeight: '500'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  btn: {
    marginHorizontal: 6,
    height: 40,
    borderRadius: 6
  },
  activeBtn: {
    backgroundColor: 'green'
  }
});

export default styles;
