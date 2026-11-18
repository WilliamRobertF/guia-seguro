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
          className="inline-flex min-h-11 items-center gap-3 whitespace-nowrap text-xl font-bold text-ink no-underline"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="14" cy="14" r="13" fill="var(--safe-soft)" />
            <path
              d="M8.5 14.5l3.6 3.5 7.4-8"
              fill="none"
              stroke="var(--safe)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Guia Seguro</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-x-6 text-[1.0625rem]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center whitespace-nowrap text-ink-soft no-underline hover:text-trust hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group lg:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center gap-2 whitespace-nowrap rounded-md px-2 font-bold text-ink transition-colors hover:bg-trust-soft">
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
                      className="flex min-h-12 items-center whitespace-nowrap text-ink no-underline hover:text-trust"
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

