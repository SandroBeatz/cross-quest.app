import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from './AppContext';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Умняут',
  description: 'Умняут - интеллектуальная игра в кроссворды',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <AppProvider>
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
