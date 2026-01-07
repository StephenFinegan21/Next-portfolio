import Hero from "./Hero";
import Features from "./Features";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import CTA from "./CTA";
import Footer from "./Footer";
import Trust from "./Trust";
import localFont from "next/font/local";

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

export default function NexusPage() {
  return (
    <div className={switzer.className}>
      <Hero />
      <Features />
     
      <HowItWorks />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}

