import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      <div className="flex flex-row text-zinc-800 dark:text-white  py-4   my-4">
       <Link  href={'https://www.linkedin.com/in/stephen-finegan-905b391b3/'} aria-label="Linkedin"> <FaLinkedin className="mr-4 text-2xl hover:scale-110 transition-all	" /> </Link>
       <Link href={'https://github.com/StephenFinegan21'} aria-label="Github"> <FaGithub className="mr-4 text-2xl hover:scale-110 transition-all" /></Link>
      </div>
    </>
  );
}
