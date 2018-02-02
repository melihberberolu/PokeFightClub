import { AsyncStorage } from 'react-native';
console.disableYellowBox = true;

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: ['nav', 'app'],
    transforms: []
  }
};

export default REDUX_PERSIST;
