import Link from "next/link";
import { footerContent } from "@/content/footer";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-24 rounded-t-[2rem] bg-footer text-footer-ink">
      <div className="shell py-12 sm:py-14">
        <div className="grid gap-10 min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-12">
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

            <div className="mt-5 text-[1.0625rem]">
              <p className="text-footer-soft">
                Este site não usa cookies e não coleta dados. Se você escolher o tema claro
                ou escuro, a escolha fica guardada só no seu navegador.
              </p>
              <p className="mt-5">
                <Link
                  className="font-bold text-footer-ink no-underline transition-colors duration-150 hover:text-accent active:text-on-brand"
                  href="/sobre/"
                >
                  Sobre o projeto e fontes
                </Link>
              </p>
            </div>
          </div>

          <div className="min-[900px]:flex min-[900px]:justify-end">
            <section
              aria-labelledby="footer-ods"
              className="w-full rounded-2xl border border-on-brand/20 p-5 sm:p-6 min-[900px]:max-w-[32rem]"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#F36D25] font-brand text-[1.75rem] font-bold leading-none text-white"
                >
                  9
                </span>
                <div>
                  <h2
                    id="footer-ods"
                    className="font-brand text-lg font-bold leading-snug text-footer-ink"
                  >
                    {footerContent.odsTitle}
                  </h2>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-footer-soft">
                    {footerContent.odsText}
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="col-span-full mt-10 w-full border-t border-on-brand/20 py-6">
            <p className="w-full max-w-none text-center text-sm text-footer-soft">
              © {year} Guia Seguro. Todos os direitos reservados. | Desenvolvido por{" "}
              {footerContent.developer}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
