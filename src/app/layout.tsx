import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyPass | Identidade Digital Soberana",
  description: "Uma validação biométrica de Nível 4 reconhecida em qualquer banco, hospital ou evento no Brasil. 100% determinística. Powered by FaceTec + Praetorian.",
  keywords: ["identidade digital", "biometria", "PIX", "tokenização", "LGPD", "fintech", "autenticação", "MyPass"],
  robots: "index, follow",
  alternates: {
    canonical: "https://mypass-v2.vercel.app",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MyPass | Identidade Digital Soberana",
    description: "Seu Rosto. Seu Token. Seu Controle. Infraestrutura de identidade biométrica para o mercado brasileiro.",
    url: "https://mypass-v2.vercel.app",
    siteName: "MyPass",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://mypass-v2.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyPass - Identidade Digital Soberana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyPass | Identidade Digital Soberana",
    description: "Biometria de Nível 4 + PIX + Tokenização para o mercado brasileiro.",
    images: ["https://mypass-v2.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geist.variable} ${inter.variable} font-inter antialiased overflow-x-hidden`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
