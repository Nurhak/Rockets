import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import CustomMarker from './CustomMarker';

vi.mock('@react-google-maps/api', () => ({
  Marker: ({ children }: { children: React.ReactNode }) => children,
}));

describe('CustomMarker', () => {
  it('renders the marker', () => {
    render(<CustomMarker lat={52.377956} long={4.89707} text="Amsterdam" />);
    expect(screen.queryByText('Amsterdam')).not.toBeInTheDocument();
  });
});
