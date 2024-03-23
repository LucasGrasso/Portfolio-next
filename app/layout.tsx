import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { Person, WithContext } from "schema-dts";


export const metadata: Metadata = {
  title: "Lucas Grasso Ramos",
  description: "Welcome to LucasGrasso's portfolio",
  keywords: "Lucas Grasso, Lucas Grasso Ramos, portfolio, blockchain developer, web developer, software engineer, backend developer",
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
        <meta name="og:url" content="https://lucasgrasso.com.ar/" />
        <meta name="og:title" content="Lucas Grasso Ramos" />
        <meta name="og:description" content="Welcome to LucasGrasso's portfolio" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
