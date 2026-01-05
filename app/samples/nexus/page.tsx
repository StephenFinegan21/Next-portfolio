import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

export default function NexusPage() {
  return (
    <div style={{ fontFamily: "'Switzer', sans-serif" }}>
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

