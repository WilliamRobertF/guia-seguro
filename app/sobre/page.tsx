import type { Metadata } from "next";
import Link from "next/link";
import { InternalPageLayout } from "@/components/InternalPageLayout";
import { aboutPage } from "@/content/about";
import { studentsPage } from "@/content/students";
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

const topicSources = (slug: string) =>
  topics.find((topic) => topic.slug === slug)?.sources ?? [];

const uniqueSources = (sources: Source[]) =>
  Array.from(new Map(sources.map((source) => [source.url, source])).values());

const sourceGroups = [
  {
    title: "WhatsApp: código e conta clonada",
    sources: uniqueSources(topicSources("whatsapp-e-codigos")),
  },
  {
    title: "Dinheiro a receber? Confirme antes de pagar",
    sources: uniqueSources(topicSources("dinheiro-a-receber")),
  },
  {
    title: "Links, QR Codes e ligações",
    sources: uniqueSources(topicSources("links-qr-e-ligacoes")),
  },
  {
    title: "Senhas e verificação em duas etapas",
    sources: uniqueSources(topicSources("senhas-e-duas-etapas")),
  },
  { title: "Wi-Fi público e de casa", sources: uniqueSources(topicSources("wifi")) },
  {
    title: "Computador e celular",
    sources: uniqueSources(topicSources("computador-e-celular")),
  },
  {
    title: "Dados e fotos de outras pessoas",
    sources: uniqueSources(topicSources("dados-de-terceiros")),
  },
  { title: "Se algo deu errado", sources: uniqueSources(wrongPage.sources) },
  { title: "Conversar e ensinar", sources: uniqueSources(teachPage.sources) },
  { title: "Para jovens", sources: uniqueSources(studentsPage.sources) },
];

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
        <section id="fontes" aria-labelledby="fontes-titulo" className="mt-10 scroll-mt-6" tabIndex={-1}>
          <h2 id="fontes-titulo" className="text-xl font-bold">
            Fontes
          </h2>
          <div className="mt-6 space-y-10">
            {sourceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl font-bold">{group.title}</h3>
                <ul className="mt-4 space-y-4">
                  {group.sources.map((source) => (
                    <li key={source.url} className="min-w-0">
                      <a
                        className="link font-bold [overflow-wrap:anywhere]"
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </footer>
    </InternalPageLayout>
  );
}
