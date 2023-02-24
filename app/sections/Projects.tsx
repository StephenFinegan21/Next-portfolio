import { projects } from "../../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
 
    return (
        <>
        <div className="md:h-[80vh]  md:flex flex-col items-center justify-center my-24 ">
            <h1 className="text-3xl font-bold py-4 tracking-tight text-white sm:text-5xl ">Projects</h1>
            <div>
                {projects.map(project =>
                    <ProjectCard key={project.id} project={project} />
                    )}
            </div>
            </div>
        </>
    )
}
