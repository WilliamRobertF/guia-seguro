import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Geologica } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/BackToTop";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SmoothAnchor } from "@/components/SmoothAnchor";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-geologica",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const shareImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Pare. Respire. Confirme.",
};

const themeScript = `(function () {
  var stored = null;
  try {
    stored = window.localStorage.getItem("tema");
  } catch (error) {}
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var theme = stored === "dark" || stored === "light" ? stored : systemDark ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
})();`;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Guia Seguro: Pare. Respire. Confirme.",
    template: "%s | Guia Seguro",
  },
  description:
    "Orientações de segurança digital para quem usa celular e computador, sem complicação. Hábitos simples para proteger contas, dinheiro e dados.",
  applicationName: "Guia Seguro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Guia Seguro",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [shareImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#2E1F63",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${atkinson.variable} ${geologica.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <SmoothAnchor href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </SmoothAnchor>
        <BackToTop />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
