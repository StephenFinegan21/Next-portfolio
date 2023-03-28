import { Inter } from "@next/font/google";
import Hero from "./sections/Hero";
import History from "./sections/History";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return(
    <>
  <Hero />
  <History />
  <Projects />
  
  
  </>
  ) 
}
