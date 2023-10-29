import { projects } from "../../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
 
    return (
        <>
        <div className="flex flex-col  justify-center my-24 text-zinc-900 dark:text-white ">
            <ul>
                {projects.map(project =>
                    <ProjectCard key={project.id} project={project} />
                    )}
            </ul>
            </div>
        </>
    )
}
