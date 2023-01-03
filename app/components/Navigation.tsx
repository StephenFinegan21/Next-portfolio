"use client";

import Link from "next/link";
import { Popover } from "@headlessui/react";
import {IoMenuSharp} from 'react-icons/io5'

export default function Navigation() {
  return (
    <>
  
      <Popover className="relative flex  text-white py-4 w-full justify-end">
        <Popover.Button className='text-white text-2xl'><IoMenuSharp /></Popover.Button>

        <Popover.Panel className=" absolute  top-12 bg-zinc-900 flex justify-end h-14 z-10">
          <div className=" text-white text-right flex flex-col justify-center align-middle">
            <Link href="/">
              About
            </Link>
            <Link href="/projects">Projects</Link>
          </div>
        </Popover.Panel>
      </Popover>
  
    </>
  );
}
