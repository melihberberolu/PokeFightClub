import {
  POKE_LIST_REQUEST,
  POKE_LIST_ERROR,
  POKE_LIST_SUCCESS
} from './PokeList.actions';
import LoadingStatus from '../../constants/loadingStatus';

const initialState = {
  pokemons: [],
  loading: LoadingStatus.loading,
  limit: 10,
  offset: 10,
  totalCount: null,
  error: null
};

export default function pokeListReducer(state = initialState, action) {
  switch (action.type) {
    case POKE_LIST_REQUEST:
      return {
        ...state,
        loading: action.payload.loading
      };
    case POKE_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case POKE_LIST_ERROR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
