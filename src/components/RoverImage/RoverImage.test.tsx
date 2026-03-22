import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';

import { RoverImage } from './RoverImage';

describe('RoverImage', () => {
  it('should render img element', () => {
    render(<RoverImage src="/path/to/rover.png" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('should set the src attribute', () => {
    const testSrc = '/path/to/rover.png';
    render(<RoverImage src={testSrc} />);
    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toContain(testSrc);
  });

  it('should use default alt text', () => {
    render(<RoverImage src="/path/to/rover.png" />);
    const img = screen.getByAltText('rover');
    expect(img).toBeInTheDocument();
  });

  it('should use custom alt text', () => {
    const customAlt = 'Mars Rover Image';
    render(<RoverImage src="/path/to/rover.png" alt={customAlt} />);
    const img = screen.getByAltText(customAlt);
    expect(img).toBeInTheDocument();
  });

  it('should have correct sizing classes', () => {
    const { container } = render(<RoverImage src="/path/to/rover.png" />);
    const img = container.querySelector('img');
    expect(img).toHaveClass('w-48', 'h-48');
  });
});
