import React from 'react';
import { shallow } from 'enzyme';
import ShimmerView from './ShimmerView';

describe('Testing Shimmer View component', () => {
  const props = {
    total: 5,
    imgPath: require('shimmer.png'),
  };
  it('renders as expected', () => {
    const wrapper = shallow(<ShimmerView imgPath={props.imgPath} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders shimmer total count', () => {
    const wrapper = shallow(<ShimmerView {...props} />).find('Shimmer');
    expect(wrapper).toHaveLength(props.total);
  });
});
