import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { PromoPopup } from "@/components/layout/promo-popup";

export const metadata: Metadata = {
  title: 'PEHCa Events',
  description: 'Productora de eventos independientes como activaciones de marcas, cenas corporativas, comunicación interna o eventos empresariales.',
  verification: {
    google: 'lRC1xNGGtdD1RfoOIVjokhbfkf8nuUPtr4cXBSOaLDw',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <PromoPopup />
        <Toaster />
      </body>
    </html>
  );
}
