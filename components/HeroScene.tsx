import {
  BookIcon,
  ChatIcon,
  CheckIcon,
  FolderIcon,
  HeartIcon,
  PencilIcon,
  PlayIcon,
  SearchIcon,
  WifiIcon,
} from "./icons";

const tiles = [
  {
    Icon: ChatIcon,
    position: "left-[1%] top-[16%] -rotate-6",
    tint: "bg-tint-lavender text-trust",
    size: 26,
  },
  {
    Icon: WifiIcon,
    position: "left-[42%] top-[1%] rotate-3",
    tint: "bg-tint-mint text-safe",
    size: 24,
  },
  {
    Icon: BookIcon,
    position: "right-[1%] top-[15%] rotate-6",
    tint: "bg-tint-blue text-trust",
    size: 26,
  },
  {
    Icon: HeartIcon,
    position: "left-[8%] top-[49%] rotate-4",
    tint: "bg-tint-pink text-trust",
    size: 24,
  },
  {
    Icon: SearchIcon,
    position: "right-[5%] top-[47%] -rotate-5",
    tint: "bg-tint-peach text-trust",
    size: 26,
  },
  {
    Icon: PlayIcon,
    position: "bottom-[7%] left-[15%] rotate-5",
    tint: "bg-tint-yellow text-brand",
    size: 24,
  },
  {
    Icon: FolderIcon,
    position: "bottom-[9%] right-[9%] -rotate-4",
    tint: "bg-tint-lavender text-trust",
    size: 26,
  },
  {
    Icon: PencilIcon,
    position: "bottom-0 left-[44%] rotate-2",
    tint: "bg-tint-blue text-trust",
    size: 24,
  },
];

function Tile({
  Icon,
  tint,
  size,
  className = "",
}: {
  Icon: typeof ChatIcon;
  tint: string;
  size: number;
  className?: string;
}) {
  return (
    <span
      className={`flex size-16 items-center justify-center rounded-2xl border border-line shadow-sm ${tint} ${className}`}
    >
      <Icon size={size} />
    </span>
  );
}

export function HeroScene() {
  return (
    <div
      aria-hidden="true"
      className="no-print relative mx-auto aspect-square w-full max-w-[27rem] select-none"
    >
      <span className="absolute inset-[7%] rounded-full bg-hero" />
      <span className="absolute left-[36%] top-[7%] size-3 rounded-full bg-cta" />
      <span className="absolute bottom-[20%] left-[35%] size-2.5 rounded-full bg-trust/50" />

      {tiles.map(({ Icon, position, tint, size }) => (
        <div key={position} className={`absolute ${position}`}>
          <Tile Icon={Icon} tint={tint} size={size} />
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-line bg-panel p-6 shadow-soft">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-cta text-on-cta">
          <CheckIcon size={32} />
        </div>
        <div className="mt-5 flex justify-center gap-2">
          <span className="size-2 rounded-full bg-tint-lavender" />
          <span className="size-2 rounded-full bg-tint-yellow" />
          <span className="size-2 rounded-full bg-tint-mint" />
        </div>
        <span className="absolute -bottom-3 left-1/2 size-7 -translate-x-1/2 rotate-45 border-b border-r border-line bg-panel" />
      </div>
    </div>
  );
}

const rowTiles = [
  { Icon: ChatIcon, tint: "bg-tint-lavender text-trust" },
  { Icon: WifiIcon, tint: "bg-tint-mint text-safe" },
  { Icon: BookIcon, tint: "bg-tint-blue text-trust" },
  { Icon: HeartIcon, tint: "bg-tint-pink text-trust" },
];

export function HeroIconRow() {
  return (
    <div aria-hidden="true" className="no-print mt-6 flex gap-2 lg:hidden">
      {rowTiles.map(({ Icon, tint }) => (
        <span
          key={tint}
          className={`flex size-12 items-center justify-center rounded-2xl border border-line ${tint}`}
        >
          <Icon size={22} />
        </span>
      ))}
    </div>
  );
}
