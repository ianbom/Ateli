import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.fullBrandName} — ${siteConfig.descriptor}`,
  description: siteConfig.metaDescription,
  keywords: [
    "interior architecture",
    "spatial design",
    "luxury interior design",
    "contemporary architecture",
    "minimalist interiors",
    "Adrian Vale",
    "NOIREL STUDIO",
  ],
  openGraph: {
    title: `${siteConfig.fullBrandName} — ${siteConfig.descriptor}`,
    description: siteConfig.metaDescription,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F2F0EB]">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
