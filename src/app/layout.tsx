import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "SmplCo – 5-Day Prototypes & AI-Powered Product Development",
    template: "%s | SmplCo",
  },
  description:
    "SmplCo helps startups and enterprises prototype and build smart digital products in weeks using AI and no-code tools.",
  keywords:
    "prototype, digital products, AI development, no-code, startup, enterprise, MVP, vibecoding",
  authors: [{ name: "SmplCo" }],
  metadataBase: new URL("https://smpl.as"),
  openGraph: {
    title: "SmplCo – 5-Day Prototypes & AI-Powered Product Development",
    description:
      "SmplCo helps startups and enterprises prototype and build smart digital products in weeks using AI and no-code tools.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "SmplCo - Digital Product Development",
      },
    ],
    type: "website",
    siteName: "SmplCo",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmplCo – 5-Day Prototypes & AI-Powered Product Development",
    description:
      "SmplCo helps startups and enterprises prototype and build smart digital products in weeks.",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'google4755c9d54d5d026e',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VZZ9X48SZL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VZZ9X48SZL');
          `}
        </Script>
        <OrganizationJsonLd />
        <Navigation />
        <main className="pt-[60px] md:pt-[56px]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
