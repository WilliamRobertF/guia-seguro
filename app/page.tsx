import type { Metadata } from "next";
import Link from "next/link";
import { GoldenRules } from "@/components/GoldenRules";
import { HeroIllustration } from "@/components/HeroIllustration";
import { SmoothAnchor } from "@/components/SmoothAnchor";
import { StarterKit } from "@/components/StarterKit";
import { TopicList } from "@/components/TopicList";
import { homeText } from "@/content/rules";

export const metadata: Metadata = {
  title: "Pare. Respire. Confirme.",
  description: homeText.support,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <section className="shell pt-10 pb-4 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-14">
          <div>
            <h1 className="text-[2.9rem] leading-[1.02] font-bold tracking-tight sm:text-[4rem] lg:text-[4.5rem]">
              Pare.
              <br />
              Respire.
              <br />
              Confirme.
            </h1>
            <p className="mt-6 max-w-[46ch] text-xl text-ink-soft">{homeText.support}</p>
            <p className="mt-6 max-w-[46ch] rounded-2xl bg-surface-2 px-5 py-4 text-ink-soft">
              {homeText.reassurance}
            </p>
            <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
              <SmoothAnchor href="#temas" className="button w-full sm:w-auto">
                Ver os temas
              </SmoothAnchor>
              <SmoothAnchor href="#comecar" className="button button-quiet w-full sm:w-auto">
                Começar por aqui
              </SmoothAnchor>
            </div>
          </div>
          <div>
            <HeroIllustration />
          </div>
        </div>
      </section>

      <div className="shell pb-6">
        <GoldenRules />
        <StarterKit />
        <TopicList />
        <nav aria-label="Outros assuntos" className="home-links">
          <Link href="/se-algo-deu-errado/" className="home-link-button">
            Aconteceu alguma coisa? Veja o que fazer
          </Link>
          <Link href="/conversar-e-ensinar/" className="home-link-button">
            Quer ajudar alguém? Conversar e ensinar
          </Link>
          <Link href="/para-jovens/" className="home-link-button">
            Para jovens
          </Link>
        </nav>
      </div>
    </main>
  );
}

