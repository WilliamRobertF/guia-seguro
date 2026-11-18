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
    <header className="no-print border-b border-line">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-3 self-start text-xl font-bold text-ink no-underline"
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
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap gap-x-5 text-[1.0625rem]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-ink-soft no-underline hover:text-trust hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
