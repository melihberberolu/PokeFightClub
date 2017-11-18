import { call, put, take, select } from 'redux-saga/effects';
import { PokemonList } from '../../../api/Api';
import { pokeListFlow, getPokeListState } from '../PokeList.saga';
import { pokeListSuccess } from '../PokeList.actions';
import sagaHelper from 'redux-saga-testing';
import LoadingStatus from '../../../constants/loadingStatus';

describe('Sagas Test -> PokeList Saga', () => {
  const it = sagaHelper(
    pokeListFlow({ payload: { loading: LoadingStatus.loading, limit: 10 } })
  );
  it('should get the list of poke list state', result => {
    expect(result).toEqual(select(getPokeListState));
    return { pokemons: [[{}, {}]], offset: 20, totalCount: 60, limit: 10 };
  });
  it('should get call api', result => {
    expect(result).toEqual(
      call(PokemonList, { params: { limit: 10, offset: 10 } })
    );
    return { meta: { total_count: 60 }, objects: [{ pkdx_id: 1 }] };
  });
  it('trigger success action', result => {
    expect(result).toEqual(
      put(
        pokeListSuccess({
          pokemons: [[{}, {}], [{ pkdx_id: 1 }]],
          loading: LoadingStatus.done,
          offset: 10,
          limit: 10,
          totalCount: 60
        })
      )
    );
  });
});
