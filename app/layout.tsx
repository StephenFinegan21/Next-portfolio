'use client'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import { Inter, Archivo } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  variable: '--font-inter',
  display: 'swap'
});

const archivo = Archivo({
  variable: '--font-archivo',
  display: 'swap'
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


// If loading a variable font, you don't need to specify the font weight

  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <motion.body 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y : 0 }}
      transition={{ delay: 0.2 }}
      className={`bg-zinc-900 p-4  w-4/5 lg:w-3/5 mx-auto font-inter min-h-screen`}>
      <main className='h-screen flex flex-col justify-center'>
      {children}
      </main>
      <Footer />
      </motion.body>
    </html>
  )
}
