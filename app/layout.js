import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Isaac Lal | Portfolio',
  description:
    'Welcome to my Software Engineer portfolio! My portfolio showcases all of my skills that I have learned in my journey of coding. I hope you enjoy!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
