import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smpl Co – Prototype Fast, Build Smart Digital Products, Launch in Weeks",
  description: "Smpl Co helps startups and enterprises prototype and build smart digital products in weeks using AI and no‑code tools, reducing risk and cost while accelerating growth.",
  keywords: "prototype, digital products, AI development, no-code, startup, enterprise, MVP",
  authors: [{ name: "Smpl Co" }],
  openGraph: {
    title: "Smpl Co – Prototype Fast, Build Smart Digital Products, Launch in Weeks",
    description: "Smpl Co helps startups and enterprises prototype and build smart digital products in weeks using AI and no‑code tools, reducing risk and cost while accelerating growth.",
    images: [
      {
        url: "https://framerusercontent.com/assets/cv7kZxI7awqP4xPAMEKaVV1Ql8.png",
        width: 1200,
        height: 630,
        alt: "Smpl Co - Digital Product Development"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smpl Co – Prototype Fast, Build Smart Digital Products, Launch in Weeks",
    description: "Smpl Co helps startups and enterprises prototype and build smart digital products in weeks using AI and no‑code tools, reducing risk and cost while accelerating growth.",
    images: ["https://framerusercontent.com/assets/cv7kZxI7awqP4xPAMEKaVV1Ql8.png"],
  },
  icons: {
    icon: "https://framerusercontent.com/images/r2fOEzAvoVhOPskj55yRoLzpL4.png",
    shortcut: "https://framerusercontent.com/images/r2fOEzAvoVhOPskj55yRoLzpL4.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
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
        {children}
      </body>
    </html>
  );
}
