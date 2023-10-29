"use client";
import Socials from "../components/Socials";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div className="w-full  flex flex-col text-zinc-900 dark:text-white bg-white/50 dark:bg-zinc-800/30 p-4 rounded-md">
      <h1 className="text-lg font-medium  ">
        Stephen Finegan
      </h1>
      <h2 className="text-sm font-regular text-zinc-700 dark:text-zinc-100 ">
        Frontend developer based in Dublin
      </h2>
      <h2 className="text-sm font-regular text-zinc-700 dark:text-zinc-100  ">
        Working @ Distilled on Daft.ie
      </h2>

     
      <Socials />
    </motion.div>
  );
}
