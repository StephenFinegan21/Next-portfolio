import { FaLink } from "react-icons/fa";

type Project = {
  project: {
    id: number;
    title: string;
    description: string;
    link: string;
    displayLink: string
  };
};

export default function ProjectCard(props: Project) {
  const { title, description, link, displayLink } = props.project;


  return (
    <>
      <div className="flex flex-col justify-center mt-6">
        <h3 className="text-lg md:text-2xl font-semibold  text-zinc-100">
          {title}
        </h3>
        <p className=" text-sm md:text-lg text-zinc-400">{description}</p>
        <div className="flex align-middle text-sm md:text-lg text-cyan-400 py-4 gap-4">
          <a href={link}>{displayLink}</a>
          <FaLink />
        </div>
      </div>
    </>
  );
}
