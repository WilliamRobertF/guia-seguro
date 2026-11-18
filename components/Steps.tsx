export function Steps({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-8 space-y-5">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4">
          <span
            aria-hidden="true"
            className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-trust-soft font-bold text-trust"
          >
            {index + 1}
          </span>
          <span className="max-w-[60ch] pt-1">{step}</span>
        </li>
      ))}
    </ol>
  );
}
