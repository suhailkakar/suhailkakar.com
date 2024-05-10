import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://suhailkakar.com'),
  title: {
    default: 'Suhail Kakar',
    template: '%s | Suhail Kakar',
  },
  description: 'Developer and writer.',
  openGraph: {
    title: 'Suhail Kakar',
    description: 'Developer and writer.',
    url: 'https://suhailkakar.com',
    siteName: 'Suhail Kakar',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Suhail Kakar',
    card: 'summary_large_image',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
