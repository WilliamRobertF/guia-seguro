import type { Metadata } from "next";
import Link from "next/link";
import { InternalPageLayout } from "@/components/InternalPageLayout";
import { SourceList } from "@/components/SourceList";
import { teachPage } from "@/content/teach";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Conversar e ensinar",
  description: teachPage.intro,
  alternates: { canonical: "/conversar-e-ensinar/" },
};

const indexItems = [
  ...teachPage.sections.map((section, index) => ({
    id: `secao-${index + 1}`,
    label: section.title,
  })),
  { id: "fontes", label: "Fontes" },
];

export default function TeachPage() {
  return (
    <InternalPageLayout
      title={teachPage.title}
      subtitle={teachPage.intro}
      indexItems={indexItems}
    >
      {teachPage.sections.map((section, index) => {
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
            <div className="mt-6 space-y-6">
              {section.items.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2">{item.body}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <p className="mt-10">
        <Link className="nav-link font-bold" href="/#temas">
          Ver os temas
        </Link>
      </p>

      <footer className="mt-16 border-t border-line pt-8">
        <p className="text-[1.0625rem] text-ink-soft">
          Atualizado em {formatDate(teachPage.reviewedAt)}.
        </p>
        <SourceList sources={teachPage.sources} />
      </footer>
    </InternalPageLayout>
  );
}
