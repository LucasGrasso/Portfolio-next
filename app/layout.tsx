import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";


export const metadata: Metadata = {
  title: "Lucas Grasso Ramos",
  description: "Welcome to LucasGrasso's portfolio",
  openGraph: {
    title: "Lucas Grasso Ramos",
    description: "Welcome to LucasGrasso's portfolio",
    url: "https://lucasgrasso.com.ar/",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://lucasgrasso.com.ar/og-hero.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Lucas Grasso Ramos — Blockchain & Full-stack Dev. — ASCII mountain hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Grasso Ramos",
    description: "Welcome to LucasGrasso's portfolio",
    images: [
      {
        url: "https://lucasgrasso.com.ar/og-hero.png",
        alt: "Lucas Grasso Ramos — Blockchain & Full-stack Dev. — ASCII mountain hero",
      },
    ],
  },
  keywords: "Lucas Grasso, Lucas Grasso Ramos, Portfolio, CV, Blockchain developer",
  icons: [
    {
      rel: "icon",
      href: "/favicon.ico",
      url: "https://lucasgrasso.com.ar/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/favicon.ico",
      url: "https://lucasgrasso.com.ar/favicon.ico",
    },
  ],
};

const jsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucas Grasso Ramos",
  sameAs: [
    "https://www.linkedin.com/in/lucas-grasso-ramos/",
    "https://github.com/LucasGrasso"
  ],
  url: "https://lucasgrasso.com.ar"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
