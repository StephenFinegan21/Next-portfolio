"use client";

import Link from "next/link";
import { Popover } from "@headlessui/react";
import {IoMenuSharp} from 'react-icons/io5'

export default function Navigation() {
  return (
    <>
  
      <Popover className="relative flex  text-white py-4 w-full justify-end">
        <Popover.Button className='text-white text-2xl'><IoMenuSharp /></Popover.Button>

        <Popover.Panel className=" absolute top-12 w-2/5 p-8 rounded-md z-10 ring-1 bg-zinc-800/60 ring-zinc-700 opacity-100">
          <div className=" text-white  flex flex-col justify-center align-middle">
            <Link href="/">
              About
            </Link>
            <div className="relative w-full h-px my-2 bg-zinc-700 text-zinc-800"></div>
            <Link href="/projects">Projects</Link>
          </div>
        </Popover.Panel>
      </Popover>
  
    </>
  );
}
