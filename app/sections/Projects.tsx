'use client'
import { projects } from "../../data/projects";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
        <div className="h-[80vh]">
         <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mx-auto"
          animate={{ y: 10 }}
        transition={{ type: "spring", bounce:0.8,  duration: 2, repeat: Infinity }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </motion.svg>
      <div className="flex flex-col  justify-center py-12 text-zinc-900 dark:text-white ">
       

        <ul>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </div>
  );
}
