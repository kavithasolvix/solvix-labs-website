import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://solvixlabs.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Solvix Labs — Enterprise AI & Data Consulting",
    template: "%s — Solvix Labs",
  },
  description:
    "Solvix Labs helps enterprises design, build, secure, govern, and operate production-ready AI systems — RAG, agents, data platforms, and AI governance.",
  keywords: [
    "enterprise AI consulting",
    "AI governance",
    "RAG consulting",
    "AI agents",
    "data platform consulting",
    "production AI",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Solvix Labs",
    title: "Solvix Labs — Enterprise AI & Data Consulting",
    description:
      "We design, build, secure, govern, and operate production-ready AI systems for the enterprise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvix Labs — Enterprise AI & Data Consulting",
    description:
      "We design, build, secure, govern, and operate production-ready AI systems for the enterprise.",
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Solvix Labs",
  url: siteUrl,
  description:
    "Enterprise AI and data consulting: design, build, secure, govern, and operate production AI systems including RAG, agents, and data platforms.",
  areaServed: "Worldwide",
  knowsAbout: [
    "Retrieval-Augmented Generation",
    "AI Agents",
    "Data Platform Engineering",
    "AI Governance",
    "AI Security",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 bg-ink text-paper px-4 py-2 text-sm"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
