import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ReservationProvider } from '@/context/ReservationContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { ReservationModal } from '@/components/reservation/ReservationModal';
import { getRestaurantJsonLd } from '@/lib/seo';
import { RESTAURANT_DATA } from '@/data/restaurant';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${RESTAURANT_DATA.brand.fullName} | Luxury Dining & Gourmet Gastronomy`,
  description: `${RESTAURANT_DATA.brand.fullName} - ${RESTAURANT_DATA.brand.heroTagline}. Serving happiness on a plate. Reserve your table for artisanal fine dining, intimate ambiance, and memorable culinary moments.`,
  keywords: [
    'Miilaano Fine Dine',
    'Miilaano Restaurant',
    'fine dining restaurant',
    'luxury restaurant',
    'gourmet dining',
    'table reservation',
    'best dinner restaurant',
    'private dining',
  ],
  authors: [{ name: 'MIILAANO Fine Dine' }],
  creator: 'MIILAANO Fine Dine',
  metadataBase: new URL('https://miilaanofinedine.com'),
  openGraph: {
    title: `${RESTAURANT_DATA.brand.fullName} | Luxury Dining Experience`,
    description: `${RESTAURANT_DATA.brand.heroTagline} Experience elevated gastronomy, intimate ambiance, and effortless hospitality.`,
    url: 'https://miilaanofinedine.com',
    siteName: RESTAURANT_DATA.brand.fullName,
    images: [
      {
        url: '/images/hero-dining.jpg',
        width: 1200,
        height: 630,
        alt: 'MIILAANO Fine Dine Ambience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${RESTAURANT_DATA.brand.fullName} | Fine Dining`,
    description: RESTAURANT_DATA.brand.heroTagline,
    images: ['/images/hero-dining.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getRestaurantJsonLd();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth antialiased bg-[#090A09] text-[#FAF8F5]`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090A09] text-[#FAF8F5] selection:bg-[#244B3A] selection:text-[#FAF8F5]">
        <ReservationProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileActionBar />
          <ReservationModal />
        </ReservationProvider>
      </body>
    </html>
  );
}
