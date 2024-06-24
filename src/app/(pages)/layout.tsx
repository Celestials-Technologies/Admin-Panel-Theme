import type { Metadata } from 'next';
import '@/app/globals.css';
import Sidebar from '../components/sidebar';
import {
  header,
  sideMenusBody,
  sideMenusFooter,
} from '../components/sidebar/sidebarMocks';
import Navbar from '../components/navbar';

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
            showSearchBar={true}
          />

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
