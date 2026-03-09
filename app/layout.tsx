import type { Metadata } from "next";
import { Oooh_Baby } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    default: "Suhail Kakar - Software Engineer",
    template: "%s | Suhail Kakar",
  },
  description:
    "Software engineer exploring the intersection of crypto and AI. Building developer tools and infrastructure. Previously shipped apps used by millions.",
  keywords: [
    "Suhail Kakar",
    "software engineer",
    "developer",
    "crypto",
    "web3",
    "blockchain",
    "ai",
    "ai agents",
    "developer tools",
    "infrastructure",
  ],
  authors: [{ name: "Suhail Kakar", url: siteUrl }],
  creator: "Suhail Kakar",
  publisher: "Suhail Kakar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Suhail Kakar",
    title: "Suhail Kakar - Software Engineer",
    description:
      "Software engineer exploring the intersection of crypto and AI. Building developer tools and infrastructure.",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Suhail Kakar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhail Kakar - Software Engineer",
    description:
      "Software engineer exploring the intersection of crypto and AI. Building developer tools and infrastructure.",
    creator: "@SuhailKakar",
    site: "@SuhailKakar",
    images: [`${siteUrl}/og.png`],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Suhail Kakar",
      description: "Software engineer exploring the intersection of crypto and AI",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Suhail Kakar",
      url: siteUrl,
      image: `${siteUrl}/icon.png`,
      description: "Software engineer exploring the intersection of crypto and AI. Building developer tools and infrastructure.",
      jobTitle: "Software Engineer",
      knowsAbout: ["Crypto", "AI", "Web3", "Blockchain", "Developer Tools", "Infrastructure"],
      sameAs: [
        "https://twitter.com/SuhailKakar",
        "https://github.com/SuhailKakar",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Suhail Kakar",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={` ${ooohBaby.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
