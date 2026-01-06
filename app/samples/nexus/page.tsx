import Hero from "./Hero";
import Features from "./Features";
import Benefits from "./Benefits";
import HowItWorks from "./HowItWorks";
import CTA from "./CTA";
import Footer from "./Footer";
import Trust from "./Trust";

export default function NexusPage() {
  return (
    <div style={{ fontFamily: "'Switzer', sans-serif" }}>
      <Hero />
      <Features />
     
      <HowItWorks />
      <Trust />
      <CTA />
      <Footer />
    </div>
  );
}

