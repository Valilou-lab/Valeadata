import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingChat } from "@/components/FloatingChat";
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
    default: "Valeadata | Acquisition de leads & Data Automation",
    template: "%s | Valeadata",
  },
  description:
    "Valeadata accompagne les entreprises dans leur acquisition de prospects qualifiés grâce au Double Opt-In, à l'automatisation et à l'intelligence artificielle.",
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
        <FloatingChat />
        <CookieConsentManager />
      </body>
    </html>
  );
}
