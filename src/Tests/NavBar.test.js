import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import NavBar from '../Components/NavBar';

describe('NavBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('renders a nav element with class navbar', () => {
    expect(wrapper.find('nav').hasClass('navbar')).toBe(true);
  });

  it('renders a h1 element with class title', () => {
    expect(wrapper.find('h1').hasClass('title')).toBe(true);
  });

  it('renders NavLink components for each link in the links array', () => {
    const links = [
      { id: 1, text: 'Home', path: '/math-magician' },
      { id: 2, text: 'Calculator', path: '/calculator' },
      { id: 3, text: 'Quote', path: '/quote' },
    ];
    expect(wrapper.find(NavLink)).toHaveLength(links.length);
  });
});
