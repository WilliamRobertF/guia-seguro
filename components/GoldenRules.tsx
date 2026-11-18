import { goldenRules } from "@/content/rules";

export function GoldenRules() {
  return (
    <section aria-labelledby="regras-de-ouro" className="mt-16">
      <h2 id="regras-de-ouro" className="text-2xl font-bold sm:text-3xl">
        Três regras de ouro
      </h2>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {goldenRules.map((rule) => (
          <li key={rule} className="py-6">
            <p className="max-w-[62ch] text-2xl leading-snug font-bold sm:text-[1.75rem]">
              {rule}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
