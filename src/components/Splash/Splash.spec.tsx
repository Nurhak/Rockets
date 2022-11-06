import { screen, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Splash from './Splash';

describe('Loading', () => {
  it('renders', () => {
    render(<Splash />);
    expect(screen.getByTestId('splash')).toBeInTheDocument();
  });
});
