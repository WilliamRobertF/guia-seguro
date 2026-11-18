import { kit } from "@/content/kit";
import { sectionLabels } from "@/content/sections";
import { CheckIcon } from "./icons";
import { SectionLabel } from "./SectionLabel";

export function StarterKit() {
  return (
    <section aria-labelledby="kit-titulo" id="kit" className="mt-20 scroll-mt-6 sm:mt-24">
      <div className="rounded-3xl bg-mist px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14">
          <div>
            <SectionLabel>{sectionLabels.kit}</SectionLabel>
            <h2 id="kit-titulo" className="text-2xl font-bold sm:text-3xl">
              {kit.title}
            </h2>
            <p className="mt-4 text-ink-soft">{kit.intro}</p>
          </div>
          <ul className="grid gap-x-10 min-[1200px]:grid-cols-2">
            {kit.items.map((item) => (
              <li key={item} className="flex gap-4 border-t border-line py-5">
                <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-safe-soft text-safe">
                  <CheckIcon size={16} />
                </span>
                <span className="max-w-[49ch]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
