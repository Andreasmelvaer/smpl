import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Smpl Co – Prototype Fast, Build Smart Digital Products, Launch in Weeks",
    template: "%s | Smpl Co",
  },
  description:
    "Smpl Co helps startups and enterprises prototype and build smart digital products in weeks using AI and no‑code tools, reducing risk and cost while accelerating growth.",
  keywords:
    "prototype, digital products, AI development, no-code, startup, enterprise, MVP, vibecoding",
  authors: [{ name: "Smpl Co" }],
  metadataBase: new URL("https://smpl.as"),
  openGraph: {
    title: "Smpl Co – Prototype Fast, Build Smart Digital Products, Launch in Weeks",
    description:
      "Smpl Co helps startups and enterprises prototype and build smart digital products in weeks using AI and no‑code tools, reducing risk and cost while accelerating growth.",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Smpl Co - Digital Product Development",
      },
    ],
    type: "website",
    siteName: "Smpl Co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smpl Co – Prototype Fast, Build Smart Digital Products, Launch in Weeks",
    description:
      "Smpl Co helps startups and enterprises prototype and build smart digital products in weeks.",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
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
    <html lang="en">
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
        <Navigation />
        <main className="pt-[60px] md:pt-[56px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
