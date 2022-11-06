import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Loading from './Loading';

describe('Loading', () => {
  it('renders', () => {
    render(<Loading />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
