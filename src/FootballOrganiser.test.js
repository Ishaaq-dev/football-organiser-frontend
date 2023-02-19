import { render, screen } from '@testing-library/react';
import FootballOrganiser from './FootballOrganiser';

test('renders learn react link', () => {
  render(<FootballOrganiser />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
