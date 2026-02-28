import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyPass | Identidade Determinística",
  description: "A única tecnologia de biometria certificada pela Praetorian contra ataques de injeção Nível 4 e 5.",
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
      </body>
    </html>
  );
}
