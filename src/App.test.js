import { render, screen } from '@testing-library/react';
import Router from '../src/application/Router';


test('renders new tab', () => {
  render(<Router/>);
  const tab = screen.getByText(/cómic/i);
  expect(tab).toBeInTheDocument();

});

test('renders new tab', () => {
  render(<Router/>);
  const tab = screen.getByText(/registrate/i);
  expect(tab).toBeInTheDocument();

});

