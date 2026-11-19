"use client";

import { useLinkStatus } from "next/link";
import { useEffect, useRef } from "react";

export function LinkStatus() {
  const { pending } = useLinkStatus();
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const link = ref.current?.closest("a");
    if (!link) return;

    let timer: number | undefined;

    if (pending) {
      timer = window.setTimeout(() => {
        link.classList.add("is-pending");
        link.setAttribute("aria-busy", "true");
      }, 150);
    } else {
      link.classList.remove("is-pending");
      link.removeAttribute("aria-busy");
    }

    return () => {
      if (timer) window.clearTimeout(timer);
      link.classList.remove("is-pending");
      link.removeAttribute("aria-busy");
    };
  }, [pending]);

  return <span ref={ref} aria-hidden="true" className="link-status" />;
}
