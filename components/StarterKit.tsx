import { kit } from "@/content/kit";
import { CheckIcon } from "./icons";
import { PrintButton } from "./PrintButton";

export function StarterKit({ printUrl }: { printUrl?: string }) {
  return (
    <section aria-labelledby="kit-titulo" id="kit" className="mt-20 scroll-mt-6 sm:mt-24">
      <div className="rounded-3xl bg-mist px-6 py-8 sm:px-8 sm:py-10 print:bg-transparent print:p-0">
        <span aria-hidden="true" className="no-print mb-3 block h-1 w-9 rounded-full bg-trust" />
        <h2 id="kit-titulo" className="text-2xl font-bold sm:text-3xl">
          {kit.title}
        </h2>
        <p className="mt-4 text-ink-soft">{kit.intro}</p>
        <ul className="mt-8 divide-y divide-line border-t border-line">
          {kit.items.map((item) => (
            <li key={item} className="flex gap-4 py-5">
              <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-safe-soft text-safe">
                <CheckIcon size={16} />
              </span>
              <span className="max-w-[49ch]">{item}</span>
            </li>
          ))}
        </ul>
        <div className="no-print mt-8">
          <PrintButton label="Imprimir o kit" />
        </div>
        {printUrl ? (
          <p className="print-only mt-4 break-all text-sm">{printUrl}</p>
        ) : null}
      </div>
    </section>
  );
}
