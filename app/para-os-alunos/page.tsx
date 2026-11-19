import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "@/components/ShareButton";
import { studentsPage } from "@/content/students";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Para os alunos",
  description: "Seis frases curtas sobre segurança digital para repassar aos alunos.",
  alternates: { canonical: "/para-os-alunos/" },
};

export default function StudentsPage() {
  return (
    <main id="conteudo" className="shell pb-16">
      <div className="max-w-[49ch]">
        <header className="pt-10 sm:pt-14">
          <h1 className="text-3xl font-bold sm:text-[2.75rem]">{studentsPage.title}</h1>
        </header>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {studentsPage.lines.map((line) => (
            <li key={line} className="flex gap-4 py-6">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="mt-1 shrink-0"
              >
                <circle cx="12" cy="12" r="8" fill="none" stroke="var(--trust)" strokeWidth="2" />
              </svg>
              <span className="text-xl">{line}</span>
            </li>
          ))}
        </ul>

        <aside className="mt-10 rounded-2xl border border-attention-line bg-attention px-5 py-4 text-attention-ink">
          <p>{studentsPage.warning}</p>
        </aside>

        <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          <Link className="link font-bold" href="/conversar-e-ensinar/">
            Como conversar em casa e na escola
          </Link>
          <Link className="link font-bold" href="/#temas">
            Ver os temas
          </Link>
        </p>

        <footer className="mt-16 border-t border-line pt-8">
          <p className="text-[1.0625rem] text-ink-soft">
            Revisado em {formatDate(studentsPage.reviewedAt)}.
          </p>
          <div className="no-print mt-6">
            <ShareButton />
          </div>
        </footer>
      </div>
    </main>
  );
}
