import type { Source } from "@/lib/types";

type SourceListProps = {
  sources: Source[];
  id?: string;
  title?: string;
};

export function SourceList({ sources, id = "fontes", title = "Fontes" }: SourceListProps) {
  return (
    <section aria-labelledby={id} className="mt-8">
      <h2 id={id} className="text-xl font-bold">
        {title}
      </h2>
      <p className="mt-2 text-ink-soft">Cada link abaixo abre outro site.</p>
      <ul className="mt-3 space-y-4">
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
            <span className="ml-2 text-ink-soft">abre outro site</span>
            <span className="mt-1 block break-all text-ink-soft">{source.url}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
