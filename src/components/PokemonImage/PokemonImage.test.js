import React from 'react';
import { shallow } from 'enzyme';
import PokemonImage from './PokemonImage';

describe('Testing Pokemon Image component', () => {
  const props = {
    pokemonId: 11
  };
  const source = { uri: `https://pokeapi.co/media/img/${props.pokemonId}.png` };
  it('renders as expected', () => {
    const wrapper = shallow(<PokemonImage {...props} />);
    expect(wrapper).toMatchSnapshot();
    const imageSource = wrapper.find('Image').prop('source');
    expect(imageSource).toEqual(source);
  });
});
