import Link from "next/link";
import { topics } from "@/content/topics";

export function TopicList() {
  return (
    <section id="temas" aria-labelledby="temas-titulo" className="mt-20 scroll-mt-6 sm:mt-24">
      <span aria-hidden="true" className="no-print mb-3 block h-1 w-9 rounded-full bg-trust" />
      <h2 id="temas-titulo" className="text-2xl font-bold sm:text-3xl">
        Temas
      </h2>
      <ul className="mt-8 border-t border-line">
        {topics.map((topic) => (
          <li key={topic.slug} className="border-b border-line">
            <Link
              href={`/temas/${topic.slug}/`}
              className="group -mx-3 flex min-h-11 max-w-[49ch] items-start justify-between gap-4 rounded-md px-3 py-6 no-underline transition-colors hover:bg-panel"
            >
              <span className="flex flex-col gap-1">
                <span className="text-xl font-bold text-ink group-hover:text-trust group-hover:underline">
                  {topic.title}
                </span>
                <span className="text-ink-soft">{topic.summary}</span>
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="no-print mt-1.5 shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-trust"
              >
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
