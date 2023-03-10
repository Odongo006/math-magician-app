import React from 'react';
import { shallow } from 'enzyme';
import Quote from '../Components/quote';

describe('Quote', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Quote />);
  });

  it('renders a main-container div with class quote-container', () => {
    expect(wrapper.find('div.main-container.quote-container')).toHaveLength(1);
  });

  it('renders a paragraph element containing a random quote', () => {
    const quote = wrapper.find('p').text();
    expect(quote).not.toBe('');
  });
});
