"use client";

import { useEffect, useRef } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="theme-icon-moon"
    >
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="theme-icon-sun"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
    </svg>
  );
}

export function ThemeToggle() {
  const animationTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationTimer.current) window.clearTimeout(animationTimer.current);
      document.documentElement.classList.remove("theme-anim");
    };
  }, []);

  function toggleTheme() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    const root = document.documentElement;

    root.classList.add("theme-anim");
    if (animationTimer.current) window.clearTimeout(animationTimer.current);

    applyTheme(next);

    try {
      window.localStorage.setItem("tema", next);
    } catch {
      // Sem armazenamento disponível, o tema ainda troca nesta visita.
    }

    animationTimer.current = window.setTimeout(() => {
      root.classList.remove("theme-anim");
      animationTimer.current = null;
    }, 350);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="no-print relative inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-on-brand/40 text-on-brand hover:border-accent hover:text-accent active:border-accent active:text-accent"
    >
      <span className="sr-only theme-label-light">Mudar para tema escuro</span>
      <span className="sr-only theme-label-dark">Mudar para tema claro</span>
      <MoonIcon />
      <SunIcon />
    </button>
  );
}