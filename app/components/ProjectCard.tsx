import Socials from "./Socials";

export default function ProjectCard(props :any) {
  const {title, description } = props.project;
 console.log('test',props)

  return (
    <>
      <div className="flex flex-col justify-center mt-6">
        <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400">{description}</p>
        <Socials />
      </div>
    </>
  );
}