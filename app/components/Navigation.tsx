"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import ThemeChanger from "./ThemeChanger";

export default function Navigation() {
  const [activeLink, setActiveLink] = useState<number>();
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
  ];
  const pathname = usePathname();

  return (
    <nav className="fixed top-8  w-full md:w-4/5 lg:w-3/5 flex justify-between items-center gap-4 lg:gap-8  px-4 sm:px-2">
      <ul className="flex gap-4 bg-white/90 px-4 py-2 text-sm rounded-full font-medium text-zinc-800 shadow-lg roun shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navLinks.map((link) => {
          const isActive = pathname && pathname === link.href;

          return (
            <Link
              className={` ${
                isActive
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-700 dark:text-zinc-400"
              } `}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <ThemeChanger />
    </nav>
  );
}
