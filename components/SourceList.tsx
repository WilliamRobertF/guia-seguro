import type { Source } from "@/lib/types";

type SourceListProps = {
  sources: Source[];
  id?: string;
  title?: string;
};

export function SourceList({ sources, id = "fontes", title = "Fontes" }: SourceListProps) {
  return (
    <section aria-labelledby={id} className="mt-10">
      <h2 id={id} className="text-xl font-bold">
        {title}
      </h2>
      <p className="mt-2 text-ink-soft">Cada link abaixo abre outro site.</p>
      <ul className="mt-4 space-y-5">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              className="link font-bold"
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.label}
            </a>
            <span className="mt-1 block text-[1rem] text-ink-soft">abre outro site</span>
            <span className="block break-all text-[1rem] text-ink-soft">{source.url}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
