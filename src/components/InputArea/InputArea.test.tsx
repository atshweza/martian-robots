import { describe, expect, it, vi } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { InputArea } from './InputArea';

describe('InputArea', () => {
  it('should render textarea element', () => {
    render(<InputArea value="" onChange={() => {}} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
  });

  it('should display the provided value', () => {
    const testValue = 'Test input';
    render(<InputArea value={testValue} onChange={() => {}} />);
    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    expect(textarea.value).toBe(testValue);
  });

  it('should call onChange when value changes', () => {
    const handleChange = vi.fn();
    render(<InputArea value="" onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledWith('new value');
  });

  it('should use custom placeholder', () => {
    const customPlaceholder = 'Custom placeholder text';
    render(<InputArea value="" onChange={() => {}} placeholder={customPlaceholder} />);
    const textarea = screen.getByPlaceholderText(customPlaceholder);
    expect(textarea).toBeInTheDocument();
  });

  it('should use default placeholder when not provided', () => {
    render(<InputArea value="" onChange={() => {}} />);
    const textarea = screen.getByPlaceholderText('Enter grid dimensions and robot instructions');
    expect(textarea).toBeInTheDocument();
  });
});
