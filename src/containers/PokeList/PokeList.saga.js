import { call, put, takeLatest, select } from 'redux-saga/effects';
import { PokemonList } from '../../api/Api';
import {
  POKE_LIST_REQUEST,
  pokeListError,
  pokeListSuccess
} from './PokeList.actions';
import LoadingStatus from '../../constants/loadingStatus';
import _ from 'lodash';

export const getPokeListState = state => state.pokeList;

export function* pokeListFlow({ payload }) {
  try {
    const { pokemons, offset, limit, totalCount } = yield select(getPokeListState);
    if (totalCount && offset > totalCount) {
      return;
    }
    const newOffset = payload.loading === LoadingStatus.moreLoading && (offset + payload.limit) || payload.limit;
    const { meta, objects } = yield call(PokemonList, {
      params: {
        limit: payload.limit,
        offset: newOffset
      }
    });
    if (objects && objects.length > 0) {
      yield put(
        pokeListSuccess({
          pokemons: _.chunk([
            ..._.flatten(payload.limit === limit && pokemons || []),
            ...objects
          ], 2),
          loading: LoadingStatus.done,
          offset: newOffset,
          limit: payload.limit,
          totalCount: meta.total_count
        })
      );
    }
  } catch (error) {
    yield put(pokeListError({ error, loading: LoadingStatus.done }));
  }
}

export default function* sagaWatcher() {
  yield takeLatest(POKE_LIST_REQUEST, pokeListFlow);
}
