interface FooterProps {
  text: string;
}

export function Footer({ text }: FooterProps) {
  return (
    <footer className="text-white">
      <p>{text}</p>
    </footer>
  );
}
