;
import "../styles/globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Inter, Space_Grotesk, Space_Mono, DM_Sans } from "next/font/google";
import { Providers } from "./providers/Provider";
import type { Metadata } from 'next'

/*
const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight : ['400', '700'],
  subsets: ["latin"],
})
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight : ['400', '700'],
  subsets: ["latin"],
})
*/

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Stephen Finegan - Web Dev',
  description: 'Portfolio site - Stephen Finegan, Dublin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
     <title>Stephen Finegan - Web Dev</title>
     <meta></meta>
      <head />

      <body>
        <Providers>
          <main className={`min-h-screen  max-w-screen overflow-hidden  w-full  ${dmSans.className}  bg-zinc-200/20 dark:bg-zinc-900 antialiased transition-all`}>
            <div className=" flex flex-col justify-center px-8 sm:px-12  ">
              <Navigation />
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
