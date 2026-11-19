"use client";

import { useEffect, useState } from "react";
import { SmoothAnchor } from "./SmoothAnchor";

export type PageIndexItem = {
  id: string;
  label: string;
};

export function PageIndex({ items }: { items: PageIndexItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const linkClass = (id: string) =>
    `block py-1.5 text-[1rem] no-underline transition-colors duration-150 ${
      activeId === id ? "font-bold text-ink" : "text-muted hover:text-ink"
    }`;

  return (
    <div className="mb-8 lg:sticky lg:top-[5.25rem] lg:order-2 lg:mb-0 lg:w-64 lg:self-start">
      <details className="rounded-2xl border border-line bg-surface px-4 py-3 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold text-ink [&::-webkit-details-marker]:hidden">
          Nesta página
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M3.5 6l4.5 4.5L12.5 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </summary>
        <nav aria-label="Nesta página" className="mt-3">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <SmoothAnchor
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  aria-current={activeId === item.id ? "location" : undefined}
                >
                  {item.label}
                </SmoothAnchor>
              </li>
            ))}
          </ul>
        </nav>
      </details>

      <aside className="hidden lg:block">
        <nav aria-labelledby="indice-titulo">
          <h2
            id="indice-titulo"
            className="mb-3 font-brand text-base font-bold text-ink"
          >
            Nesta página
          </h2>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <SmoothAnchor
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  aria-current={activeId === item.id ? "location" : undefined}
                >
                  {item.label}
                </SmoothAnchor>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
