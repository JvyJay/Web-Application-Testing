import React from 'react';
import { render } from '@testing-library/react';
import App, { add } from './App';

test('renders the application', () => {
  render(<App />);
});

test('Adds 1', () => {
  expect(add(1)).toBe(2);
  expect(add(2)).not.toBe(5);
});

test('Bat is found in the dom', () => {
  const { getByText } = render(<App />);

  getByText(/at bat/i);
});
