export function QrNote() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <section
      aria-labelledby="qr-note"
      className="mt-20 rounded-2xl border border-line bg-panel px-6 py-7 sm:mt-24 sm:px-8 sm:py-9"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
        <h2 id="qr-note" className="flex items-start gap-3 text-2xl font-bold">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className="mt-0.5 shrink-0 text-ink-soft"
          >
            <path
              d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z"
              fill="currentColor"
            />
          </svg>
          <span>O QR Code do folder leva até aqui</span>
        </h2>
        <div>
          <p>
            O código impresso no folder guarda só um endereço. Ele não instala nada, não
            pede senha e não abre loja de aplicativos. Ao ler, confira o endereço que
            aparece no celular antes de continuar. Ele precisa ser o mesmo que está
            escrito ao lado do código no folder.
          </p>
          <p
            className={`mt-5 rounded-xl border border-line bg-paper px-4 py-3 font-bold ${
              siteUrl ? "break-all" : ""
            }`}
          >
            {siteUrl ?? "O endereço de produção ainda não foi definido. [VERIFICAR]"}
          </p>
        </div>
      </div>
    </section>
  );
}
