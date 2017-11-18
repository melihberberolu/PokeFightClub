import { INIT_START, INIT_FINISH } from './App.actions';

const initialState = {
  initInProgress: true
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case INIT_START:
      return {
        ...state,
        initInProgress: action.initInProgress
      };
    case INIT_FINISH:
      return {
        ...state,
        initInProgress: action.initInProgress
      };
    default:
      return state;
  }
}
