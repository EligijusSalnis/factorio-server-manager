import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/layout/ThemeToggle/theme-provider';
import NextTopLoader from 'nextjs-toploader';
import SystemInfo from '@/components/system-info';
import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import PageContainer from '@/components/layout/page-container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} overflow-hidden `}>
        <NextTopLoader showSpinner={false} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageContainer>
            <div className="flex flex-1 flex-col space-y-2">
              <div className="flex items-center justify-between space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Hi, Welcome back 👋
                </h2>
                <ThemeToggle />
              </div>
              <div className="grid  md:grid-cols-1 lg:grid-cols-1">
                <SystemInfo type="all" />
              </div>
              {children}
            </div>
          </PageContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
