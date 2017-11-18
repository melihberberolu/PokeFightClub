import {
  POKE_LIST_REQUEST,
  POKE_LIST_SUCCESS,
  POKE_LIST_ERROR,
  pokeListRequest,
  pokeListSuccess,
  pokeListError
} from '../PokeList.actions';
import LoadingStatus from '../../../constants/loadingStatus';

describe('Actions Test -> PokeList Actions', () => {
  it('Action Creator pokeListRequest', () => {
    const requestAction = pokeListRequest({ limit: 10, loading: LoadingStatus.loading });
    expect(requestAction).toEqual({ type: POKE_LIST_REQUEST, payload: { limit: 10, loading: LoadingStatus.loading } });
  });
  it('Action Creator pokeListSuccess', () => {
    const requestAction = pokeListSuccess({ pokemons: [{}, {}], loading: LoadingStatus.done, offset: 10, limit: 10, totalCount: 50});
    expect(requestAction).toEqual({ type: POKE_LIST_SUCCESS, payload: { pokemons: [{}, {}], loading: LoadingStatus.done, offset: 10, limit: 10, totalCount: 50 } });
  });
  it('Action Creator pokeListError', () => {
    const requestAction = pokeListError({ error: 'error', loading: LoadingStatus.done });
    expect(requestAction).toEqual({ type: POKE_LIST_ERROR, payload: { error: 'error', loading: LoadingStatus.done } });
  });
});
