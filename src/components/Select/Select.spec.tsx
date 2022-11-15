import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, vi } from 'vitest';
import Select from './Select';

describe('Select', () => {
  it('should render', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(
      <Select onChange={onChange} value={1}>
        <option value={1}>1</option>
        <option value={2}>2</option>
      </Select>
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: '2' })).toBeInTheDocument();

    await user.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: '2' })
    );

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('2');
  });
});
