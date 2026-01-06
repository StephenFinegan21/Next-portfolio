import Hero from "./Hero";
import Features from "./Features";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import CTA from "./CTA";
import Footer from "./Footer";
import Trust from "./Trust";
import { Inter } from "next/font/google";
import "./styles.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export default function NexusPage() {
  return (
    <div className={inter.variable} style={{ fontFamily: "'Switzer', 'Inter', sans-serif" }}>
      <Hero />
      <Features />
     
      <HowItWorks />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}

