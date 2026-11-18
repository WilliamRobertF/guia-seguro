import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "@/components/ShareButton";
import { SourceList } from "@/components/SourceList";
import { Steps } from "@/components/Steps";
import { wrongPage } from "@/content/wrong";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Se algo deu errado",
  description:
    "Um passo a passo calmo para quando um golpe ou um acesso indevido acontece com você.",
  alternates: { canonical: "/se-algo-deu-errado/" },
};

export default function WrongPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <main id="conteudo" className="mx-auto w-full max-w-3xl px-5 pb-16 sm:px-8">
      <header className="pt-10 sm:pt-14">
        <h1 className="max-w-[22ch] text-3xl font-bold sm:text-4xl">{wrongPage.title}</h1>
        <p className="mt-5 max-w-[62ch] text-xl">{wrongPage.intro}</p>
      </header>

      <Steps steps={wrongPage.steps} />

      <p className="mt-10 max-w-[62ch] border-l-4 border-safe pl-4 font-bold">
        {wrongPage.closing}
      </p>

      <p className="mt-8">
        <Link className="link font-bold" href="/#temas">
          Voltar para os temas
        </Link>
      </p>

      <footer className="mt-14 border-t border-line pt-6">
        <p className="text-[1.0625rem] text-ink-soft">
          Revisado em {formatDate(wrongPage.reviewedAt)}.
        </p>
        <SourceList sources={wrongPage.sources} />
        <div className="no-print mt-8">
          <ShareButton />
        </div>
        {siteUrl ? (
          <p className="print-only mt-4 break-all text-sm">{siteUrl}/se-algo-deu-errado/</p>
        ) : null}
      </footer>
    </main>
  );
}
