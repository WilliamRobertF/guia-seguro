import { fiqueDeOlho } from "@/content/fique-de-olho";

export function FiqueDeOlho() {
  return (
    <aside
      aria-labelledby="fique-de-olho"
      className="mt-20 rounded-lg border border-attention-line bg-attention px-6 py-7 text-ink sm:mt-24 sm:px-8 sm:py-9"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
        <div>
          <h2 id="fique-de-olho" className="flex items-center gap-3 text-2xl font-bold">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
              focusable="false"
              className="shrink-0 text-ink-soft"
            >
              <path
                d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Fique de olho
          </h2>
          <p className="mt-4 text-[1.0625rem] text-ink-soft">
            Atualizado em {fiqueDeOlho.updatedAt}
          </p>
        </div>
        <div>
          <p className="text-xl font-bold">{fiqueDeOlho.title}</p>
          <p className="mt-3">{fiqueDeOlho.text}</p>
        </div>
      </div>
    </aside>
  );
}
