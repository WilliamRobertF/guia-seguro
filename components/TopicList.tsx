import Link from "next/link";
import { sectionLabels } from "@/content/sections";
import { topics } from "@/content/topics";
import { SectionLabel } from "./SectionLabel";
import { TopicIcon } from "./TopicIcon";

export function TopicList() {
  return (
    <section id="temas" aria-labelledby="temas-titulo" className="mt-20 scroll-mt-6 sm:mt-24">
      <SectionLabel>{sectionLabels.topics}</SectionLabel>
      <h2 id="temas-titulo" className="text-2xl font-bold sm:text-3xl">
        Temas
      </h2>
      <ul className="mt-8 columns-1 gap-x-12 border-b border-line lg:columns-2">
        {topics.map((topic) => (
          <li key={topic.slug} className="break-inside-avoid border-t border-line">
            <Link
              href={`/temas/${topic.slug}/`}
              className="topic-row group flex cursor-pointer items-start justify-between gap-4 py-6 no-underline transition-colors duration-150"
            >
              <TopicIcon slug={topic.slug} size="sm" />
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="font-brand text-xl font-bold text-ink group-hover:text-link group-focus-visible:text-link group-active:text-link">
                  {topic.title}
                </span>
                <span className="max-w-[49ch] text-ink-soft">{topic.summary}</span>
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="topic-arrow mt-2 shrink-0 text-ink-soft group-hover:text-link group-focus-visible:text-link"
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
