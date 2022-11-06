import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Rocket from '@/assets/rocket.svg';
import LazyImage from './LazyImage';

describe('LazyImage', () => {
  it('should render', () => {
    render(
      <LazyImage src={Rocket} alt="Rocket" className="w-8 h-8 inline-block" />
    );
    expect(screen.getByAltText('Rocket')).toBeInTheDocument();
  });
});
