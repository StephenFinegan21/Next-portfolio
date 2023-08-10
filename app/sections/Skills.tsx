"use client";

import { skills } from "../../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <div className="w-full my-4 gap-2 rounded-lg grid grid-cols-2 bg-white/50 dark:bg-zinc-800/30  ">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            viewport={{ once: true }}
            className=" p-4 w-full  flex  items-center justify-start text-center gap-2  rounded-lg "
          >
            <div className="w-4  sm:w-6 flex justify-center items-center">
            <img
              className="w-full filter brightness-[100%]"
              src={skill.image}
              alt={skill.name}
            />
            </div>
            <p className="dark:text-white col-span-4 text-sm text-left">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
