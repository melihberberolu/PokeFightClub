import ReduxPersist from './reduxPersist';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import { initFinish } from '../containers/App/App.actions';

const updateReducers = store => {
  const reducerVersion = ReduxPersist.reducerVersion;
  const config = ReduxPersist.storeConfig;
  const rehydrated = () => store.dispatch(initFinish());

  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        persistStore(store, config, rehydrated).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, config, rehydrated);
      }
    })
    .catch(() => {
      persistStore(store, config, rehydrated);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default updateReducers;
