'use client'
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

type Project = {
  project: {
    id: number;
    title: string;
    description: string;
    link: string;
    displayLink: string;
    projectImage: string;
  };
  setCurrent: any

};

export default function ProjectCard(props: Project) {
  const { title, description, link, displayLink, projectImage } = props.project;
  const { setCurrent } = props;

  return (
    <>
      <li className="py-2  rounded-md transition-all flex flex-col justify-center  dark:text-zinc-100 text-zinc-800 "
      onMouseOver={() => setCurrent(projectImage)}>
        <Link
          href={link}
          className="w-full flex flex-col  items-start   justify-between "
          target={"_blank"}
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
