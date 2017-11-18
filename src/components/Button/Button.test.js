import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Testing Button component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Button title={'button'} onPress={() => {}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ title: 'test button' });
    expect(wrapper).toMatchSnapshot();
  });
  it('renders disabled button as expected', () => {
    const wrapper = shallow(<Button onPress={() =>{}} disabled={false} />);
    wrapper.setProps({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});
