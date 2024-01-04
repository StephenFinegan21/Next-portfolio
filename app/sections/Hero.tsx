"use client";
import Socials from "../components/Socials";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div className="w-full h-[80vh] flex flex-col  items-center justify-center text-zinc-900 dark:text-white rounded-md relative">
      <span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
          viewBox="0 0 51 45"
          version="1.1"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
        >
          <path

            fill="#43e576"
            d="M50.3 22.4c0 4.2-4.6 7.2-6.5 10.6-2 3.5-2.4 9-5.9 11-3.4 2-8.3-.4-12.5-.4-4.2 0-9.1 2.3-12.5.4C9.4 42 9 36.5 7 33 5 29.6.5 26.6.5 22.4c0-4.2 4.6-7.2 6.5-10.6 2-3.5 2.4-8.9 5.9-11 3.4-2 8.3.4 12.5.4 4.2 0 9.1-2.3 12.5-.4 3.5 2 3.9 7.5 5.9 11 2 3.4 6.5 6.4 6.5 10.6Z"
          ></path>
        </motion.svg>
      </span>
      <h1 className="text-lg sm:text-2xl font-medium text-center mt-8">
        Hey, I’m Stephen Finegan, a Software Developer currently based in
        Dublin, Ireland.
      </h1>
      <>
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 50, 0],
          }}
          transition={{ type: "spring", duration: 6, repeat: Infinity }}
          className="w-6 h-6 top-12 left-12 absolute border-white bg-zinc-900 dark:border-4 rounded-full"
        ></motion.div>
        <motion.div
          animate={{
            x: [120, 0, 120],
            y: [50, 0, 50],
          }}
          transition={{ type: "spring", duration: 4, repeat: Infinity }}
          className="w-4 h-4 top-12 left-12 absolute border-white dark:border-2 bg-zinc-900 rounded-full"
        ></motion.div>
        
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, 70, 0],
            }}
            transition={{ type: "spring", duration: 8, repeat: Infinity }}
            className="bottom-12 left-8  absolute w-8 h-8 border-white bg-zinc-900 dark:border-4 rounded-full"
          ></motion.div>
           <motion.div
            animate={{
              x: [40, 0, 40],
              y: [70, 0, 70],
            }}
            transition={{ type: "spring", duration: 8, repeat: Infinity }}
            className="bottom-12 left-8  absolute w-6 h-6 border-white bg-zinc-900 dark:border-2 rounded-full"
          ></motion.div>

        

          <motion.div
            animate={{
              x: [0, 110, 0],
              y: [0, 80, 0],
            }}
            transition={{ type: "spring", duration: 7, repeat: Infinity }}
            className="top-2/3 right-16   absolute w-8 h-8 border-white bg-zinc-900 dark:border-4 rounded-full"
          ></motion.div>
           <motion.div
            animate={{
              x: [110, 0, 110],
              y: [80, 0, 80],
            }}
            transition={{ type: "spring", duration: 7, repeat: Infinity }}
            className="top-2/3 right-16   absolute w-4 h-4 border-white bg-zinc-900 dark:border-2 rounded-full"
          ></motion.div>
          <motion.div
            animate={{
              x: [80, 0, 80],
              y: [40, 0, 40],
            }}
            transition={{ type: "spring", duration: 7, repeat: Infinity }}
            className="top-2/3 right-16   absolute w-6 h-6 border-white  bg-zinc-900 dark:border-4 rounded-full"
          ></motion.div>

        
      
      </>

      <Socials />
    </motion.div>
  );
}
