import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/SourceList";
import { aboutPage } from "@/content/about";
import { teachPage } from "@/content/teach";
import { topics } from "@/content/topics";
import { wrongPage } from "@/content/wrong";
import { formatDate } from "@/lib/date";
import type { Source } from "@/lib/types";

export const metadata: Metadata = {
  title: "Sobre o projeto",
  description:
    "Projeto de extensão universitária ligado à ODS 9 e ao programa Inovação, Ciência e Transformação Digital.",
  alternates: { canonical: "/sobre/" },
};

const allSources: Source[] = [
  ...topics.flatMap((topic) => topic.sources),
  ...wrongPage.sources,
  ...teachPage.sources,
  { label: "cartilha.cert.br", url: "https://cartilha.cert.br/" },
];

const uniqueSources = Array.from(
  new Map(allSources.map((source) => [source.url, source])).values(),
);

export default function AboutPage() {
  return (
    <main id="conteudo" className="shell pb-16">
      <div className="max-w-[49ch]">
        <header className="pt-10 sm:pt-14">
          <h1 className="text-3xl font-bold sm:text-[2.75rem]">{aboutPage.title}</h1>
        </header>

        {aboutPage.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-6 text-xl">
            {paragraph}
          </p>
        ))}

        <section className="mt-16 border-t border-line pt-10">
          <h2 className="text-2xl font-bold sm:text-[1.75rem]">Privacidade</h2>
          <p className="mt-4">{aboutPage.privacy}</p>
        </section>

        <section className="mt-16 border-t border-line pt-10">
          <h2 className="text-2xl font-bold sm:text-[1.75rem]">Créditos</h2>
          <p className="mt-4">{aboutPage.credits}</p>
          <p className="mt-4">{aboutPage.author}</p>
        </section>

        <p className="mt-10">
          <Link className="link font-bold" href="/#temas">
            Ver os temas
          </Link>
        </p>

        <footer className="mt-16 border-t border-line pt-8">
          <p className="text-[1.0625rem] text-ink-soft">
            Última atualização do conteúdo: {formatDate(aboutPage.reviewedAt)}.
          </p>
          <SourceList sources={uniqueSources} id="fontes-gerais" />
        </footer>
      </div>
    </main>
  );
}
