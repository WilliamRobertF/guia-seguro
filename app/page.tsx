import type { Metadata } from "next";
import Link from "next/link";
import { FiqueDeOlho } from "@/components/FiqueDeOlho";
import { GoldenRules } from "@/components/GoldenRules";
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
    <main id="conteudo" className="shell pb-6">
      <section className="pt-10 sm:pt-16 lg:pt-20">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:items-end lg:gap-14">
          <h1 className="reveal text-[2.9rem] leading-[1.02] font-bold tracking-tight sm:text-[4.4rem] lg:text-[5rem]">
            Pare.
            <br />
            Respire.
            <br />
            Confirme.
          </h1>
          <div>
            <p className="max-w-[46ch] text-xl">{homeText.support}</p>
            <p className="mt-6 max-w-[46ch] border-l-4 border-safe pl-4 text-ink-soft">
              {homeText.reassurance}
            </p>
            <div className="no-print mt-8 flex flex-wrap gap-3">
              <Link href="#temas" className="button">
                Ver os temas
              </Link>
              <Link href="#kit" className="button button-quiet">
                Começar pelo kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GoldenRules />
      <StarterKit printUrl={siteUrl ? `${siteUrl}/` : undefined} />
      <TopicList />
      <FiqueDeOlho />
      <QrNote />
    </main>
  );
}

