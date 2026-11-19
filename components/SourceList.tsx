import type { Source } from "@/lib/types";

type SourceListProps = {
  sources: Source[];
  id?: string;
  title?: string;
};

export function SourceList({ sources, id = "fontes", title = "Fontes" }: SourceListProps) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="mt-10 scroll-mt-6" tabIndex={-1}>
      <h2 id={`${id}-titulo`} className="text-xl font-bold">
        {title}
      </h2>
      <p className="mt-2 text-ink-soft">Cada link abaixo abre outro site.</p>
      <ul className="mt-4 space-y-4">
        {sources.map((source) => (
          <li key={source.url} className="min-w-0">
            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <a
                className="link font-bold [overflow-wrap:anywhere]"
                href={source.url}
                title={source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.label}
              </a>
              <span className="text-[1rem] text-ink-soft">abre outro site</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
