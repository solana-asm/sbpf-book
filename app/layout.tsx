import './global.css';
import type { Viewport } from 'next';
import type { ReactNode } from 'react';
import { Geist, JetBrains_Mono } from 'next/font/google';
import { NextProvider } from 'fumadocs-core/framework/next';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { Provider } from './provider';

export const metadata = createMetadata({
  title: {
    template: '%s | The sBPF Programming Book',
    default: 'The sBPF Programming Book',
  },
  description: 'Patterns and idioms for writing Solana programs in pure assembly.',
  metadataBase: baseUrl,
});

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#0B0E14',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <NextProvider>
          <Provider>{children}</Provider>
        </NextProvider>
      </body>
    </html>
  );
}
