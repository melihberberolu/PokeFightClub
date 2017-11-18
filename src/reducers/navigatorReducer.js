import AppNavigator from '../navigators/AppNavigator';

const INITIAL_STATE = {
  index: 0,
  routes: [
    {
      routeName: 'PokeListScreen',
      key: 'init'
    }
  ]
};

export default function navigatorReducer(state = INITIAL_STATE, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  return nextState || state;
}
