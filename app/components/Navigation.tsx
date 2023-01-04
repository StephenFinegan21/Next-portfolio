"use client";

import Link from "next/link";
import { Popover } from "@headlessui/react";
import { IoMenuSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    closed: {
      opacity: 0.6,
      x: 500,
      transition: { type: "spring", duration: 1 },
    },
  };

  const links = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];

  const path = usePathname();
  return (
    <>
      <div className="hidden md:flex gap-4 w-full justify-end items-center">
      {links.map((link) => (
              <>
                <Link
                  href={link.href}
                  className={`"w-full py-1  text-right text-white border-y-1" ${
                    path === link.href ? "text-emerald-400" : ""
                  }`}
                >
                  {link.name}
                </Link>
                <div className="bg-zinc-700 h-px"></div>
              </>
            ))}
      </div>
      <div className="md:hidden relative flex  text-white py-4 w-full justify-end">
        <button
          className="text-white text-2xl"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <IoMenuSharp />
        </button>
      </div>

      <motion.div
        className="fixed top-8 right-4 w-48 p-8 rounded-md z-10 ring-1 bg-zinc-900 ring-zinc-600"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div>
          <IoCloseSharp
            className="absolute top-2 right-2 text-white cursor-pointer text-xl"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          ></IoCloseSharp>
          <div className=" text-white  flex flex-col ">
            {links.map((link) => (
              <>
                <Link
                  href={link.href}
                  className={`"w-full py-1  text-right text-white border-y-1" ${
                    path === link.href ? "text-emerald-400" : ""
                  }`}
                >
                  {link.name}
                </Link>
                <div className="bg-zinc-700 h-px"></div>
              </>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
