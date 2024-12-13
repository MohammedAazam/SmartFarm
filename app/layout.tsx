import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SmartFarm',
  description: 'A comprehensive solution for managing farm operations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="container mx-auto py-6 px-4">
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}