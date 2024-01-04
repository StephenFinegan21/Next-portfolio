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
      <li className="py-2  rounded-md transition-all flex flex-col justify-center  dark:text-zinc-100 text-zinc-800 ">
        <Link
          href={link}
          className="w-full flex flex-col sm:flex-row items-start  sm:items-center justify-between "
        >
          <span className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-300 dark:hover:text-white hover:text-zinc-900 hover:underline transition-all underline-offset-2 ">{title}</span>
          <p className=" text-sm text-zinc-700 dark:text-zinc-400">
            {description}
          </p>
        </Link>
      </li>
    </>
  );
}
