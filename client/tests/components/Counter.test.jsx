import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../../src/components/Counter';

describe('<Counter />', () => {
  const props = {
    count: 0,
    increase: jest.fn(),
    decrease: jest.fn(),
  };

  it('renders correctly', () => {
    const component = renderer.create(<Counter {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
