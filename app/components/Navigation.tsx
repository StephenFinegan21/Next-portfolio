"use client";

import { usePathname } from "next/navigation";
import ThemeChanger from "./ThemeChanger";

export default function Navigation() {
  const pathname = usePathname();
  
  // Hide navigation (and theme toggle) on /samples pages
  if (pathname.startsWith("/samples")) {
    return null;
  }

  const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Samples", href: "/samples" },
  ];

  return (
    <nav className="fixed z-50  top-4 left-1/2 transform -translate-x-1/2 sm:-translate-x-0 sm:top-1/2 sm:left-4  transition-all px-4 sm:px-2">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
        <ThemeChanger />
        <div className="flex gap-4 sm:flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
