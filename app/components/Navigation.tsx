"use client";

import Link from "next/link";


export default function Navigation() {
  return (
    <>
      <ul className="flex  mx-auto gap-4 lg:gap-8 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <li><Link href="/">About</Link></li>
        <li><Link href="/notes">Notes</Link></li>
        <li><Link href="/projects">Projects</Link></li>
      </ul>
    </>
  );
}
