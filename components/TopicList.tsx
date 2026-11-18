import Link from "next/link";
import { topics } from "@/content/topics";

export function TopicList() {
  return (
    <section id="temas" aria-labelledby="temas-titulo" className="mt-16 scroll-mt-6">
      <h2 id="temas-titulo" className="text-2xl font-bold sm:text-3xl">
        Temas
      </h2>
      <ul className="mt-6 border-t border-line">
        {topics.map((topic) => (
          <li key={topic.slug} className="border-b border-line">
            <Link
              href={`/temas/${topic.slug}/`}
              className="group flex min-h-11 flex-col gap-1 py-5 no-underline"
            >
              <span className="text-xl font-bold text-ink group-hover:text-trust group-hover:underline">
                {topic.title}
              </span>
              <span className="max-w-[62ch] text-ink-soft">{topic.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
