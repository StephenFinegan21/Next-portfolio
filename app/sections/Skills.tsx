"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="flex  flex-col h-[90vh] sm:h-screen gap-8 relative w-full justify-center items-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        animate={{ rotate: 360 }}
        transition={{ type: "spring", repeatType:"loop", repeatDelay:1.2,  duration: 1, repeat: Infinity }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </motion.svg>

      <div className="w-full max-w-full  gap-y-12 grid sm:grid-cols-3 items-stretch justify-between    ">
        <div>
          <h2 className="text-sm  text-gray-800 dark:text-gray-300 leading-8 sm:leading-10 ">
            Skills
          </h2>
          <ul className="text-sm sm:text-base font-medium leading-8 sm:leading-10 ">
            <li>React</li>
            <li>Next</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Tailwind</li>
            <li>Astro</li>
          </ul>
        </div>

        <div className="text-right sm:text-left ">
          <h2 className="text-sm text-gray-800 dark:text-gray-300 leading-8 sm:leading-10 ">
            Tools
          </h2>
          <ul className="text-sm sm:text-base  font-medium leading-8 sm:leading-10 ">
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>

        <div className="col-span-2 row-start-2 sm:col-auto sm:row-auto">
          <h2 className="text-sm text-gray-800 dark:text-gray-300 leading-8 sm:leading-10">
            Education
          </h2>
          <ul className="text-sm sm:text-base  font-medium leading-8 sm:leading-10">
            <li>National College of Ireland</li>
            <li>Dublin Institute of Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
{
}
