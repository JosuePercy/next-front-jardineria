import type { Metadata } from "next";
import { Geist, Geist_Mono, Miriam_Libre,  } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/components/header/Navbar";
import Footer from "./shared/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const MyriadPro = Miriam_Libre({
  variable: "--font-myriad-pro",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Valle del Mantaro - Plantas y Jardinería en Perú",
    template: "%s | Valle del Mantaro",
  },
  description:
    "Venta de plantas, macetas, adornos florales y servicios de jardinería en el Valle del Mantaro. Atención personalizada por WhatsApp.",
  keywords: [
      "venta de plantas en Perú",
      "vivero en Huancayo",
      "jardinería personalizada",
      "comprar macetas online",
      "adornos florales para jardín",
      "Valle del Mantaro vivero"
    ],
  authors: [{ name: "Valle del Mantaro", url: "https://www.viverovalledelmantaro.pe/" }],
  creator: "Valle del Mantaro",
  openGraph: {
    title: "Valle del Mantaro - Plantas y Jardinería en Perú",
    description: "Venta de productos ecológicos y servicios de jardinería. ¡Contáctanos por WhatsApp!",
    url: "https://www.viverovalledelmantaro.pe/",
    siteName: "Valle del Mantaro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Valle del Mantaro - Plantas y Jardinería",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MyriadPro.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
