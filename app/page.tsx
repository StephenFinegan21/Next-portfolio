import { Inter } from "@next/font/google";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    
      <div className="pt-24">
        <Hero />
        <Skills />
      </div>
    </>
  );
}
