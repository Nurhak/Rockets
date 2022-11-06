import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders', () => {
    const date = new Date(2020, 0, 1);
    vi.setSystemTime(date);
    render(<Footer />);
    expect(
      screen.getByText(`© ${date.getFullYear()} All Rights Reserved.`)
    ).toBeInTheDocument();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
});
