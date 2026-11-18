import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-24 border-t border-line bg-panel">
      <div className="shell grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-12">
        <div>
          <p className="font-bold">Projeto de extensão universitária</p>
          <p className="mt-3 text-ink-soft">
            Conteúdo informativo. O site não dá parecer jurídico.
          </p>
        </div>
        <div className="text-[1.0625rem]">
          <p className="text-ink-soft">
            Este site não usa cookies e não coleta dados.
          </p>
          <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link className="link" href="/sobre/">
              Sobre o projeto e fontes
            </Link>
            <span className="text-ink-soft">{year} Guia Seguro</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

