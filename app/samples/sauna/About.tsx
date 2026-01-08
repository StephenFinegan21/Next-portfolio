"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const bottomImageRef = useRef<HTMLDivElement>(null);
  const bottomRightImageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text fade in and move up
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Left image fade in from left
      gsap.fromTo(
        leftImageRef.current,
        {
          opacity: 0,
          x: -80,
          rotate: -5,
        },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Right image fade in from right
      gsap.fromTo(
        rightImageRef.current,
        {
          opacity: 0,
          x: 80,
          rotate: 3,
        },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 25%",
            scrub: 1,
          },
        }
      );

      // Bottom left image fade in from bottom
      gsap.fromTo(
        bottomImageRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 0%",
            scrub: 1,
          },
        }
      );

      // Bottom right image fade in from bottom right
      gsap.fromTo(
        bottomRightImageRef.current,
        {
          opacity: 0,
          y: 60,
          x: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 45%",
            end: "top 0%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-section"
      className="mx-auto  py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "#fdf6e3" }}
    >
        <div ref={sectionRef} className="relative min-h-screen max-w-6xl mx-auto flex flex-col items-center justify-center">
      {/* Left floating image */}
      <div
        ref={leftImageRef}
        className="hidden md:block absolute left-0 top-24 w-[180px] md:w-[200px] aspect-[3/4] opacity-0"
        style={{ transform: "translateX(-20%)" }}
      >
        <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/images/sauna/sauna-1.webp"
            alt="Sauna"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right floating image */}
      <div
        ref={rightImageRef}
        className="hidden md:block absolute right-0 top-16 w-[120px] md:w-[200px] aspect-[4/5] opacity-0"
        style={{ transform: "translateX(15%)" }}
      >
        <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/images/sauna/sauna-2.webp"
            alt="Sauna interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom left image */}
      <div
        ref={bottomImageRef}
                className="hidden md:block absolute left-[15%] bottom-20 w-[120px] md:w-[200px] aspect-square opacity-0"
      >
        <div className="w-full h-full rounded-lg overflow-hidden shadow-xl">
          <img
            src="/images/sauna/sauna-3.webp"
            alt="Wooden sauna"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

        {/* Bottom right image */}
        <div
        ref={bottomRightImageRef}
                className="hidden md:block absolute right-[15%] bottom-20 w-[120px] md:w-[200px] aspect-square opacity-0"
      >
        <div className="w-full h-full rounded-lg overflow-hidden shadow-xl">
          <img
            src="/images/sauna/sauna-4.webp"
            alt="Wooden sauna"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Central text content */}
      <div
        ref={textRef}
        className="relative flex flex-col items-center justify-center gap-12 z-10 max-w-4xl mx-auto text-center md:pt-16 opacity-0"
      >
     
        <h2
          className="text-2xl max-w-2xl mx-auto sm:text-xl md:text-2xl lg:text-3xl leading-[1.1] tracking-tight text-amber-900"
        >
          We are a team of sauna specialists, wellness practitioners, and 
          craftspeople dedicated to creating thermal experiences that{" "}
          <em className="font-regular">restore your body</em>, rejuvenate your mind, 
          and enhance your overall wellbeing.
        </h2>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button href="#" size="large">Book Now</Button>
        </div>
        </div>
      </div>
    </section>
  );
}

