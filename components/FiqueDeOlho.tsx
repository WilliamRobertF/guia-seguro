import { fiqueDeOlho } from "@/content/fique-de-olho";

export function FiqueDeOlho() {
  return (
    <aside
      aria-labelledby="fique-de-olho"
      className="mt-16 rounded-md bg-attention px-5 py-6 text-ink sm:px-6"
    >
      <h2 id="fique-de-olho" className="text-2xl font-bold">
        Fique de olho
      </h2>
      <p className="mt-4 max-w-[62ch] text-xl font-bold">{fiqueDeOlho.title}</p>
      <p className="mt-3 max-w-[62ch]">{fiqueDeOlho.text}</p>
      <p className="mt-4 text-[1rem] opacity-90">Atualizado em {fiqueDeOlho.updatedAt}</p>
    </aside>
  );
}
