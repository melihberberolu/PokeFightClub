import { fork, all } from 'redux-saga/effects';
import PokeListSagas from '../containers/PokeList/PokeList.saga';

export default function* rootSaga() {
  yield all([
    fork(PokeListSagas)
  ]);
}
