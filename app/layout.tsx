import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'EpyonAI University — Knowledge Made Real',
  description:
    'A virtual nonprofit campus where knowledge is made accessible to all who seek it by adapting technical content into formats real people can understand.',
  keywords: [
    'AI education',
    'workforce development',
    'content adaptation',
    'accessible learning',
    'nonprofit',
    'Atlanta',
    'EpyonAI',
    'library systems',
    'AI skills',
  ],
  authors: [{ name: 'EpyonAI University' }],
  creator: 'EpyonAI University',
  metadataBase: new URL('https://www.epyonai.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.epyonai.org',
    title: 'EpyonAI University — Knowledge Made Real',
    description:
      'A virtual nonprofit campus making technical knowledge accessible to everyone.',
    siteName: 'EpyonAI University',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EpyonAI University — Knowledge Made Real',
    description:
      'A virtual nonprofit campus making technical knowledge accessible to everyone.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
