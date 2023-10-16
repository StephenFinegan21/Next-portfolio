"use client";
import "../styles/globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { Inter } from 'next/font/google'
import { Providers } from "./providers/Provider";
import ThemeChanger from "./components/ThemeChanger";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // If loading a variable font, you don't need to specify the font weight

  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Providers>
          <main className="min-h-screen  w-full  font-inter  bg-zinc-100 dark:bg-zinc-900">
            <div className="w-full md:w-3/5 lg:w-2/5 mx-auto flex flex-col justify-center p-4">
              <div className="text-zinc-900 dark:text-white gap-8 top-8 fixed flex items-center z-20 ">
                <Navigation />
                <ThemeChanger />
              </div>
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
