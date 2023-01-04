'use client'

import { skills } from "../../data/skills"
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Skills() {
    return (
        <>
        <div  className="mt-12">
            {skills.map(skill =>
                <motion.div
                initial={{ opacity: 0 , x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                 className="flex w-full gap-4 items-center my-8">
                     <img className="w-8 col-span-1" src={skill.image} />
                    <p className="text-white col-span-4">{skill.name}</p>
                   
                </motion.div>  )}
        </div>
        </>
    )
}