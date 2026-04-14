import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://premaailabs.tech/labs'),
  title: {
    default: 'Prema AI Labs | Intelligence with a Heartbeat',
    template: '%s | Prema AI Labs'
  },
  description: 'Building Context-Aware AI that understands emotion, strategy, and human intent. Discover our Products, Research, and App Builder.',
  openGraph: {
    title: 'Prema AI Labs | Intelligence with a Heartbeat',
    description: 'Building Context-Aware AI that understands emotion, strategy, and human intent.',
    url: 'https://premaailabs.tech/labs',
    siteName: 'Prema AI Labs',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Prema AI Labs",
    "url": "https://premaailabs.tech/labs",
    "publisher": {
      "@type": "Organization",
      "name": "Prema AI Labs"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Log In / Sign Up",
        "description": "Access your intelligent AI study companion.",
        "url": "https://premaailabs.tech/"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Prema AI Labs",
        "description": "Research and next-generation AGI infrastructure.",
        "url": "https://premaailabs.tech/labs"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Research",
        "description": "Explore our latest AI capabilities and papers.",
        "url": "https://premaailabs.tech/labs/research"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Products",
        "description": "View our AI products and enterprise solutions.",
        "url": "https://premaailabs.tech/labs/products"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "About Us",
        "description": "Meet the team and discover our mission.",
        "url": "https://premaailabs.tech/labs/about"
      }
    ]
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
