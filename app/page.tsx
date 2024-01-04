import { Inter } from 'next/font/google'
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from './sections/Projects';
import Contact from './components/Contact';


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
      <div className="w-full md:w-4/5 lg:w-3/5 mx-auto">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
