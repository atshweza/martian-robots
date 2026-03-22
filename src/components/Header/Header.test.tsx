import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('should render the title', () => {
    render(<Header title="Martian Robots" />);
    expect(screen.getByText('Martian Robots')).toBeInTheDocument();
  });

  it('should render with custom title', () => {
    render(<Header title="Custom Title" />);
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('should have correct styling classes', () => {
    const { container } = render(<Header title="Test" />);
    const heading = container.querySelector('h1');
    expect(heading).toHaveClass('text-white', 'text-2xl', 'font-bold');
  });
});
