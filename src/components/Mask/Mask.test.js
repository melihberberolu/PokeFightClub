import React from 'react';
import { shallow } from 'enzyme';
import Mask from './Mask';

describe('Testing Mask component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Mask />);
    expect(wrapper).toMatchSnapshot();
  });
});
