export function QrNote() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <section
      aria-labelledby="qr-note"
      className="mt-20 rounded-lg border border-line bg-panel px-6 py-7 sm:mt-24 sm:px-8 sm:py-9"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
        <h2 id="qr-note" className="text-2xl font-bold">
          O QR Code do folder leva até aqui
        </h2>
        <div>
          <p>
            O código impresso no folder guarda só um endereço. Ele não instala nada, não
            pede senha e não abre loja de aplicativos. Ao ler, confira o endereço que
            aparece no celular antes de continuar. Ele precisa ser o mesmo que está
            escrito ao lado do código no folder.
          </p>
          <p
            className={`mt-5 rounded-md border border-line bg-paper px-4 py-3 font-bold ${
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
