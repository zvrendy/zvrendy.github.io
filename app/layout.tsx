
import { Sora } from 'next/font/google'
import { Metadata } from 'next';

import './globals.css'
import TopLeftImage from '@/components/top-left-image';
import Nav from '@/components/nav';
import Header from '@/components/header';
import MotionProvider from '@/components/providers/motion-provider';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/madfento.png",
      href: "/madfento.png"
    }
  ]
};

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`page bg-site text-white bg-white dark:bg-[#313338] bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
          <MotionProvider>

              <TopLeftImage />
              <Nav/>
              <Header/>
                {children}
          </MotionProvider>
      </body>
    </html>
  )
}
