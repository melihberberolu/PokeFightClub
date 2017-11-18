export const POKE_LIST_REQUEST = 'POKE_LIST_REQUEST';
export const pokeListRequest = ({ limit, loading }) => {
  return {
    type: POKE_LIST_REQUEST,
    payload: {
      loading,
      limit
    }
  };
};

export const POKE_LIST_SUCCESS = 'POKE_LIST_SUCCESS';
export const pokeListSuccess = ({ pokemons, loading, offset, limit, totalCount }) => {
  return {
    type: POKE_LIST_SUCCESS,
    payload: {
      pokemons,
      loading,
      offset,
      limit,
      totalCount
    }
  };
};

export const POKE_LIST_ERROR = 'POKE_LIST_ERROR';
export const pokeListError = ({ error, loading }) => {
  return {
    type: POKE_LIST_ERROR,
    payload: {
      error,
      loading
    }
  };
};
