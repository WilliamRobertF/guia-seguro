import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo" className="shell py-20">
      <div className="max-w-[49ch]">
        <h1 className="text-3xl font-bold sm:text-[2.75rem]">Página não encontrada</h1>
        <p className="mt-5 text-xl">
          O endereço pode ter mudado ou sido digitado com uma letra diferente. Nada de
          susto: você pode voltar ao início ou ir direto para a lista de temas.
        </p>
        <div className="no-print mt-10 flex flex-wrap gap-3">
          <Link href="/" className="button w-full sm:w-auto">
            Ir para o início
          </Link>
          <Link href="/#temas" className="button button-quiet w-full sm:w-auto">
            Ver os temas
          </Link>
        </div>
      </div>
    </main>
  );
}
