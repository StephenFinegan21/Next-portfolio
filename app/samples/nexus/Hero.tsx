"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../sauna/Button";

export default function Hero() {
  const logoRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = logo.getBoundingClientRect();
      const logoCenterX = rect.left + rect.width / 2;
      const logoCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - logoCenterX;
      const deltaY = e.clientY - logoCenterY;

      // Calculate angle in degrees (atan2 gives angle from positive x-axis)
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Add 45 degrees to account for initial rotation, then add 90 to point towards cursor
      const rotation = angle + 45 + 90;

      // Smoothly animate the rotation
      gsap.to(logo, {
        rotation: rotation,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#ede6d7] relative overflow-hidden px-4 sm:px-12 md:px-48 flex flex-col justify-center items-start"
    >
      {/* Subtle curved background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 600 Q300 400 600 500 T1200 450"
            stroke="#E8E3DB"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M0 700 Q200 550 400 600 T800 580"
            stroke="#E8E3DB"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Header */}
      <header className="absolute top-4 sm:top-8 right-0 w-full px-4 sm:px-12 md:px-48 z-10 flex items-center justify-between pt-4 sm:pt-6 md:pt-8">
       

        {/* Logo */}
        <div className="relative">
          <img
            ref={logoRef}
            src="/nexus/logo-dark.webp"
            alt="Nexus"
            className="w-8 h-8 sm:w-10 sm:h-10"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>

        {/* Menu icon */}
        <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex flex-col items-end justify-center gap-1 sm:gap-1.5 hover:opacity-70 transition-opacity">
          <div className="h-0.5 bg-[#2D2D2D] w-4 sm:w-6"></div>
          <div className="h-0.5 bg-[#2D2D2D] w-6 sm:w-8"></div>
          <div className="h-0.5 bg-[#2D2D2D] w-8 sm:w-10"></div>
        </button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-32">
        <div className="max-w-4xl flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-8">
          <h2 style={{ fontWeight: 800 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-[#2D2D2D] leading-[1.1]">
          All Your Work
            <br />
            in One Place.
          </h2>
          <p style={{ fontWeight: 500 }} className="pl-0 sm:pl-2 text-base sm:text-lg md:text-xl lg:text-2xl text-[#2D2D2D] leading-relaxed max-w-3xl">
          Stop jumping between tabs and hunting for files. Nexus brings your chat, tasks, and tools into one simple view. It’s the easiest way for teams to stay on the same page.          </p>
          <button
            onClick={() => {
              const featuresSection = document.getElementById("features-section");
              if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{ fontWeight: 600 }}
            className="border-4  border-[#2D2D2D] text-[#2D2D2D] text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#2D2D2D] hover:text-white transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
      

     
    </div>
  );
}

