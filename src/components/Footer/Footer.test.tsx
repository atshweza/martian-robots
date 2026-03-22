import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render footer with text', () => {
    const footerText = '© 2026 Martian Robots. All rights reserved.';
    render(<Footer text={footerText} />);
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });

  it('should render footer element', () => {
    const { container } = render(<Footer text="Test" />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('should have white text styling', () => {
    const { container } = render(<Footer text="Test" />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('text-white');
  });
});
