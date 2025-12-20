import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Prema Labs | Intelligence with a Heartbeat',
  description: 'Building Context-Aware AI that understands emotion, strategy, and human intent.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        <Header />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
