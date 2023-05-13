import { Inter } from "@next/font/google";
import Hero from "./sections/Hero";
import History from "./sections/History";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import ThemeChanger from "./components/ThemeChanger";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return(
    <>
  <div className="text-zinc-900 dark:text-white h-24">
  <ThemeChanger />
  </div>
  <Hero />
  <Projects />
  
  
  </>
  ) 
}
