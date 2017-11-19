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
  let wrapper;
  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    wrapper = shallow(
      <Provider store={store}>
        <PokeList />
      </Provider>
    );
  });
  it('should render the container component', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(PokeList).length).toEqual(1);
  });
  it('check props matches with initialState', () => {
    expect(wrapper.find(PokeList).prop('output')).toEqual(initialState.output);
  });
});
