import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-24 bg-footer text-footer-ink">
      <div className="shell py-12 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-12">
          <div>
            <p className="text-[1.75rem] font-bold">Guia Seguro</p>
            <p className="mt-4 text-footer-soft">Projeto de extensão universitária</p>
            <p className="mt-1 text-footer-soft">
              Conteúdo informativo. O site não dá parecer jurídico.
            </p>
          </div>
          <div className="text-[1.0625rem]">
            <p className="text-footer-soft">
              Este site não usa cookies e não coleta dados.
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link className="underline underline-offset-4 hover:no-underline" href="/sobre/">
                Sobre o projeto e fontes
              </Link>
              <span className="text-footer-soft">{year} Guia Seguro</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


