import type { Metadata } from "next";
import Link from "next/link";
import { InternalPageLayout } from "@/components/InternalPageLayout";
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

const indexItems = [
  { id: "passo-a-passo", label: "Passo a passo" },
  { id: "fontes", label: "Fontes" },
];

export default function WrongPage() {
  return (
    <InternalPageLayout
      title={wrongPage.title}
      subtitle={wrongPage.intro}
      indexItems={indexItems}
    >
      <section id="passo-a-passo" aria-label="Passo a passo" className="scroll-mt-6" tabIndex={-1}>
        <Steps steps={wrongPage.steps} />
      </section>

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
    </InternalPageLayout>
  );
}
