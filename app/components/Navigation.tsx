'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

import { useState } from "react";


export default function Navigation() {
  const [activeLink, setActiveLink] = useState<number>();
  const navLinks = [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
  ];
  const pathname = usePathname()
  console.log(pathname)
  console.log(activeLink)

  const handleSetActiveLink = (index:number) => {
    setActiveLink(index);
  };

  return (
    <ul className="flex mx-auto gap-4 lg:gap-8 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
    {navLinks.map((link) => {
        const isActive = pathname && pathname === link.href
 
        return (
          <Link
            className={isActive ? 'underline' : ' '}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </ul>
  );
}
