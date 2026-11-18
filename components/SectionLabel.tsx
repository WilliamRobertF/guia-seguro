export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-2 font-brand text-base font-normal uppercase tracking-[0.12em] text-trust">
      {children}
    </p>
  );
}
