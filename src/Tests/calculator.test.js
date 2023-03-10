import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Components/Calculator';

describe('Calculator Component', () => {
  test('renders the calculator component', () => {
    render(<Calculator />);
    const title = screen.getByText('Let\'s do some math!');
    expect(title).toBeInTheDocument();
    const totalInput = screen.getByRole('textbox');
    expect(totalInput).toHaveValue('0');
  });

  test('clicking on the numbers updates the input field', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    const totalInput = screen.getByRole('textbox');
    expect(totalInput).toHaveValue('12');
  });

  test('clicking on the operation buttons updates the state', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    const totalInput = screen.getByRole('textbox');
    expect(totalInput).toHaveValue('');
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(totalInput).toHaveValue('15');
  });

  test('clicking on the AC button clears the input field', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('AC'));
    const totalInput = screen.getByRole('textbox');
    expect(totalInput).toHaveValue('0');
  });
});
