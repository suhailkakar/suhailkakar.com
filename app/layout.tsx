import type { Metadata } from "next";
import { Oooh_Baby } from "next/font/google";
import "./globals.css";

const ooohBaby = Oooh_Baby({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-oooh-baby",
});

const siteUrl = "https://suhailkakar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "suhail kakar",
    template: "%s | suhail kakar",
  },
  description:
    "i'm a software engineer and writer. i've spent the last few years building products in crypto, mostly focused on developer tools and infrastructure.",
  keywords: [
    "suhail kakar",
    "software engineer",
    "developer",
    "crypto",
    "web3",
    "blockchain",
    "developer tools",
    "infrastructure",
    "writer",
  ],
  authors: [{ name: "Suhail Kakar", url: siteUrl }],
  creator: "Suhail Kakar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "suhail kakar",
    title: "suhail kakar",
    description:
    "i'm a software engineer and writer. i've spent the last few years building products in crypto, mostly focused on developer tools and infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "suhail kakar",
    description:
    "i'm a software engineer and writer. i've spent the last few years building products in crypto, mostly focused on developer tools and infrastructure.",
    creator: "@SuhailKakar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${ooohBaby.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
