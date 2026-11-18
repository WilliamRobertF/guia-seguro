export function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-10 space-y-6">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4">
          <span
            aria-hidden="true"
            className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-trust-soft font-bold text-trust"
          >
            {index + 1}
          </span>
          <span className="pt-1">{step}</span>
        </li>
      ))}
    </ol>
  );
}
