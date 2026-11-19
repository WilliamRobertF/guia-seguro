export function SectionLabel({
  children,
  onBrand = false,
}: {
  children: string;
  onBrand?: boolean;
}) {
  return (
    <p
      className={`mb-2 font-sans text-base font-normal tracking-normal ${
        onBrand ? "text-on-brand-soft" : "text-muted"
      }`}
    >
      {children}
    </p>
  );
}
