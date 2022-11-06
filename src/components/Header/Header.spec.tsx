import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { renderWithRouter } from '../../utils/testUtils';
import Header from './Header';

describe('Header', () => {
  it('renders', () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole('heading')).toHaveTextContent('Launch Dashboard');
  });
});
