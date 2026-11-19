import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-24 rounded-t-[2rem] bg-footer text-footer-ink">
      <div className="shell py-12 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M5 4h20a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-9l-6 5v-5H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
                  fill="var(--accent)"
                />
                <path
                  d="M9 12l4 4 8-8"
                  fill="none"
                  stroke="var(--on-accent)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-brand text-[1.75rem] font-bold">Guia Seguro</p>
            </div>
            <p className="mt-4 text-footer-soft">Projeto de extensão universitária</p>
            <p className="mt-1 text-footer-soft">
              Conteúdo informativo. O site não dá parecer jurídico.
            </p>
          </div>
          <div className="text-[1.0625rem]">
            <p className="text-footer-soft">
              Este site não usa cookies e não coleta dados. Se você escolher o tema claro ou
              escuro, a escolha fica guardada só no seu navegador.
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                className="font-bold text-footer-ink no-underline transition-colors duration-150 hover:text-accent active:text-on-brand"
                href="/sobre/"
              >
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


