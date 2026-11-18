import { goldenRules } from "@/content/rules";

export function GoldenRules() {
  return (
    <section aria-labelledby="regras-de-ouro" className="mt-20 sm:mt-24">
      <span aria-hidden="true" className="no-print mb-3 block h-1 w-9 rounded-full bg-trust" />
      <h2 id="regras-de-ouro" className="text-2xl font-bold sm:text-3xl">
        Três regras de ouro
      </h2>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {goldenRules.map((rule) => (
          <li key={rule} className="py-7 sm:py-8">
            <p className="text-2xl leading-snug font-bold sm:text-[1.9rem]">
              {rule}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
