import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo" className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Página não encontrada</h1>
      <p className="mt-5 max-w-[58ch] text-xl">
        O endereço pode ter mudado ou sido digitado com uma letra diferente. Nada de
        susto: você pode voltar ao início ou ir direto para a lista de temas.
      </p>
      <div className="no-print mt-8 flex flex-wrap gap-3">
        <Link href="/" className="button">
          Ir para o início
        </Link>
        <Link href="/#temas" className="button button-quiet">
          Ver os temas
        </Link>
      </div>
    </main>
  );
}
