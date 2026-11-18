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
    <main id="conteudo" className="mx-auto w-full max-w-3xl px-5 pb-4 sm:px-8">
      <section className="pt-10 sm:pt-16">
        <h1 className="reveal max-w-[12ch] text-[2.7rem] leading-[1.03] font-bold tracking-tight sm:text-[4.2rem]">
          Pare.
          <br />
          Respire.
          <br />
          Confirme.
        </h1>
        <p className="mt-7 max-w-[52ch] text-xl">{homeText.support}</p>
        <p className="mt-6 max-w-[52ch] border-l-4 border-safe pl-4 text-ink-soft">
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
      </section>

      <GoldenRules />
      <StarterKit printUrl={siteUrl ? `${siteUrl}/` : undefined} />
      <TopicList />
      <FiqueDeOlho />
      <QrNote />
    </main>
  );
}
