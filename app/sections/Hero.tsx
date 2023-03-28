"use client";
import Socials from "../components/Socials";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div className="w-full md:h-[90vh] flex flex-col  my-24 md:my-0 md:justify-center   mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-7xl">
        Frontend Developer
      </h1>
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-7xl text-left md:relative md:right-2">
        @<span className="text-cyan-400"> Distilled</span>
      </h1>

      <p className="mt-2 text-sm md:text-xl  text-zinc-300 text-left font-inter">
        Frontend developer based in Dublin. Currently working on Daft.ie
      </p>
      <Socials />
    </motion.div>
  );
}
