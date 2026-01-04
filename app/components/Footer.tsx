"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    
    // Hide footer on /samples pages
    if (pathname.startsWith("/samples")) {
        return null;
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mt-12 py-12  border-zinc-800 dark:text-white text-zinc-900">
            <p >Stephen Finegan </p>
            <p >{new Date().getFullYear()}</p>
        </div>
    )
}