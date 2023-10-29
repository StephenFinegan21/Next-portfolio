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
      <li className=" p-4 rounded-md transition-all flex flex-col justify-center  dark:text-zinc-100 text-zinc-800 hover:bg-zinc-700">
        <Link
          href={link}
          className="w-full flex flex-col sm:flex-row items-start  sm:items-center justify-between "
        >
          <span className="text-sm font-medium ">{title}</span>
          <p className=" text-xs dark:text-zinc-400 text-zinc-500">
            {description}
          </p>
        </Link>
      </li>
    </>
  );
}
