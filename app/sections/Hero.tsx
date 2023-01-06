'use client'
import Socials from "../components/Socials"
import { motion, useMotionValue, useTransform } from 'framer-motion'


export default function Hero() {

  


    return (
        <motion.div
         className="w-full my-12 flex flex-col justify-center md:w-3/5 md:justify-start">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-5xl">Frontend Developer</h1>
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-5xl">@ Distilled</h1>

        <p className="mt-6 text-base text-zinc-400">
            I’m a frontend developer based in Dublin. Currently working on the Daft.ie platform at Distilled.
            </p>
            <Socials />
        </motion.div>
    )
}