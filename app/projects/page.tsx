import { Inter } from 'next/font/google'
import Projects from "../sections/Projects";


const inter = Inter({ subsets: ["latin"] });

export default function ProjectsPage() {
  return (
    <div className='w-full md:w-4/5 lg:w-3/5 mx-auto'>
    <Projects />
    </div>
  );
}
