import pokeListReducer from '../PokeList.reducer';
import { POKE_LIST_REQUEST, POKE_LIST_SUCCESS, POKE_LIST_ERROR } from '../PokeList.actions';
import LoadingStatus from '../../../constants/loadingStatus';

const initialState = {
  pokemons: [],
  loading: LoadingStatus.loading,
  limit: 10,
  offset: 10,
  totalCount: null
};

describe('Reducer Test -> Poke List reducer', () => {
  it('return default state', () => {
    const action = { type: '' };
    const newState = pokeListReducer(undefined, action);
    expect(newState).toEqual(newState);
  });
});

describe('Reducer Test -> Poke List reducer -> on pokeListRequest', () => {
  it('returns new state', () => {
    const action = {
      type: POKE_LIST_REQUEST,
      payload: { loading: LoadingStatus.loading, limit: 10 }
    };
    const newState = pokeListReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      loading: action.payload.loading
    });
  });
});

describe('Reducer Test -> Poke List reducer -> on pokeListSuccess', () => {
  it('returns new state', () => {
    const action = {
      type: POKE_LIST_SUCCESS,
      payload: {
        pokemons: [],
        loading: LoadingStatus.done,
        offset: 20,
        limit: 10,
        totalCount: 100
      }
    };
    const newState = pokeListReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      ...action.payload
    });
  });
});

describe('Reducer Test -> Poke List reducer -> on pokeListSuccess', () => {
  it('returns new state', () => {
    const action = {
      type: POKE_LIST_ERROR,
      payload: {
        error: 'Error Msg',
        loading: LoadingStatus.done
      }
    };
    const newState = pokeListReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      ...action.payload
    });
  });
});
