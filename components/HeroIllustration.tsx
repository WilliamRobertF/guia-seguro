"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { topics } from "@/content/topics";
import { CheckIcon } from "./icons";
import { TopicIcon } from "./TopicIcon";

const shortLabels: Record<string, string> = {
  "whatsapp-e-codigos": "WhatsApp",
  "dinheiro-a-receber": "Dinheiro a receber",
  "links-qr-e-ligacoes": "Links e QR Codes",
  "senhas-e-duas-etapas": "Senhas",
  wifi: "Wi-Fi",
  "computador-e-celular": "Computador e celular",
  "dados-de-terceiros": "Dados de outras pessoas",
};

const ORBIT_RADIUS = 40;
type Phase = "idle" | "pare" | "respire" | "confirme";

function PauseIcon({ paused }: { paused: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paused ? (
        <path d="M8 5.5v13l10-6.5-10-6.5Z" fill="currentColor" />
      ) : (
        <>
          <rect x="6.5" y="5" width="4" height="14" rx="1" fill="currentColor" />
          <rect x="13.5" y="5" width="4" height="14" rx="1" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

const pillBase =
  "rounded-full border border-line px-2.5 py-1 text-sm font-bold";

export function HeroIllustration() {
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<number[]>([]);
  const playingRef = useRef(false);
  const touchingRef = useRef(false);

  function clearTimers() {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }

  function resetSequence() {
    clearTimers();
    playingRef.current = false;
    setPlaying(false);
    setPhase("idle");
  }

  function startSequence(fromTouch = false) {
    if (paused || playingRef.current) return;
    if (touchingRef.current && !fromTouch) return;

    clearTimers();
    playingRef.current = true;
    setPlaying(true);
    setPhase("pare");

    timers.current = [
      window.setTimeout(() => setPhase("respire"), 1600),
      window.setTimeout(() => setPhase("confirme"), 5600),
      window.setTimeout(() => {
        playingRef.current = false;
        setPlaying(false);
        setPhase("idle");
      }, 7200),
    ];
  }

  function handleTouchStart() {
    if (touchingRef.current) return;
    touchingRef.current = true;
    startSequence(true);
  }

  function handleTouchEnd() {
    touchingRef.current = false;
  }

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
    };
  }, []);

  function togglePaused() {
    setPaused((current) => {
      const next = !current;
      if (next) resetSequence();
      return next;
    });
  }

  return (
    <div
      className={`hero-illustration mx-auto w-full max-w-[28rem] select-none ${
        playing ? "is-playing" : ""
      } ${paused ? "is-paused" : ""}`}
      onMouseEnter={() => startSequence()}
      onMouseLeave={resetSequence}
      onFocus={() => startSequence()}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          resetSequence();
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <div className="relative aspect-square w-full">
        <div className="hero-orbit absolute inset-0">
          <span
            aria-hidden="true"
            className="absolute inset-[10%] rounded-full border border-line/70"
          />
          {topics.map((topic, index) => {
            const angle = ((index * 360) / topics.length) * (Math.PI / 180);
            const left = 50 + ORBIT_RADIUS * Math.cos(angle);
            const top = 50 + ORBIT_RADIUS * Math.sin(angle);
            const label = shortLabels[topic.slug] ?? topic.title;
            const labelAlign =
              left < 35
                ? "left-0"
                : left > 65
                  ? "right-0"
                  : "left-1/2 -translate-x-1/2";

            return (
              <div
                key={topic.slug}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <Link
                  data-topic={topic.slug}
                  href={`/temas/${topic.slug}/`}
                  aria-label={`Ver o tema ${topic.title}`}
                  className="hero-card group relative flex size-14 items-center justify-center no-underline"
                >
                  <TopicIcon slug={topic.slug} size="md" />
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute top-full z-20 mt-2 whitespace-nowrap rounded-full bg-[var(--tc-bg)] px-2.5 py-1 text-sm font-bold text-[var(--tc-fg)] opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 ${labelAlign}`}
                  >
                    {label}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className="hero-center absolute left-1/2 top-1/2 z-10 flex w-[54%] -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        >
          <div className="hero-bubble relative w-full rounded-3xl border border-line bg-surface px-4 py-4 text-center shadow-soft">
            <span className="hero-check absolute right-2 top-2 flex size-9 items-center justify-center rounded-full bg-accent text-on-accent">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  className="hero-check-path"
                  d="M5 12.5l4.5 4.5L19 6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="pr-9 text-sm leading-snug font-bold text-ink">
              Seu pacote foi retido. Pague a taxa agora para liberar a entrega.
            </p>
            <p className="mt-2 text-[13px] text-muted">Exemplo de mensagem de golpe</p>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            <span
              className={`hero-tag ${pillBase} ${
                phase === "pare" ? "is-active" : "bg-surface-2 text-ink"
              }`}
            >
              Pare
            </span>
            <span
              className={`hero-tag hero-tag-respire ${pillBase} ${
                phase === "respire" ? "is-active" : "bg-surface-2 text-ink"
              }`}
            >
              Respire
            </span>
            <span
              className={`hero-tag inline-flex items-center gap-1 ${pillBase} ${
                phase === "confirme" ? "is-active" : "bg-surface-2 text-ink"
              }`}
            >
              Confirme
              <CheckIcon size={12} />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          aria-pressed={paused}
          onClick={togglePaused}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-base font-bold text-ink hover:border-link hover:text-link active:border-link active:text-link"
        >
          <PauseIcon paused={paused} />
          {paused ? "Retomar animação" : "Pausar animação"}
        </button>
      </div>
    </div>
  );
}
