import { screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { renderWithRouter } from '@/utils/testUtils';
import withMainLayout from './withMainLayout';

vi.mock('@tanstack/react-query', () => ({
  useIsFetching: () => 0,
}));

describe('withMainLayout', () => {
  it('should render a header', () => {
    const Component = withMainLayout(() => <h1>Test</h1>);
    renderWithRouter(<Component />);
    expect(
      screen.getByRole('heading', { name: 'Launch Dashboard' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument();
  });

  it('should render a footer', () => {
    const Component = withMainLayout(() => <h1>Test</h1>);
    renderWithRouter(<Component />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should change title to component name', () => {
    function Component() {
      return <h1>Test</h1>;
    }
    Component.displayName = 'Test Component';
    const ComponentWithLayout = withMainLayout(Component);

    renderWithRouter(<ComponentWithLayout />);

    expect(document.title).toBe('Test Component');
  });
});
