import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    const clickHandler = vi.fn();
    render(
      <>
        <Button onClick={clickHandler} />
        <Button onClick={clickHandler} />
      </>
    );

    const button = screen.getAllByTestId('button');

    expect(button).toHaveLength(2);
  });

  it('should execute the handler', () => {
    const handler = vi.fn();
    render(<Button onClick={handler} />);

    fireEvent.click(screen.getByTestId('button'));

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
