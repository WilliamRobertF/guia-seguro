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
type Step = "idle" | "pare" | "respire" | "confirme";

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
  "rounded-full border border-line";

export function HeroIllustration() {
  const [step, setStep] = useState<Step>("idle");
  const [paused, setPaused] = useState(false);
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);
  const [focusedTopic, setFocusedTopic] = useState<string | null>(null);
  const stepRef = useRef<Step>("idle");
  const timers = useRef<number[]>([]);

  const activeTopic = hoveredTopic ?? focusedTopic;
  const activeLabel = activeTopic ? shortLabels[activeTopic] ?? "" : "";
  const orbitPaused = paused || step !== "idle" || activeTopic !== null;

  function clearTimers() {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }

  function updateStep(next: Step) {
    stepRef.current = next;
    setStep(next);
  }

  function startSequence() {
    if (paused || stepRef.current !== "idle") return;

    clearTimers();
    updateStep("pare");

    timers.current = [
      window.setTimeout(() => updateStep("respire"), 1600),
      window.setTimeout(() => updateStep("confirme"), 5600),
      window.setTimeout(() => updateStep("idle"), 7200),
    ];
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
      if (next) {
        clearTimers();
        updateStep("idle");
      }
      return next;
    });
  }

  return (
    <div
      className={`hero-illustration mx-auto w-full max-w-[32rem] select-none ${
        orbitPaused ? "is-orbit-paused" : ""
      }`}
      data-step={step}
      onMouseEnter={startSequence}
      onFocus={startSequence}
      onPointerDown={(event) => {
        if (event.pointerType === "touch") startSequence();
      }}
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
                  onMouseEnter={() => setHoveredTopic(topic.slug)}
                  onMouseLeave={() =>
                    setHoveredTopic((current) => (current === topic.slug ? null : current))
                  }
                  onFocus={() => setFocusedTopic(topic.slug)}
                  onBlur={() =>
                    setFocusedTopic((current) => (current === topic.slug ? null : current))
                  }
                >
                  <TopicIcon slug={topic.slug} size="md" />
                </Link>
              </div>
            );
          })}
        </div>

        <div
          aria-hidden="true"
          className="hero-center pointer-events-none absolute left-1/2 top-1/2 z-10 flex w-[54%] -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        >
          <div className="hero-bubble relative w-full rounded-3xl border border-line bg-surface px-4 py-4 text-center shadow-soft">
            <p className="text-sm leading-snug font-bold text-ink">
              Seu pacote foi retido. Pague a taxa agora para liberar a entrega.
            </p>
            <p className="mt-2 text-[13px] text-muted">Exemplo de mensagem de golpe</p>
          </div>
          <div className="hero-tags mt-3">
            <span
              className={`hero-tag hero-tag-pare ${pillBase}`}
            >
              Pare
            </span>
            <span
              className={`hero-tag hero-tag-respire ${pillBase}`}
            >
              Respire
            </span>
            <span
              className={`hero-tag hero-tag-confirme inline-flex items-center gap-1 ${pillBase}`}
            >
              Confirme
              <span className="hero-tag-check">
                <CheckIcon size={12} />
              </span>
            </span>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="hero-legend"
        data-topic={activeTopic ?? undefined}
      >
        {activeLabel}
      </p>

      <div className="mt-4 flex justify-center">
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
