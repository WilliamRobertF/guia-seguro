import Link from "next/link";
import type { Topic } from "@/lib/types";
import { formatDate } from "@/lib/date";
import { InternalPageLayout } from "./InternalPageLayout";
import { LinkStatus } from "./LinkStatus";
import { SourceList } from "./SourceList";
import { TopicIcon } from "./TopicIcon";

function CheckIcon({ className = "mt-1" }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
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
  nextTopic: Topic;
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
    <InternalPageLayout
      title={topic.title}
      subtitle={topic.summary}
      indexItems={contents}
      breadcrumb={
        <nav aria-label="Você está aqui" className="no-print text-[1.0625rem]">
          <Link href="/#temas" className="nav-link">
            Temas
          </Link>
          <span className="mx-2 text-ink-soft" aria-hidden="true">
            /
          </span>
          <span className="text-ink-soft">{topic.title}</span>
        </nav>
      }
    >
      <div className="flex gap-4 rounded-2xl bg-surface-2 px-5 py-5">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface text-safe">
          <CheckIcon className="" />
        </span>
        <p>
          <span className="font-brand font-bold text-safe">Boa notícia: </span>
          {topic.goodNews}
        </p>
      </div>

      {topic.notice ? (
        <aside className="mt-7 rounded-2xl border border-attention-line bg-attention px-5 py-4 text-attention-ink">
          <p>{topic.notice}</p>
        </aside>
      ) : null}

      <section
        id="como-funciona"
        aria-labelledby="como-funciona-titulo"
        className="mt-16 scroll-mt-6 border-t border-line pt-10"
        tabIndex={-1}
      >
        <h2
          id="como-funciona-titulo"
          className="text-2xl font-bold sm:text-[1.75rem]"
        >
          Como funciona
        </h2>
        <p className="mt-4">{topic.howItWorks}</p>
      </section>

      <section
        id="o-que-voce-pode-ver"
        aria-labelledby="o-que-voce-pode-ver-titulo"
        className="mt-16 scroll-mt-6 border-t border-line pt-10"
        tabIndex={-1}
      >
        <h2
          id="o-que-voce-pode-ver-titulo"
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

      <section
        id="o-que-fazer"
        aria-labelledby="o-que-fazer-titulo"
        className="mt-16 scroll-mt-6 border-t border-line pt-10"
        tabIndex={-1}
      >
        <h2
          id="o-que-fazer-titulo"
          className="text-2xl font-bold sm:text-[1.75rem]"
        >
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
        <section
          id="deu-errado"
          aria-labelledby="deu-errado-titulo"
          className="mt-16 scroll-mt-6"
          tabIndex={-1}
        >
          <div className="soft-panel rounded-2xl bg-surface px-5 py-6">
            <h2
              id="deu-errado-titulo"
              className="text-2xl font-bold sm:text-[1.75rem]"
            >
              Se algo deu errado
            </h2>
            <ul className="mt-5 space-y-3">
              {topic.ifSomethingWentWrong.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5">
              <Link className="nav-link font-bold" href="/se-algo-deu-errado/">
                Ver o passo a passo completo
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      <footer className="mt-20 border-t border-line pt-8">
        <p className="text-[1.0625rem] text-ink-soft">
          Atualizado em {formatDate(topic.reviewedAt)}.
        </p>
        <SourceList sources={topic.sources} />

        <nav aria-label="Navegação entre temas" className="mt-12 border-t border-line pt-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <Link className="button button-quiet w-full" href="/#temas">
              Voltar para os temas
              <LinkStatus />
            </Link>
            <Link
              className="button button-quiet w-full"
              href={`/temas/${nextTopic.slug}/`}
            >
              <TopicIcon slug={nextTopic.slug} size="xs" />
              <span>Próximo tema: {nextTopic.title}</span>
              <LinkStatus />
            </Link>
          </div>
        </nav>
      </footer>
    </InternalPageLayout>
  );
}
