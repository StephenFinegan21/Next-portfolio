"use client";

import { skills } from "../../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <div className="w-full my-4 gap-8 rounded-lg grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {skills
          .map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full p-4 md:pt-12 md:pb-2 flex flex-col items-center justify-center text-center gap-4  rounded-lg bg-gradient-to-r dark:from-zinc-800/50 dark:via-zinc-800/30 dark:to-zinc-800/20 from-zinc-100/60 via-zinc-200/30 to-zinc-200/40"
            >
              <img
                className="w-8 col-span-1 filter brightness-[100%]"
                src={skill.image}
                alt={skill.name}
              />
              <p className="dark:text-white col-span-4 text-sm">{skill.name}</p>
            </motion.div>
          ))}
      </div>
     
    </>
  );
}
