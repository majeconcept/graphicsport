import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Graphic Sport — Marquage textile dans le Haut-Rhin",
  description:
    "Graphic Sport, spécialiste du marquage textile haut de gamme à Wittelsheim (Haut-Rhin). Broderie, sérigraphie, transfert sérigraphique, DTF et flex pour professionnels et associations.",
  openGraph: {
    title: "Graphic Sport — Marquage textile dans le Haut-Rhin",
    description:
      "Spécialiste du marquage textile haut de gamme : broderie, sérigraphie, DTF, flex et transfert sérigraphique.",
    locale: "fr_FR",
    type: "website",
    // [[INSÉRER URL OG:IMAGE]]
  },
  metadataBase: new URL("https://www.graphicsport.fr"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Graphic Sport",
  description:
    "Spécialiste du marquage textile haut de gamme : broderie, sérigraphie, transfert sérigraphique, DTF et flex.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 rue Alfred-Kastler",
    addressLocality: "Wittelsheim",
    postalCode: "68310",
    addressRegion: "Haut-Rhin",
    addressCountry: "FR",
  },
  telephone: "+33389662641",
  email: "contact@graphicsport.fr",
  url: "https://www.graphicsport.fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
