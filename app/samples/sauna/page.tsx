import "./styles.css";
import Hero from "./Hero";
import Nav from "./Nav";
import About from "./About";
import Facilities from "./Facilities";
import Footer from "./Footer";

export default function SaunaPage() {
  return (
    <div style={{ fontFamily: "'Switzer', sans-serif" }}>
      <Nav />
      <Hero />
      <About />
      <Facilities />
      <Footer />
    </div>
  );
}

