import {
  BanknoteIcon,
  ChatIcon,
  KeyIcon,
  LaptopIcon,
  PhotoIcon,
  QrIcon,
  WifiIcon,
} from "./icons";

const items = {
  "whatsapp-e-codigos": { Icon: ChatIcon, tint: "bg-tint-lavender text-trust" },
  "dinheiro-a-receber": { Icon: BanknoteIcon, tint: "bg-tint-yellow text-brand" },
  "links-qr-e-ligacoes": { Icon: QrIcon, tint: "bg-tint-blue text-trust" },
  "senhas-e-duas-etapas": { Icon: KeyIcon, tint: "bg-tint-peach text-trust" },
  wifi: { Icon: WifiIcon, tint: "bg-tint-mint text-safe" },
  "computador-e-celular": { Icon: LaptopIcon, tint: "bg-tint-lavender text-trust" },
  "dados-de-terceiros": { Icon: PhotoIcon, tint: "bg-tint-pink text-trust" },
} as const;

export function TopicIcon({ slug }: { slug: string }) {
  const item = items[slug as keyof typeof items];
  if (!item) return null;

  const { Icon, tint } = item;

  return (
    <span
      aria-hidden="true"
      className={`no-print mt-0.5 hidden size-12 shrink-0 items-center justify-center rounded-2xl border border-line sm:flex ${tint}`}
    >
      <Icon size={22} />
    </span>
  );
}
