"use client";
import "../styles/globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import { Providers } from "./providers/Provider";

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
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Providers>
          <main className="min-h-screen  w-full  font-inter  bg-zinc-100 dark:bg-zinc-900 antialiased transition-colors">
            <div className=" flex flex-col justify-center p-4 items-center">
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
