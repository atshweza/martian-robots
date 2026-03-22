interface OutputDisplayProps {
  output: string;
}

export function OutputDisplay({ output }: OutputDisplayProps) {
  return (
    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
      <h2 className="font-semibold mb-2">Output:</h2>
      <pre className="whitespace-pre-wrap text-sm">{output}</pre>
    </div>
  );
}
