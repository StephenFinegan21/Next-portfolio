'use client'
import { Property } from "./page";
import Image from "next/image";
import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/Dialog";

type CarouselProps = {
  properties: Property[];
};

export default function Carousel(props: CarouselProps) {
  const [activeImage, setActiveimage] = useState(0);
  const { properties } = props;
  const wrapperRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );
  }, [activeImage]);

  return (
    <>
      <div className="w-full  md:w-[1200px] max-w-full p-4  flex flex-col items-start justify-start md:block">
        <h2 className="text-zinc-900 dark:text-white font-semibold text-lg md:text-6xl py-4 md:py-16">
          {properties[activeImage].title}
        </h2>
        <ul className="flex flex-col md:flex-row gap-2 h-[800px] md:h-[500px] w-full bg-zinc-900">
          {properties.map((property: Property, index: number) => (
            <li
              onClick={() => setActiveimage(index)}
              aria-current={index === activeImage}
              key={index}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setActiveimage(index);
                }
              }}
              className={classNames(
                "w-full cursor-pointer overflow-hidden grayscale [&[aria-current='true']]:grayscale-0 relative [&[aria-current='true']]:h-[50%]",
                "md:w-[8%] md:[&[aria-current='true']]:w-[32%]  h-[8%] md:[&[aria-current='true']]:h-full  md:h-full",
                "md:[transition:width_var(--transition,200ms_ease-in)] [transition:height_var(--transition,200ms_ease-in)]",
                "hover:grayscale-0 focus:grayscale-0 ",
                "md:hover:w-[10%] md:focus:w-[10%]  md:[&:not(:hover)]group-hover:w-[8%]   "
              )}
            >
              <div className="max-w-full relative w-full  h-[420px] md:w-[420px] md:h-[600px] overflow-hidden ">
                <Image
                  src={property.img}
                  alt={property.title}
                  fill
                  className="object-cover object-center"
                  priority
                  loading="eager"
                />
                <div
                  className={`absolute flex justify-center items-center w-full h-full ${
                    activeImage === index ? "visible" : "invisible"
                  }`}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="px-4 py-2 bg-zinc-50 text-zinc-800 flex items-center gap-2  rounded-sm ">
                        Description <Info size={16} />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="p-8 text-left justify-start md:p-12 bg-white  shadow-none drop-shadow-none border-0 ">
                      <DialogHeader className="text-zinc-900 justify-start">
                        <DialogTitle>{property.title}</DialogTitle>
                        <DialogDescription>
                          <div className=" justify-start text-base sm:text-lg text-zinc-800 ">
                            <p className="  md:max-w-none mx-auto ">
                              {properties[activeImage].description}
                            </p>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
                <div
                  className={`text-zinc-50 text-2xl font-bold p-4 absolute top-0 ${
                    activeImage === index
                      ? "opacity-100 transition-opacity duration-500 bg-gradient-to-b from-zinc-800/70 via-zinc-800/40   to-transparent h-32 w-full text-zinc-50"
                      : "opacity-0"
                  }`}
                >
                  <h3>{property.title}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
