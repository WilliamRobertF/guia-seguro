import type { Metadata } from "next";
import Link from "next/link";
import { LinkStatus } from "@/components/LinkStatus";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "O endereço pode ter mudado ou sido digitado com uma letra diferente. Volte ao início ou veja a lista de temas.",
};

export default function NotFound() {
  return (
    <main id="conteudo" className="shell py-20" tabIndex={-1}>
      <div className="max-w-[49ch]">
        <h1 className="text-3xl font-bold sm:text-[2.75rem]">Página não encontrada</h1>
        <p className="mt-5 text-xl">
          O endereço pode ter mudado ou sido digitado com uma letra diferente. Nada de
          susto: você pode voltar ao início ou ir direto para a lista de temas.
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
