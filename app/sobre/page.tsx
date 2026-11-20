import type { Metadata } from "next";
import Link from "next/link";
import { InternalPageLayout } from "@/components/InternalPageLayout";
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

const indexItems = [
  { id: "privacidade", label: "Privacidade" },
  { id: "creditos", label: "Créditos" },
  { id: "fontes", label: "Fontes" },
];

export default function AboutPage() {
  return (
    <InternalPageLayout title={aboutPage.title} indexItems={indexItems}>
      {aboutPage.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-6 text-xl first:mt-0">
          {paragraph}
        </p>
      ))}

      <section
        id="privacidade"
        aria-labelledby="privacidade-titulo"
        className="mt-16 scroll-mt-6 border-t border-line pt-10"
        tabIndex={-1}
      >
        <h2 id="privacidade-titulo" className="text-2xl font-bold sm:text-[1.75rem]">
          Privacidade
        </h2>
        <p className="mt-4">{aboutPage.privacy}</p>
      </section>

      <section
        id="creditos"
        aria-labelledby="creditos-titulo"
        className="mt-16 scroll-mt-6 border-t border-line pt-10"
        tabIndex={-1}
      >
        <h2 id="creditos-titulo" className="text-2xl font-bold sm:text-[1.75rem]">
          Créditos
        </h2>
        <p className="mt-4">{aboutPage.credits}</p>
      </section>

      <p className="mt-10">
        <Link className="nav-link font-bold" href="/#temas">
          Ver os temas
        </Link>
      </p>

      <footer className="mt-16 border-t border-line pt-8">
        <p className="text-[1.0625rem] text-ink-soft">
          Última atualização do conteúdo: {formatDate(aboutPage.reviewedAt)}.
        </p>
        <SourceList sources={uniqueSources} id="fontes" />
      </footer>
    </InternalPageLayout>
  );
}
