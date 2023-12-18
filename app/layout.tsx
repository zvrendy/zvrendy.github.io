'use client'

import { Sora } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion';

import './globals.css'
import TopLeftImage from '@/components/top-left-image';
import Nav from '@/components/nav';
import Header from '@/components/header';
import Transition from '@/components/transition';
  
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
    <html lang="en">
      <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative}`}>
        <AnimatePresence mode='wait'>
          <motion.div  className='h-full'>
            <Transition/>
            <TopLeftImage />
            <Nav/>
            <Header/>
              {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  )
}
