import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app without crashing', () => {
  render(<App />);
  const mainContent = document.querySelector('.main-content');
  expect(mainContent).toBeInTheDocument();
});
