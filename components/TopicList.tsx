"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { topics } from "@/content/topics";
import { LinkStatus } from "./LinkStatus";
import { TopicIcon } from "./TopicIcon";

export function TopicList() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mobile = window.matchMedia("(max-width: 639px)");
    let observer: IntersectionObserver | null = null;

    function setup() {
      observer?.disconnect();
      observer = null;

      if (!mobile.matches) {
        setActive(0);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const target = visible[0]?.target;

          if (!target) return;

          const index = cardRefs.current.findIndex((card) => card === target);
          if (index >= 0) setActive(index);
        },
        { root: container, threshold: 0.6 },
      );

      cardRefs.current.forEach((card) => {
        if (card) observer?.observe(card);
      });
    }

    setup();
    mobile.addEventListener("change", setup);

    return () => {
      observer?.disconnect();
      mobile.removeEventListener("change", setup);
    };
  }, []);

  function scrollByCard(direction: -1 | 1) {
    const container = containerRef.current;
    const card = cardRefs.current[0];
    if (!container || !card) return;

    const gap = parseFloat(getComputedStyle(container).columnGap || "16") || 16;
    const step = card.offsetWidth + gap;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    container.scrollBy({
      left: step * direction,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  const lastIndex = topics.length - 1;

  return (
    <section id="temas" aria-labelledby="temas-titulo" className="mt-20 scroll-mt-6 sm:mt-24" tabIndex={-1}>
      <h2 id="temas-titulo" className="text-2xl font-bold sm:text-3xl">
        Temas
      </h2>
      <div
        ref={containerRef}
        className="topic-cards mt-8"
        tabIndex={0}
        role="region"
        aria-label="Temas"
      >
        {topics.map((topic, index) => (
          <Link
            key={topic.slug}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            href={`/temas/${topic.slug}/`}
            data-topic={topic.slug}
            className={`topic-card ${index === active ? "is-centered" : ""}`}
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

      <div className="topic-carousel-controls">
        <button
          type="button"
          className="topic-carousel-button"
          onClick={() => scrollByCard(-1)}
          disabled={active === 0}
        >
          Anterior
        </button>
        <div aria-hidden="true" className="topic-dots">
          {topics.map((topic, index) => (
            <span
              key={topic.slug}
              className={`topic-dot ${index === active ? "is-active" : ""}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="topic-carousel-button"
          onClick={() => scrollByCard(1)}
          disabled={active === lastIndex}
        >
          Próximo
        </button>
      </div>
    </section>
  );
}
