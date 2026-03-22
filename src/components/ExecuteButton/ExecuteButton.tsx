interface ExecuteButtonProps {
  onClick: () => void;
  label?: string;
}

export function ExecuteButton({ onClick, label = 'Send Instructions to Mars' }: ExecuteButtonProps) {
  return (
    <button onClick={onClick} className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition">
      {label}
    </button>
  );
}
