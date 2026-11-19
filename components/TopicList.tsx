import Link from "next/link";
import { sectionLabels } from "@/content/sections";
import { topics } from "@/content/topics";
import { LinkStatus } from "./LinkStatus";
import { SectionLabel } from "./SectionLabel";
import { TopicIcon } from "./TopicIcon";

export function TopicList() {
  return (
    <section id="temas" aria-labelledby="temas-titulo" className="mt-20 scroll-mt-6 sm:mt-24" tabIndex={-1}>
      <SectionLabel>{sectionLabels.topics}</SectionLabel>
      <h2 id="temas-titulo" className="text-2xl font-bold sm:text-3xl">
        Temas
      </h2>
      <div className="topic-cards mt-8">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/temas/${topic.slug}/`}
            data-topic={topic.slug}
            className="topic-card"
          >
            <div className="topic-card-move">
              <div className="flex justify-center">
                <TopicIcon slug={topic.slug} size="card" />
              </div>
              <h3 className="mt-5 font-brand text-xl font-bold text-ink">
                {topic.title}
              </h3>
              <p className="mt-3 text-ink-soft">{topic.summary}</p>
            </div>
            <span className="topic-card-cta">Saiba mais</span>
            <LinkStatus />
          </Link>
        ))}
      </div>
    </section>
  );
}
