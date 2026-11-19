import { sectionLabels } from "@/content/sections";
import { QrIcon } from "./icons";
import { SectionLabel } from "./SectionLabel";

export function QrNote() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <section
      aria-labelledby="qr-note"
      className="mt-20 rounded-3xl border border-line bg-surface-2 px-6 py-7 shadow-soft sm:mt-24 sm:px-8 sm:py-9"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-12">
        <div>
          <SectionLabel>{sectionLabels.folder}</SectionLabel>
          <h2 id="qr-note" className="flex items-start gap-3 text-2xl font-bold">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface text-link">
              <QrIcon size={22} />
            </span>
            <span>O QR Code do folder leva até aqui</span>
          </h2>
        </div>
        <div>
          <p>
            O código impresso no folder guarda só um endereço. Ele não instala nada, não
            pede senha e não abre loja de aplicativos. Ao ler, confira o endereço que
            aparece no celular antes de continuar. Ele precisa ser o mesmo que está
            escrito ao lado do código no folder.
          </p>
          <p
            className={`mt-5 rounded-xl border border-line bg-surface px-4 py-3 font-bold [overflow-wrap:anywhere]`}
          >
            {siteUrl ?? "O endereço de produção ainda não foi definido. [VERIFICAR]"}
          </p>
        </div>
      </div>
    </section>
  );
}
