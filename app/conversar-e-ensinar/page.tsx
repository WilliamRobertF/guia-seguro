import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "@/components/ShareButton";
import { SourceList } from "@/components/SourceList";
import { teachPage } from "@/content/teach";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Conversar e ensinar",
  description:
    "Como falar de segurança digital com crianças, adolescentes e idosos, e como espalhar bons hábitos.",
  alternates: { canonical: "/conversar-e-ensinar/" },
};

export default function TeachPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <main id="conteudo" className="shell pb-16">
      <div className="max-w-[49ch]">
        <header className="pt-10 sm:pt-14">
          <h1 className="text-3xl font-bold sm:text-[2.75rem]">{teachPage.title}</h1>
          <p className="mt-5 text-xl">{teachPage.intro}</p>
        </header>

        {teachPage.sections.map((section) => (
          <section key={section.title} className="mt-16 border-t border-line pt-10">
            <h2 className="text-2xl font-bold sm:text-[1.75rem]">{section.title}</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <p className="mt-10">
          <Link className="link font-bold" href="/#temas">
            Ver os temas
          </Link>
        </p>

        <footer className="mt-16 border-t border-line pt-8">
          <p className="text-[1.0625rem] text-ink-soft">
            Revisado em {formatDate(teachPage.reviewedAt)}.
          </p>
          <SourceList sources={teachPage.sources} />
          <div className="no-print mt-8">
            <ShareButton />
          </div>
          {siteUrl ? (
            <p className="print-only mt-6 break-all text-sm">
              {siteUrl}/conversar-e-ensinar/
            </p>
          ) : null}
        </footer>
      </div>
    </main>
  );
}
