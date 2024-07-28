import { Merriweather } from 'next/font/google';
import Header from '@/components/header';
import './globals.css';

const merriweather = Merriweather({
  weight: ['300', '400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={merriweather.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
