import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Components/Home';

describe('Home', () => {
  it('renders a section with class "main-container"', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('section.main-container')).toBeInTheDocument();
  });

  it('renders a title with class "title-home"', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Welcome to our page!')).toHaveClass('title-home');
  });

  it('renders two paragraphs with lorem ipsum text', () => {
    const { getAllByText } = render(<Home />);
    const paragraphs = getAllByText(/Lorem ipsum dolor sit amet/);
    expect(paragraphs.length).toBe(2);
  });
});
