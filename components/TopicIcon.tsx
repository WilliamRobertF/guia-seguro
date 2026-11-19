import {
  BanknoteIcon,
  ChatIcon,
  KeyIcon,
  LaptopIcon,
  PhotoIcon,
  QrIcon,
  WifiIcon,
} from "./icons";

const topicIcons = {
  "whatsapp-e-codigos": ChatIcon,
  "dinheiro-a-receber": BanknoteIcon,
  "links-qr-e-ligacoes": QrIcon,
  "senhas-e-duas-etapas": KeyIcon,
  wifi: WifiIcon,
  "computador-e-celular": LaptopIcon,
  "dados-de-terceiros": PhotoIcon,
} as const;

const iconSizes = {
  xs: "size-10",
  sm: "size-12",
  md: "size-14",
  lg: "size-16",
  card: "size-[5.5rem]",
} as const;

const iconPixels = {
  xs: 20,
  sm: 22,
  md: 24,
  lg: 28,
  card: 40,
} as const;

type TopicIconSize = keyof typeof iconSizes;

export function TopicIcon({
  slug,
  size = "sm",
  className = "",
}: {
  slug: string;
  size?: TopicIconSize;
  className?: string;
}) {
  const Icon = topicIcons[slug as keyof typeof topicIcons];
  if (!Icon) return null;

  return (
    <span
      data-topic={slug}
      aria-hidden="true"
      className={`topic-icon inline-flex shrink-0 items-center justify-center rounded-2xl bg-[var(--tc-bg)] text-[var(--tc-fg)] group-hover:bg-[var(--tc-fg)] group-hover:text-[var(--bg)] group-focus-visible:bg-[var(--tc-fg)] group-focus-visible:text-[var(--bg)] ${iconSizes[size]} ${className}`}
    >
      <Icon size={iconPixels[size]} />
    </span>
  );
}
