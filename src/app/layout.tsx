import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "variable"
});

export const metadata: Metadata = {
  title: "Gamepedia - Descubra Jogos Incríveis.",
  description: "Sua Fonte Completa de Descrições dos Melhores Games",
  keywords: [
    "games", "red dead redemption", "videogames", "ps4,", "jogos", "steam", "xbox",
    "epic games", "jogos online", "console"
  ],
  openGraph: {
    images: [
      "http://localhost:3000"
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.className} antialiased
        h-screen w-full bg-black bg-grid-small-white/[0.20] relative flex items-center justify-center
        `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
