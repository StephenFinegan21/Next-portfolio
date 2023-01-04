import { skills } from "../../data/skills"
export default function Skills() {
    return (
        <>
        <div className="mt-12">
            {skills.map(skill =>
                <div className="flex w-full gap-4 items-center my-4">
                     <img className="w-8 col-span-1" src={skill.image} />
                    <p className="text-white col-span-4">{skill.name}</p>
                   
                </div>  )}
        </div>
        </>
    )
}