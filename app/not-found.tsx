import type { Metadata } from "next";
import Link from "next/link";
import { LinkStatus } from "@/components/LinkStatus";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "O endereço pode estar errado ou a página pode ter mudado. Volte para o início ou escolha um tema.",
};

export default function NotFound() {
  return (
    <main id="conteudo" className="shell py-20" tabIndex={-1}>
      <div className="max-w-[49ch]">
        <h1 className="text-3xl font-bold sm:text-[2.75rem]">Página não encontrada</h1>
        <p className="mt-5 text-xl">
          O endereço pode estar errado ou a página pode ter mudado. Volte para o início ou escolha
          um tema.
        </p>
        <div className="no-print mt-10 flex flex-wrap gap-3">
          <Link href="/" className="button w-full sm:w-auto">
            Ir para o início
            <LinkStatus />
          </Link>
          <Link href="/#temas" className="button button-quiet w-full sm:w-auto">
            Ver os temas
            <LinkStatus />
          </Link>
        </div>
      </div>
    </main>
  );
}
