;
import "../styles/globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import { Providers } from "./providers/Provider";
import type { Metadata } from 'next'


// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

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
    <html lang="en" className={`${inter.variable}`}>
     <title>Stephen Finegan - Web Dev</title>
     <meta></meta>
      <head />

      <body>
        <Providers>
          <main className="min-h-screen  w-full  font-inter  bg-zinc-200/20 dark:bg-zinc-900 antialiased transition-all">
            <div className=" flex flex-col justify-center px-4 sm:px-12  items-center">
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
