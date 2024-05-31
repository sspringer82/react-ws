import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';
import { expect } from 'vitest';

describe('Input', () => {
  it('should render', () => {
    const { asFragment } = render(<Input />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should change the state', () => {
    render(<Input />);

    fireEvent.change(screen.getByTestId('input'), {
      target: { value: 'Hallo Welt' },
    });

    expect(screen.getByTestId('output')).toHaveTextContent('Hallo Welt');
  });
});
