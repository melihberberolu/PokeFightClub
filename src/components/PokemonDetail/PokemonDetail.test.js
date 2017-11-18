import React from 'react';
import { shallow } from 'enzyme';
import PokemonDetail from './PokemonDetail';

describe('Testing Pokemon Detail component', () => {
  const props = {
    attack: 50,
    defense: 50,
    speed: 50,
    abilities: [{ name: 'posion'}]
  };
  it('renders as expected', () => {
    const wrapper = shallow(<PokemonDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
