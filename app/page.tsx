import type { Metadata } from "next";
import Link from "next/link";
import { FiqueDeOlho } from "@/components/FiqueDeOlho";
import { GoldenRules } from "@/components/GoldenRules";
import { HeroPath } from "@/components/HeroPath";
import { QrNote } from "@/components/QrNote";
import { StarterKit } from "@/components/StarterKit";
import { TopicList } from "@/components/TopicList";
import { homeText } from "@/content/rules";

export const metadata: Metadata = {
  title: "Pare. Respire. Confirme.",
  description: homeText.support,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <main id="conteudo">
      <section className="rounded-b-[2rem] border-b border-line bg-safe-soft">
        <div className="shell pt-10 pb-9 sm:pt-16 sm:pb-12 lg:pt-20">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:items-start lg:gap-14">
            <h1 className="reveal text-[2.9rem] leading-[1.02] font-bold tracking-tight sm:text-[4.4rem] lg:text-[5rem]">
              Pare.
              <br />
              Respire.
              <br />
              Confirme.
            </h1>
            <div>
              <p className="max-w-[46ch] text-xl">{homeText.support}</p>
              <p className="mt-6 max-w-[46ch] rounded-r-xl border border-line border-l-4 border-l-safe bg-panel px-4 py-4 text-ink-soft">
                {homeText.reassurance}
              </p>
              <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#temas" className="button w-full sm:w-auto">
                  Ver os temas
                </Link>
                <Link href="#kit" className="button button-quiet w-full sm:w-auto">
                  Começar pelo kit
                </Link>
              </div>
            </div>
          </div>
          <HeroPath />
        </div>
      </section>

      <div className="shell pb-6">
        <GoldenRules />
        <StarterKit printUrl={siteUrl ? `${siteUrl}/` : undefined} />
        <TopicList />
        <FiqueDeOlho />
        <QrNote />
      </div>
    </main>
  );
}

