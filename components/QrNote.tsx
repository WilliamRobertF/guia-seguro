export function QrNote() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <section
      aria-labelledby="qr-note"
      className="mt-16 rounded-md border border-line bg-panel px-5 py-6 sm:px-6"
    >
      <h2 id="qr-note" className="text-2xl font-bold">
        O QR Code do folder leva até aqui
      </h2>
      <p className="mt-3 max-w-[62ch]">
        O código impresso no folder guarda só um endereço. Ele não instala nada, não pede
        senha e não abre loja de aplicativos. Ao ler, confira o endereço que aparece no
        celular antes de continuar. Ele precisa ser o mesmo que está escrito ao lado do
        código no folder.
      </p>
      <p className="mt-4 break-all rounded-md border border-line bg-paper px-4 py-3 font-bold">
        {siteUrl ?? "O endereço de produção ainda não foi definido. [VERIFICAR]"}
      </p>
    </section>
  );
}
