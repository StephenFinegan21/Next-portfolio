import Hero from "./Hero";
import Features from "./Features";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import CTA from "./CTA";
import Footer from "./Footer";
import Trust from "./Trust";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./styles.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const switzer = localFont({
  src: [
    {
      path: "../../../public/assets/WEB/fonts/Switzer-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../../public/assets/WEB/fonts/Switzer-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
    {
      path: "../../../public/assets/WEB/fonts/Switzer-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
  fallback: ["Inter", "sans-serif"],
});

export default function NexusPage() {
  return (
    <div className={`${inter.variable} ${switzer.className}` }>
      <Hero />
      <Features />
     
      <HowItWorks />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}

