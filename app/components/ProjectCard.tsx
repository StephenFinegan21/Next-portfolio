import { FaLink } from "react-icons/fa";
import Link from "next/link";

type Project = {
  project: {
    id: number;
    title: string;
    description: string;
    link: string;
    displayLink: string;
  };
};

export default function ProjectCard(props: Project) {
  const { title, description, link, displayLink } = props.project;

  return (
    <>
      <div className="flex flex-col justify-center mt-6 text-zinc-100">
       
          <Link href={link} className="flex gap-4 hover:underline items-center ">
            <h3 className="text-lg  font-regular ">{title}</h3>
            <FaLink className="hover:scale-110 transition-all"/>
          </Link>
        
        <p className=" text-sm  text-zinc-400">{description}</p>
      </div>
    </>
  );
}
