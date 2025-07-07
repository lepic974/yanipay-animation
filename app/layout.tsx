import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "YaniPay - Super-app financière innovante",
  description: "YaniPay révolutionne les paiements avec sa carte innovante, son programme de fidélité et sa crypto-monnaie YaniCoin. Rejoignez l'avenir des transactions financières.",
  keywords: "YaniPay, paiement, carte bancaire, fidélité, crypto-monnaie, YaniCoin, fintech, innovation financière",
  authors: [{ name: "YaniPay Team" }],
  creator: "YaniPay",
  publisher: "YaniPay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yanipay.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "YaniPay - Super-app financière innovante",
    description: "Découvrez YaniPay, la révolution des paiements avec carte innovante, programme de fidélité et crypto-monnaie YaniCoin.",
    url: "https://yanipay.com",
    siteName: "YaniPay",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YaniPay - Super-app financière",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YaniPay - Super-app financière innovante",
    description: "Révolutionnez vos paiements avec YaniPay : carte innovante, fidélité et YaniCoin.",
    images: ["/twitter-image.jpg"],
    creator: "@yanipay",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}