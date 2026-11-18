export function HeroPath() {
  return (
    <svg
      viewBox="0 0 1120 110"
      aria-hidden="true"
      focusable="false"
      className="no-print mt-10 hidden h-auto w-full sm:block"
    >
      <path
        d="M40 66C190 18 330 96 520 62S880 14 1080 62"
        fill="none"
        stroke="var(--line)"
        strokeWidth="2"
        strokeDasharray="5 9"
        strokeLinecap="round"
      />

      <g transform="translate(150 50)">
        <circle r="27" fill="var(--panel)" stroke="var(--safe)" strokeWidth="2" />
        <path
          d="M-5 -10v20M5 -10v20"
          stroke="var(--safe)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </g>

      <g transform="translate(560 58)">
        <circle r="27" fill="var(--attention)" stroke="var(--attention-line)" strokeWidth="2" />
        <path
          d="M-13 3c4-9 9-9 13 0s9 9 13 0"
          fill="none"
          stroke="var(--ink-soft)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>

      <g transform="translate(970 46)">
        <circle r="27" fill="var(--trust-soft)" stroke="var(--trust)" strokeWidth="2" />
        <path
          d="M-11 1l8 8 15-18"
          fill="none"
          stroke="var(--trust)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
