import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from './Pokemon';

const pokemon = {
  pkdx_id: 12,
  name: 'pikachu'
};

const showPokemonDetail = jest.fn();


describe('Testing Pokemon component', () => {
  const wrapper = shallow(<Pokemon pokemon={pokemon} showPokemonDetail={showPokemonDetail} />);
  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('click show pokemon detail', () => {
    wrapper.simulate('press');
    expect(showPokemonDetail).toHaveBeenCalled();
  });
});
