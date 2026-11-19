"use client";

import { useState } from "react";

export function ShareButton() {
  const [message, setMessage] = useState("");

  async function sharePage() {
    const url = window.location.href;

    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title: document.title, url });
        setMessage("Pronto. O link foi compartilhado.");
        return;
      }

      await navigator.clipboard.writeText(url);
      setMessage("Link copiado. Agora é só colar no WhatsApp ou no e-mail.");
    } catch {
      setMessage("Não foi possível copiar. Selecione o endereço na barra do navegador.");
    }
  }

  return (
    <div>
      <button type="button" onClick={sharePage} className="button button-quiet w-full sm:w-auto">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M12 3v12M8 7l4-4 4 4M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Compartilhar esta página
      </button>
      <p role="status" aria-live="polite" className="mt-2 text-[1rem] text-ink-soft">
        {message}
      </p>
    </div>
  );
}
