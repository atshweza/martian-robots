interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function InputArea({ value, onChange, placeholder = 'Enter grid dimensions and robot instructions' }: InputAreaProps) {
  return <textarea className="w-full h-48 p-3 border rounded-lg font-mono text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />;
}
