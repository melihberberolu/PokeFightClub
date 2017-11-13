import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import ReduxPersist from "../configs/reduxPersist";
import Rehydration from "../configs/rehydration";

export default function configureStore(initialState, rootReducer, rootSaga) {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middleware));

  const composeEnhancers =
    (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
}
