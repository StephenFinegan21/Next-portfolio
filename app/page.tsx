import { Inter } from 'next/font/google'
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
      <div className="pt-24 w-full md:w-3/5 lg:w-2/5 mx-auto">
        <Hero />
        <Skills />
      </div>
    </>
  );
}
