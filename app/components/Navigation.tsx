"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navigation() {
  const [activeLink, setActiveLink] = useState(0);

  const handleSetActiveLink = (index:number) => {
    setActiveLink(index);
  };

  return (
    <ul className="flex mx-auto gap-4 lg:gap-8 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
      <li>
        <div
          className={`nav-link-wrapper ${activeLink === 0 ? "active" : ""}`}
          onClick={() => handleSetActiveLink(0)}
        >
          <Link href="/">About</Link>
        </div>
      </li>
      <li>
        <div
          className={`nav-link-wrapper ${activeLink === 1 ? "active" : ""}`}
          onClick={() => handleSetActiveLink(1)}
        >
          <Link href="/notes">Notes</Link>
        </div>
      </li>
      <li>
        <div
          className={`nav-link-wrapper ${activeLink === 2 ? "active" : ""}`}
          onClick={() => handleSetActiveLink(2)}
        >
          <Link href="/projects">Projects</Link>
        </div>
      </li>
    </ul>
  );
}
