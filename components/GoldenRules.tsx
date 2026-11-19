import { goldenRules } from "@/content/rules";

export function GoldenRules() {
  return (
    <section aria-labelledby="regras-de-ouro" className="mt-20 sm:mt-24">
      <h2 id="regras-de-ouro" className="text-2xl font-bold sm:text-3xl">
        Três regras de ouro
      </h2>
      <ul className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {goldenRules.map((rule) => (
          <li key={rule} className="border-t border-line pt-6">
            <p className="text-2xl leading-snug font-bold sm:text-[1.6rem]">
              {rule}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
