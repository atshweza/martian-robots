interface RoverImageProps {
  src: string;
  alt?: string;
}

export function RoverImage({ src, alt = 'rover' }: RoverImageProps) {
  return <img src={src} className="w-48 h-48" alt={alt} />;
}
