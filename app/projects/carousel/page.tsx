"use client";
import { properties } from "./properties";
import Carousel from "./Carousel";

export type Property = {
  img: string;
  title: string;
  description: string;
};

export default function CarouselPage() {
  return (
    <>
      <div className="flex flex-col py-8  min-h-screen items-center md:justify-center ">
        <Carousel properties={properties} />
      </div>
    </>
  );
}
