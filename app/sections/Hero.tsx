"use client";
import Socials from "../components/Socials";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div className="w-full  flex flex-col text-zinc-900 dark:text-white bg-white/50 dark:bg-zinc-800/30 p-4 rounded-md">
      <h1 className="text-lg font-medium  ">
        Stephen Finegan
      </h1>
      <h2 className="text-lg font-regular ">
        Frontend developer based in Dublin
      </h2>
      <h2 className="text-lg font-regular   ">
        Working @ Distilled on Daft.ie
      </h2>

     
      <Socials />
    </motion.div>
  );
}
