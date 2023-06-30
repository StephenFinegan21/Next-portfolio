"use client";

import { skills } from "../../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <div className="w-full my-4 dark:bg-zinc-800/20 p-8 bg-zinc-50 rounded-lg grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {skills
          .filter((skill) => skill.category === "language")
          .map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full py-4 md:pt-12 md:pb-2 flex flex-col gap-4"
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
      <div className="w-full my-4 dark:bg-zinc-800/20 p-8 bg-zinc-50 rounded-lg grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {skills
          .filter((skill) => skill.category === "framework")
          .map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full py-4 md:pt-12 md:pb-2 flex flex-col gap-4"
            >
              <img
                className="w-6 col-span-1 filter brightness-[100%]"
                src={skill.image}
                alt={skill.name}
              />
              <p className="dark:text-white col-span-4 text-sm">{skill.name}</p>
            </motion.div>
          ))}
      </div>
      <div className="w-full my-4 dark:bg-zinc-800/20 p-8 bg-zinc-50 rounded-lg grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {skills
          .filter((skill) => skill.category === "test")
          .map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full py-4 md:pt-12 md:pb-2 flex flex-col gap-4"
            >
              <img
                className="w-6 col-span-1 filter brightness-[100%]"
                src={skill.image}
                alt={skill.name}
              />
              <p className="dark:text-white col-span-4 text-sm">{skill.name}</p>
            </motion.div>
          ))}
      </div>
      <div className="w-full my-4 dark:bg-zinc-800/20 p-8 bg-zinc-50 rounded-lg grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        {skills
          .filter((skill) => skill.category === "other")
          .map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              viewport={{ once: true }}
              className="w-full py-4 md:pt-12 md:pb-2 flex flex-col gap-4"
            >
              <img
                className="w-6 col-span-1 filter brightness-[100%]"
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
