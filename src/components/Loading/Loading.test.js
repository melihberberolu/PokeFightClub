import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Testing Loading component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Loading loading={false} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ loading: true });
  });
});
