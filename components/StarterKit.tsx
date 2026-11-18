import { kit } from "@/content/kit";
import { PrintButton } from "./PrintButton";

export function StarterKit({ printUrl }: { printUrl?: string }) {
  return (
    <section aria-labelledby="kit-titulo" id="kit" className="mt-16 scroll-mt-6">
      <h2 id="kit-titulo" className="text-2xl font-bold sm:text-3xl">
        {kit.title}
      </h2>
      <p className="mt-3 text-ink-soft">{kit.intro}</p>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {kit.items.map((item) => (
          <li key={item} className="flex gap-4 py-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              className="mt-1 shrink-0"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="4"
                fill="var(--safe-soft)"
                stroke="var(--safe)"
                strokeWidth="2"
              />
            </svg>
            <span className="max-w-[62ch]">{item}</span>
          </li>
        ))}
      </ul>
      <div className="no-print mt-6">
        <PrintButton label="Imprimir o kit" />
      </div>
      {printUrl ? (
        <p className="print-only mt-4 break-all text-sm">{printUrl}</p>
      ) : null}
    </section>
  );
}
