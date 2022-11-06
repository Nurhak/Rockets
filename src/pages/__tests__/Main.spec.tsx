import { screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { renderWithRouterAndQueryClient } from '@/utils/testUtils';
import Main from '../Main';

vi.mock('@react-google-maps/api', () => ({
  GoogleMap: ({ children }: { children: React.ReactNode }) => children,
  useJsApiLoader: () => ({ isLoaded: true }),
  Marker: ({ children }: { children: React.ReactNode }) => children,
}));

describe('Main', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders', () => {
    const date = new Date(2020, 0, 1);
    vi.setSystemTime(date);
    renderWithRouterAndQueryClient(<Main />);
    expect(
      screen.getByText(`© ${date.getFullYear()} All Rights Reserved.`)
    ).toBeInTheDocument();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
});
