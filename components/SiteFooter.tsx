import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-20 border-t border-line bg-panel">
      <div className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8">
        <p className="font-bold">Projeto de extensão universitária</p>
        <p className="mt-2 text-ink-soft">
          Conteúdo informativo. O site não dá parecer jurídico.
        </p>
        <p className="mt-2 text-ink-soft">
          Este site não usa cookies e não coleta dados.
        </p>
        <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[1rem]">
          <Link className="link" href="/sobre/">
            Sobre o projeto e fontes
          </Link>
          <span className="text-ink-soft">{year} Guia Seguro</span>
        </p>
      </div>
    </footer>
  );
}
