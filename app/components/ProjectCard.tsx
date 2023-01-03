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
  console.log("test", props);

  return (
    <>
      <div className="flex flex-col justify-center mt-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
          {title}
        </h3>
        <p className=" text-base text-zinc-400">{description}</p>
        <div className="flex align-middle text-emerald-400 text-base py-4 gap-4">
          <a href={link}>{displayLink}</a>
          <FaLink />
        </div>
      </div>
    </>
  );
}
