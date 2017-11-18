import 'react-native';
import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const wrapper = shallow(<App />);
});
