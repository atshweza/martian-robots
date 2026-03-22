import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ExecuteButton } from './ExecuteButton';

describe('ExecuteButton', () => {
  it('should render button element', () => {
    render(<ExecuteButton onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should display default label', () => {
    render(<ExecuteButton onClick={() => {}} />);
    expect(screen.getByText('Send Instructions to Mars')).toBeInTheDocument();
  });

  it('should display custom label', () => {
    const customLabel = 'Custom Label';
    render(<ExecuteButton onClick={() => {}} label={customLabel} />);
    expect(screen.getByText(customLabel)).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<ExecuteButton onClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should have correct styling classes', () => {
    const { container } = render(<ExecuteButton onClick={() => {}} />);
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-orange-500', 'hover:bg-orange-600', 'text-white');
  });
});
