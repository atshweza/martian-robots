interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1 className="text-white text-2xl font-bold mb-4 text-center">{title}</h1>
    </header>
  );
}
