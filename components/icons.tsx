import type { ReactNode } from "react";

type IconProps = { size?: number };

function LineIcon({ size = 22, children }: { size?: number; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function ChatIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <path d="M5 4.5h14A2.5 2.5 0 0 1 21.5 7v7a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4H5A2.5 2.5 0 0 1 2.5 14V7A2.5 2.5 0 0 1 5 4.5Z" />
      <path d="M7 9h10M7 12.5h6" />
    </LineIcon>
  );
}

export function WifiIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <path d="M3 9.5c5-4.5 13-4.5 18 0M6 12.5c3.5-3 8.5-3 12 0M9.5 15.5c1.5-1.3 3.5-1.3 5 0" />
      <circle cx="12" cy="18.5" r="1.2" fill="currentColor" stroke="none" />
    </LineIcon>
  );
}

export function BookIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <path d="M4 5.5c2.8-.9 5-.8 8 1 3-1.8 5.2-1.9 8-1v13c-2.8-.9-5-.8-8 1-3-1.8-5.2-1.9-8-1v-13Z" />
      <path d="M12 6.5v13" />
    </LineIcon>
  );
}

export function HeartIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9Z" />
    </LineIcon>
  );
}

export function SearchIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5" />
    </LineIcon>
  );
}

export function PlayIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5v-7Z" fill="currentColor" stroke="none" />
    </LineIcon>
  );
}

export function FolderIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <path d="M3.5 7A2.5 2.5 0 0 1 6 4.5h3.5l2 2H18A2.5 2.5 0 0 1 20.5 9v8A2.5 2.5 0 0 1 18 19.5H6A2.5 2.5 0 0 1 3.5 17V7Z" />
    </LineIcon>
  );
}

export function PencilIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <path d="M4 20l4.2-1 10.6-10.6a2 2 0 0 0-2.8-2.8L5.4 16.2 4 20Z" />
      <path d="M14.5 6.5l3 3" />
    </LineIcon>
  );
}

export function BanknoteIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9.5v5M18 9.5v5" />
    </LineIcon>
  );
}

export function LinkIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <path d="M10 14a4 4 0 0 1 0-5.7l2.3-2.3a4 4 0 0 1 5.7 5.7L16.5 13" />
      <path d="M14 10a4 4 0 0 1 0 5.7l-2.3 2.3a4 4 0 0 1-5.7-5.7L7.5 11" />
    </LineIcon>
  );
}

export function KeyIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11l8.5 8.5M16 16l2-2M18.5 18.5l2-2" />
    </LineIcon>
  );
}

export function LaptopIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <rect x="4.5" y="5" width="15" height="10" rx="2" />
      <path d="M2.5 18.5h19" />
    </LineIcon>
  );
}

export function PhotoIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="M4.5 17l4.5-4.5 3.5 3 3-2.5 4 4" />
    </LineIcon>
  );
}

export function QrIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
      <path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" fill="currentColor" stroke="none" />
    </LineIcon>
  );
}

export function CheckIcon({ size }: IconProps) {
  return (
    <LineIcon size={size}>
      <path d="M5 12.5l4.5 4.5L19 6.5" />
    </LineIcon>
  );
}
