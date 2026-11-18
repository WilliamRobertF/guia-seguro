import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const shareImage = siteUrl
  ? { url: "/og.png", width: 1200, height: 630, alt: "Pare. Respire. Confirme." }
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Guia Seguro: Pare. Respire. Confirme.",
    template: "%s | Guia Seguro",
  },
  description:
    "Orientações de segurança digital para professores, sem complicação. Hábitos simples para proteger contas, dinheiro e dados.",
  applicationName: "Guia Seguro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Guia Seguro",
    images: shareImage ? [shareImage] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    images: shareImage ? [shareImage.url] : undefined,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${atkinson.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
