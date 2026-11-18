import Link from "next/link";
import { topics } from "@/content/topics";

export function TopicList() {
  return (
    <section id="temas" aria-labelledby="temas-titulo" className="mt-20 scroll-mt-6 sm:mt-24">
      <h2 id="temas-titulo" className="text-2xl font-bold sm:text-3xl">
        Temas
      </h2>
      <ul className="mt-8 border-t border-line">
        {topics.map((topic) => (
          <li key={topic.slug} className="border-b border-line">
            <Link
              href={`/temas/${topic.slug}/`}
              className="group -mx-3 flex min-h-11 max-w-[49ch] flex-col gap-1 rounded-md px-3 py-6 no-underline transition-colors hover:bg-panel"
            >
              <span className="text-xl font-bold text-ink group-hover:text-trust group-hover:underline">
                {topic.title}
              </span>
              <span className="text-ink-soft">{topic.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
