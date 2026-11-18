import Link from "next/link";

const links = [
  { href: "/#temas", label: "Temas" },
  { href: "/se-algo-deu-errado/", label: "Se algo deu errado" },
  { href: "/conversar-e-ensinar/", label: "Conversar e ensinar" },
  { href: "/para-os-alunos/", label: "Para os alunos" },
  { href: "/sobre/", label: "Sobre" },
];

export function SiteHeader() {
  return (
    <header className="no-print relative border-b border-line bg-paper">
      <div className="shell flex items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-3 whitespace-nowrap font-brand text-xl font-bold text-brand no-underline"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M5 4h20a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-9l-6 5v-5H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
              fill="var(--cta)"
            />
            <path
              d="M9 12l4 4 8-8"
              fill="none"
              stroke="var(--on-cta)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Guia Seguro</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-x-6 font-brand text-[1.0625rem]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center whitespace-nowrap font-normal text-ink-soft no-underline hover:text-trust hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group lg:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-line px-3.5 font-brand font-semibold text-brand transition-colors hover:border-trust hover:text-trust">
            <span>Menu</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
              focusable="false"
              className="text-ink-soft transition-transform group-open:rotate-180"
            >
              <path
                d="M3.5 6l4.5 4.5L12.5 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </summary>
          <div className="absolute inset-x-0 top-full z-40 border-b border-line bg-panel">
            <nav aria-label="Navegação principal no celular" className="shell">
              <ul className="divide-y divide-line py-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-12 items-center whitespace-nowrap font-brand font-normal text-brand no-underline hover:text-trust"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

