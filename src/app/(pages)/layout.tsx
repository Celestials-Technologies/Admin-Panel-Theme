import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import {
  header,
  sideMenusBody,
  sideMenusFooter,
} from '../components/sidebar/sidebarMocks';

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
    <html lang="en">
      <body>
        {' '}
        <div className="layout">
          <Navbar />
          <Sidebar
            header={header}
            menuBody={sideMenusBody}
            menuFooter={sideMenusFooter}
          />

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
