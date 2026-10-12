import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CookieConsentManager } from "@/components/cookies/CookieConsentManager";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Valeadata | Acquisition clients & croissance digitale",
    template: "%s | Valeadata",
  },
  description:
    "Valeadata construit et pilote votre acquisition selon votre modèle : lead generation, e-commerce, marque blanche ou marque propre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <CookieConsentManager />
      </body>
    </html>
  );
}
