import { fiqueDeOlho } from "@/content/fique-de-olho";
import { sectionLabels } from "@/content/sections";
import { EyeIcon } from "./icons";
import { SectionLabel } from "./SectionLabel";

export function FiqueDeOlho() {
  return (
    <aside
      aria-labelledby="fique-de-olho"
      className="mt-20 rounded-3xl border border-attention-line bg-attention px-6 py-7 text-attention-ink shadow-soft sm:mt-24 sm:px-8 sm:py-9"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
        <div>
          <SectionLabel>{sectionLabels.watch}</SectionLabel>
          <h2
            id="fique-de-olho"
            className="flex items-center gap-3 text-2xl font-bold text-attention-ink"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface text-link">
              <EyeIcon size={22} />
            </span>
            Fique de olho
          </h2>
          <p className="mt-4 text-[1.0625rem] text-ink-soft">
            Atualizado em {fiqueDeOlho.updatedAt}
          </p>
        </div>
        <div>
          <p className="font-brand text-xl font-bold text-attention-ink">{fiqueDeOlho.title}</p>
          <p className="mt-3">{fiqueDeOlho.text}</p>
        </div>
      </div>
    </aside>
  );
}
