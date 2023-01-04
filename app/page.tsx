import { Inter } from "@next/font/google";
import Hero from "./sections/Hero";
import History from "./sections/History";
import Skills from "./sections/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return(
    <>
  <Hero />
  <History />
  <Skills />
  
  
  </>
  ) 
}
