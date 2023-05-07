import { projects } from "../../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
 
    return (
        <>
        <div className="flex flex-col  justify-center my-24  ">
            <h1 className="text-lg font-medium py-4 tracking-tight text-white  ">Projects</h1>
            <div>
                {projects.map(project =>
                    <ProjectCard key={project.id} project={project} />
                    )}
            </div>
            </div>
        </>
    )
}
