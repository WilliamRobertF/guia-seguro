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

export function TopicLayout({ topic, printUrl }: { topic: Topic; printUrl?: string }) {
  return (
    <main id="conteudo" className="mx-auto w-full max-w-3xl px-5 pb-16 sm:px-8">
      <nav aria-label="Você está aqui" className="no-print mt-6 text-[1.0625rem]">
        <Link href="/#temas" className="link">
          Temas
        </Link>
        <span className="mx-2 text-ink-soft" aria-hidden="true">
          /
        </span>
        <span className="text-ink-soft">{topic.title}</span>
      </nav>

      <header className="mt-5">
        <h1 className="max-w-[24ch] text-3xl font-bold sm:text-4xl">{topic.title}</h1>
        <p className="mt-4 max-w-[58ch] text-xl text-ink-soft">{topic.summary}</p>
        <p className="mt-6 max-w-[62ch] rounded-r-md border-l-4 border-safe bg-safe-soft px-4 py-4">
          <span className="font-bold text-safe">Boa notícia: </span>
          {topic.goodNews}
        </p>
      </header>

      {topic.notice ? (
        <aside className="mt-6 max-w-[62ch] rounded-md bg-attention px-4 py-4 text-ink">
          <p className="text-[1rem]">{topic.notice}</p>
        </aside>
      ) : null}

      <section aria-labelledby="como-funciona" className="mt-12">
        <h2 id="como-funciona" className="text-2xl font-bold">
          Como funciona
        </h2>
        <p className="mt-3 max-w-[62ch]">{topic.howItWorks}</p>
      </section>

      <section aria-labelledby="o-que-voce-pode-ver" className="mt-12">
        <h2 id="o-que-voce-pode-ver" className="text-2xl font-bold">
          O que você pode ver por aí
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          {topic.whatYouMightSee.map((item) => (
            <li key={item} className="max-w-[60ch]">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="o-que-fazer" className="mt-12">
        <h2 id="o-que-fazer" className="text-2xl font-bold">
          O que fazer
        </h2>
        {topic.whatToDo.map((group) => (
          <div key={group.heading ?? group.items[0]} className="mt-5">
            {group.heading ? <h3 className="text-xl font-bold">{group.heading}</h3> : null}
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 py-3">
                  <CheckIcon />
                  <span className="max-w-[60ch]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {topic.ifSomethingWentWrong ? (
        <section aria-labelledby="deu-errado" className="mt-12">
          <h2 id="deu-errado" className="text-2xl font-bold">
            Se algo deu errado
          </h2>
          <ul className="mt-4 space-y-3">
            {topic.ifSomethingWentWrong.map((item) => (
              <li key={item} className="max-w-[60ch]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link className="link font-bold" href="/se-algo-deu-errado/">
              Ver o passo a passo completo
            </Link>
          </p>
        </section>
      ) : null}

      <footer className="mt-14 border-t border-line pt-6">
        <p className="text-[1.0625rem] text-ink-soft">
          Revisado em {formatDate(topic.reviewedAt)}.
        </p>
        <SourceList sources={topic.sources} />
        <div className="no-print mt-8">
          <ShareButton />
        </div>
        {printUrl ? <p className="print-only break-all text-sm">{printUrl}</p> : null}
      </footer>
    </main>
  );
}
