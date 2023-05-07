"use client";
import Socials from "../components/Socials";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div className="w-full  flex flex-col ">
      <h1 className="text-lg font-medium text-white ">
        Stephen Finegan
      </h1>
      <h2 className="text-lg font-regular  text-white ">
        Frontend developer based in Dublin
      </h2>
      <h2 className="text-lg font-regular  text-white ">
        Working @ Distilled on Daft.ie
      </h2>

     
      <Socials />
    </motion.div>
  );
}
