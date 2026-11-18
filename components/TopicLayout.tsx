import Link from "next/link";
import type { Topic } from "@/lib/types";
import { formatDate } from "@/lib/date";
import { ShareButton } from "./ShareButton";
import { SourceList } from "./SourceList";

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="mt-1 shrink-0"
    >
      <path
        d="M4 12.5l5 5L20 6.5"
        fill="none"
        stroke="var(--safe)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type TopicLayoutProps = {
  topic: Topic;
  nextTopic?: Topic;
};

export function TopicLayout({ topic, nextTopic }: TopicLayoutProps) {
  const contents = [
    { id: "como-funciona", label: "Como funciona" },
    { id: "o-que-voce-pode-ver", label: "O que você pode ver por aí" },
    { id: "o-que-fazer", label: "O que fazer" },
    ...(topic.ifSomethingWentWrong
      ? [{ id: "deu-errado", label: "Se algo deu errado" }]
      : []),
    { id: "fontes", label: "Fontes" },
  ];

  return (
    <main id="conteudo" className="shell pb-16">
      <div className="max-w-[49ch]">
        <nav aria-label="Você está aqui" className="no-print mt-8 text-[1.0625rem]">
          <Link href="/#temas" className="link">
            Temas
          </Link>
          <span className="mx-2 text-ink-soft" aria-hidden="true">
            /
          </span>
          <span className="text-ink-soft">{topic.title}</span>
        </nav>

        <header className="mt-4">
          <h1 className="text-3xl font-bold sm:text-[2.75rem]">{topic.title}</h1>
          <p className="mt-5 text-xl text-ink-soft">{topic.summary}</p>
          <p className="mt-7 rounded-r-2xl border-l-4 border-safe bg-safe-soft px-5 py-5">
            <span className="font-brand font-bold text-safe">Boa notícia: </span>
            {topic.goodNews}
          </p>
        </header>

        {topic.notice ? (
          <aside className="mt-7 rounded-2xl border border-attention-line bg-attention px-5 py-4 text-ink">
            <p>{topic.notice}</p>
          </aside>
        ) : null}

        <nav
          aria-labelledby="nesta-pagina"
          className="no-print mt-10 border-t border-line pt-6"
        >
          <h2 id="nesta-pagina" className="text-[1.0625rem] font-bold">
            Nesta página
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {contents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="link text-[1.0625rem]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section
          aria-labelledby="como-funciona"
          className="mt-16 border-t border-line pt-10"
        >
          <h2 id="como-funciona" className="text-2xl font-bold sm:text-[1.75rem]">
            Como funciona
          </h2>
          <p className="mt-4">{topic.howItWorks}</p>
        </section>

        <section
          aria-labelledby="o-que-voce-pode-ver"
          className="mt-16 border-t border-line pt-10"
        >
          <h2
            id="o-que-voce-pode-ver"
            className="text-2xl font-bold sm:text-[1.75rem]"
          >
            O que você pode ver por aí
          </h2>
          <ul className="mt-5 list-disc space-y-3 pl-6">
            {topic.whatYouMightSee.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="o-que-fazer" className="mt-16 border-t border-line pt-10">
          <h2 id="o-que-fazer" className="text-2xl font-bold sm:text-[1.75rem]">
            O que fazer
          </h2>
          {topic.whatToDo.map((group) => (
            <div key={group.heading ?? group.items[0]} className="mt-6">
              {group.heading ? (
                <h3 className="mb-3 text-xl font-bold">{group.heading}</h3>
              ) : null}
              <ul className="divide-y divide-line border-y border-line">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 py-4">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {topic.ifSomethingWentWrong ? (
          <section aria-labelledby="deu-errado" className="mt-16 border-t border-line pt-10">
            <h2 id="deu-errado" className="text-2xl font-bold sm:text-[1.75rem]">
              Se algo deu errado
            </h2>
            <ul className="mt-5 space-y-3">
              {topic.ifSomethingWentWrong.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5">
              <Link className="link font-bold" href="/se-algo-deu-errado/">
                Ver o passo a passo completo
              </Link>
            </p>
          </section>
        ) : null}

        <footer className="mt-20 border-t border-line pt-8">
          <p className="text-[1.0625rem] text-ink-soft">
            Revisado em {formatDate(topic.reviewedAt)}.
          </p>
          <SourceList sources={topic.sources} />
          <div className="no-print mt-8">
            <ShareButton />
          </div>

          <nav
            aria-label={nextTopic ? "Próximo tema" : "Próximo passo"}
            className="mt-12 border-t border-line pt-6"
          >
            <p className="text-[1.0625rem] text-ink-soft">
              {nextTopic ? "Próximo tema" : "Depois dos temas"}
            </p>
            <Link
              href={nextTopic ? `/temas/${nextTopic.slug}/` : "/conversar-e-ensinar/"}
              className="link mt-1 inline-block text-xl font-bold"
            >
              {nextTopic ? nextTopic.title : "Conversar e ensinar"}
            </Link>
          </nav>
        </footer>
      </div>
    </main>
  );
}
