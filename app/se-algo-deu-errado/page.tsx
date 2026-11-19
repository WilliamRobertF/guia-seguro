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
  return (
    <main id="conteudo" className="shell pb-16">
      <div className="max-w-[49ch]">
        <header className="pt-10 sm:pt-14">
          <h1 className="text-3xl font-bold sm:text-[2.75rem]">{wrongPage.title}</h1>
          <p className="mt-5 text-xl">{wrongPage.intro}</p>
        </header>

        <Steps steps={wrongPage.steps} />

        <p className="mt-12 rounded-2xl bg-surface-2 px-5 py-4 font-bold">
          {wrongPage.closing}
        </p>

        <p className="mt-10">
          <Link className="nav-link font-bold" href="/#temas">
            Voltar para os temas
          </Link>
        </p>

        <footer className="mt-16 border-t border-line pt-8">
          <p className="text-[1.0625rem] text-ink-soft">
            Revisado em {formatDate(wrongPage.reviewedAt)}.
          </p>
          <SourceList sources={wrongPage.sources} />
          <div className="no-print mt-8">
            <ShareButton />
          </div>
        </footer>
      </div>
    </main>
  );
}
