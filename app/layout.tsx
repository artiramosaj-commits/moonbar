import type { Metadata } from 'next';
import { Playfair_Display, Montserrat, Great_Vibes } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MoonBar | Premium Outdoor Lounge Bar in Pejë, Kosovo',
  description: 'Experience the heart of summer nights at MoonBar. Premium cocktails, shisha, live music, and DJs in an stunning outdoor setting. Located in Pejë, Kosovo.',
  keywords: 'MoonBar, lounge bar, Pejë, Kosovo, cocktails, shisha, nightlife, DJ, live music, outdoor bar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}