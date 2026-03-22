import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { OutputDisplay } from './OutputDisplay';

describe('OutputDisplay', () => {
  it('should render output section', () => {
    render(<OutputDisplay output="" />);
    expect(screen.getByText('Output:')).toBeInTheDocument();
  });

  it('should display the output text', () => {
    const testOutput = '1 1 E\n3 3 N LOST';
    render(<OutputDisplay output={testOutput} />);
    expect(screen.getByText(/1 1 E/)).toBeInTheDocument();
    expect(screen.getByText(/3 3 N LOST/)).toBeInTheDocument();
  });

  it('should render pre element for output', () => {
    const { container } = render(<OutputDisplay output="test" />);
    const preElement = container.querySelector('pre');
    expect(preElement).toBeInTheDocument();
  });

  it('should preserve whitespace in output', () => {
    const multilineOutput = 'Line 1\nLine 2\nLine 3';
    const { container } = render(<OutputDisplay output={multilineOutput} />);
    const preElement = container.querySelector('pre');
    expect(preElement).toHaveClass('whitespace-pre-wrap');
  });
});
