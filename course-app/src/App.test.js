import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the course title', () => {
  render(<App />);
  const linkElement = screen.getByText(/HDip Computer Systems/i);
  expect(linkElement).toBeInTheDocument();
});
