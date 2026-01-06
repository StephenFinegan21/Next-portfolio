import "./styles.css";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Facilities from "./Facilities";
import Footer from "./Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export default function SaunaPage() {
  return (
    <div className={inter.variable} style={{ fontFamily: "'Switzer', 'Inter', sans-serif" }}>
      <Nav />
      <Hero />
      <About />
      <Facilities />
      <Footer />
    </div>
  );
}

