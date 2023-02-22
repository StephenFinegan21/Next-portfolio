"use client";

import { skills } from "../../data/skills";
import { motion } from "framer-motion";


export default function Skills() {


      
  return (
    <>
      <div className="md:h-[80vh] md:flex flex-col items-center justify-center  w-full md:w-2/5 md:mx-auto my-24 md:my-0">
        {skills.map((skill) => (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex w-full  gap-4 items-center py-4  md:pt-12 md:pb-2 text-zinc-100 border-b   border-zinc-300"
          >
            {/*<img className="w-8 col-span-1 filter brightness-[90%]" src={skill.image} />*/}
            <p className="text-white col-span-4 text-lg md:text-4xl md:font-semibold font-archivo">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
