import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Rajaram Lab | Ohio State University",
    template: "%s | Rajaram Lab",
  },
  description:
    "The laboratory of Murugesan Rajaram, PhD, FAHA — researching cardiac dysfunction during infection and Mycobacterium tuberculosis pathogenesis at The Ohio State University College of Medicine.",
  keywords: [
    "Rajaram Lab",
    "Murugesan Rajaram",
    "Ohio State University",
    "cardiac macrophages",
    "tuberculosis",
    "innate immunity",
    "heart failure",
    "microbial infection",
    "Pseudomonas aeruginosa",
    "FAHA",
  ],
  authors: [{ name: "Murugesan Rajaram, PhD, FAHA" }],
  openGraph: {
    title: "Rajaram Lab | Ohio State University",
    description:
      "Researching cardiac dysfunction during infection and M. tuberculosis pathogenesis at The Ohio State University College of Medicine.",
    url: "https://rajaramlab.org",
    siteName: "Rajaram Lab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajaram Lab | Ohio State University",
    description:
      "Researching cardiac dysfunction during infection and M. tuberculosis pathogenesis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#BB0000" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
