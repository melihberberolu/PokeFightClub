import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('Testing Icon component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Icon name={'uniF101'} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ name: 'uniF102' });
  });
});
