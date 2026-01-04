import "./sauna/styles.css";
import Hero from "./sauna/Hero";
import Nav from "./sauna/Nav";
import About from "./sauna/About";
import Facilities from "./sauna/Facilities";
import Footer from "./sauna/Footer";

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

