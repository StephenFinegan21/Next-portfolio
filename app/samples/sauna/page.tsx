import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Facilities from "./Facilities";
import Footer from "./Footer";
import localFont from "next/font/local";
import type { Metadata } from "next";

const switzer = localFont({
  src: [
    {
      path: "../../../public/assets/WEB/fonts/Switzer-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../../public/assets/WEB/fonts/Switzer-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "The Hot Box Sauna - Recharge Your Body",
  description: "Steam and cold therapy experiences crafted to help you feel your best",
};

export default function SaunaPage() {
  return (
    <div className={switzer.className}>
      <Nav />
      <Hero />
      <About />
      <Facilities />
      <Footer />
    </div>
  );
}

