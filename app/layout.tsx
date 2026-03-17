import './globals.css';

import type { Metadata } from 'next';
import { Inter, Syne, DM_Sans } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import AppearanceContextProvider from '@/context/appearance-context';

const inter = Inter({ subsets: ['latin'] });

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Ethmane Didi | Developer Portfolio',
  description:
    'Explore the developer journey of Ethmane Didi through a portfolio showcasing innovative projects and a diverse skill set in web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} ${syne.variable} ${dmSans.variable} bg-gray-50 text-gray-900 relative dark:bg-gray-800 dark:text-gray-200`}
      >
        <AppearanceContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </AppearanceContextProvider>
      </body>
    </html>
  );
}
