import type { Metadata } from "next";
import Link from "next/link";
import { InternalPageLayout } from "@/components/InternalPageLayout";
import { SourceList } from "@/components/SourceList";
import { studentsPage } from "@/content/students";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Para jovens",
  description: studentsPage.intro,
  alternates: { canonical: "/para-jovens/" },
};

const indexItems = [
  ...studentsPage.sections.map((section, index) => ({
    id: `secao-${index + 1}`,
    label: section.title,
  })),
  { id: "fontes", label: "Fontes" },
];

export default function StudentsPage() {
  return (
    <InternalPageLayout
      title={studentsPage.title}
      subtitle={studentsPage.intro}
      indexItems={indexItems}
    >
      {studentsPage.sections.map((section, index) => {
        const sectionId = `secao-${index + 1}`;

        return (
          <section
            key={section.title}
            id={sectionId}
            aria-labelledby={`${sectionId}-titulo`}
            className="mt-16 scroll-mt-6 border-t border-line pt-10 first:mt-0 first:border-t-0 first:pt-0"
            tabIndex={-1}
          >
            <h2
              id={`${sectionId}-titulo`}
              className="text-2xl font-bold sm:text-[1.75rem]"
            >
              {section.title}
            </h2>
            <p className="mt-4">{section.body}</p>
          </section>
        );
      })}

      <p className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
        <Link className="nav-link font-bold" href="/conversar-e-ensinar/">
          Conversar e ensinar (para quem cuida de jovens)
        </Link>
        <Link className="nav-link font-bold" href="/#temas">
          Ver os temas
        </Link>
      </p>

      <footer className="mt-16 border-t border-line pt-8">
        <p className="text-[1.0625rem] text-ink-soft">
          Atualizado em {formatDate(studentsPage.reviewedAt)}.
        </p>
        <SourceList sources={studentsPage.sources} />
      </footer>
    </InternalPageLayout>
  );
}
