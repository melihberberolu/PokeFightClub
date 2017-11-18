import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import PokeList from '../PokeList.container';
// import { store } from '../../../App';
import { Provider } from 'react-redux';

describe('Testing PokeList container', () => {
  const initialState = {
    pokemons: [],
    loading: 1,
    limit: 10,
    offset: 10,
    totalCount: null
  };
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });
  it('should render the container component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <PokeList />
      </Provider>
    );
  });
});
