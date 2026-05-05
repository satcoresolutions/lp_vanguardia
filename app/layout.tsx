import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/src/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tu-dominio.com"),

  title: {
    default: "Vanguardia | Seasonal Outlet de Moda Premium",
    template: "%s | Vanguardia",
  },

  description:
    "Descubre la colección Seasonal Outlet de Vanguardia. Moda premium con diseño elegante, piezas exclusivas y ofertas por tiempo limitado.",

  keywords: [
    "moda premium",
    "outlet de lujo",
    "ropa elegante",
    "colección temporada",
    "vanguardia ropa",
  ],

  authors: [{ name: "SatCore Solutions" }],
  creator: "SatCore Solutions",

  openGraph: {
    title: "Vanguardia | Seasonal Outlet",
    description:
      "Explora la colección exclusiva de Vanguardia. Diseños premium con estética de lujo.",
    url: "https://tu-dominio.com",
    siteName: "Vanguardia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vanguardia colección premium",
      },
    ],
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vanguardia | Seasonal Outlet",
    description:
      "Descubre la nueva colección premium de Vanguardia.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {children}

        {/* 👇 AQUÍ va el botón flotante */}
        <WhatsAppButton />

      </body>
    </html>
  );
}