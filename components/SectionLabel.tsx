export function SectionLabel({
  children,
  onBrand = false,
}: {
  children: string;
  onBrand?: boolean;
}) {
  return (
    <p
      className={`mb-2 font-brand text-base font-normal uppercase tracking-[0.12em] ${
        onBrand ? "text-accent" : "text-link"
      }`}
    >
      {children}
    </p>
  );
}
