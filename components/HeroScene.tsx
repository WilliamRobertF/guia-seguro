import Link from "next/link";
import { topics } from "@/content/topics";
import { CheckIcon } from "./icons";
import { topicIconItems } from "./TopicIcon";

const ORBIT_RADIUS = 43;

export function HeroScene() {
  return (
    <div
      role="group"
      aria-label="Atalhos ilustrados para os temas"
      className="no-print relative mx-auto aspect-square w-full max-w-[20rem] select-none sm:max-w-[27rem]"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 z-10 flex w-[52%] -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      >
        <div className="w-full rounded-3xl border border-line bg-surface px-3 py-3 text-center shadow-soft sm:px-5 sm:py-4">
          <p className="text-[0.8rem] leading-snug font-bold text-ink sm:text-[0.95rem]">
            Seu pacote foi retido. Pague a taxa agora para liberar a entrega.
          </p>
          <p className="mt-2 text-[0.65rem] text-muted sm:text-xs">
            Exemplo de mensagem de golpe
          </p>
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          <span className="rounded-full bg-surface-2 px-2.5 py-1 text-[0.65rem] font-bold text-ink sm:px-3 sm:text-xs">
            Pare
          </span>
          <span className="rounded-full bg-surface-2 px-2.5 py-1 text-[0.65rem] font-bold text-ink sm:px-3 sm:text-xs">
            Respire
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-bold text-on-accent sm:px-3 sm:text-xs">
            Confirme
            <CheckIcon size={12} />
          </span>
        </div>
      </div>

      {topics.map((topic, index) => {
        const item = topicIconItems[topic.slug as keyof typeof topicIconItems];
        if (!item) return null;

        const angle = ((-90 + (360 / topics.length) * index) * Math.PI) / 180;
        const left = 50 + ORBIT_RADIUS * Math.cos(angle);
        const top = 50 + ORBIT_RADIUS * Math.sin(angle);
        const Icon = item.Icon;

        return (
          <Link
            key={topic.slug}
            href={`/temas/${topic.slug}/`}
            aria-label={`Ver o tema ${topic.title}`}
            className={`absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-line no-underline transition-colors duration-150 hover:border-link active:border-link sm:size-14 ${item.tint}`}
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            <Icon size={22} />
          </Link>
        );
      })}
    </div>
  );
}
