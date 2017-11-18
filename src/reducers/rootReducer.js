import { combineReducers } from 'redux';
import configureStore from '../stores/configureStore';
import initialState from '../stores/initialState';
import rootSaga from '../sagas/rootSaga';
import appReducer from '../containers/App/App.reducer';
import navigatorReducer from '../reducers/navigatorReducer';
import pokeListReducer from '../containers/PokeList/PokeList.reducer';

export default () => {
  const rootReducer = combineReducers({
    nav: navigatorReducer,
    app: appReducer,
    pokeList: pokeListReducer
  });
  return configureStore(initialState, rootReducer, rootSaga);
};
