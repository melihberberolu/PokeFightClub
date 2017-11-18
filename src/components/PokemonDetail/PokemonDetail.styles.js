import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 6
  },
  icon: {
    fontSize: 24
  },
  line: {
    width: '100%',
    height: 14,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ccc',
    flex: 1,
    marginLeft: 10,
    overflow: 'hidden'
  },
  lineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  activeLine: {
    height: 30,
    position: 'absolute',
    right: '100%',
    width: '100%',
    backgroundColor: '#dd611b'
  },
  attackBg: {
    backgroundColor: '#dd611b'
  },
  defenseBg: {
    backgroundColor: '#55addd'
  },
  speedBg: {
    backgroundColor: '#951200'
  },
  ability: {
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.80)',
    textAlign: 'center',
    marginRight: 6
  },
  abilityRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleWrapper: {
    paddingBottom: 2,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderColor: '#959595',
    width: '25%'
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.8)'
  }
});

export default styles;
