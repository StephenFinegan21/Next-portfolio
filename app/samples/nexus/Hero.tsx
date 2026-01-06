"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Hero() {
  const logoRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#ede6d7] relative overflow-hidden px-4 sm:px-12 md:px-24 lg:px-48 flex flex-col justify-center items-start"
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
      <header className="absolute top-4 sm:top-8 right-0 w-full px-4 sm:px-12 md:px-24 lg:px-48 z-10 flex items-center justify-between pt-4 sm:pt-6 md:pt-8">
        {/* Logo */}
        <div className="relative">
          <img
            ref={logoRef}
            src="/nexus/log-dark.webp"
            alt="Nexus"
            className="w-8 h-8 sm:w-10 sm:h-10"
            style={{ transform: "rotate(45deg)" }}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#features-section"
            className="text-sm lg:text-base text-[#2D2D2D] hover:text-[#2D2D2D]/70 transition-colors"
            style={{ fontFamily: "'Switzer', 'Inter', sans-serif", fontWeight: 500 }}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm lg:text-base text-[#2D2D2D] hover:text-[#2D2D2D]/70 transition-colors"
            style={{ fontFamily: "'Switzer', 'Inter', sans-serif", fontWeight: 500 }}
          >
            How It Works
          </a>
          <Button size="xsmall" color="dark" />
        </nav>

        {/* Menu icon - Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 sm:w-10 sm:h-10 flex flex-col items-end justify-center gap-1 sm:gap-1.5 hover:opacity-70 transition-opacity z-50 relative"
        >
          <div className={`h-0.5 bg-[#2D2D2D] w-4 sm:w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`h-0.5 bg-[#2D2D2D] w-6 sm:w-8 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-0.5 bg-[#2D2D2D] w-8 sm:w-10 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />

      {/* Main Content */}
      <div className="relative z-10 pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-32">
        <div className="max-w-4xl flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-8">
          <h1 style={{ fontWeight: 800 }} className="font-extrabold text-5xl md:text-6xl  xl:text-8xl text-[#2D2D2D] leading-[1.1] tracking-tight">
          All Your Work
            <br />
            in One Place.
          </h1>
          <p style={{ fontWeight: 500 }} className="pl-0 sm:pl-2 text-base md:text-xl lg:text-2xl text-[#2D2D2D] leading-relaxed max-w-2xl">
          Stop jumping between tabs and hunting for files. Nexus brings your chat, tasks, and tools into one simple view. It's the easiest way for teams to stay on the same page.          </p>
          <div className="flex flex-row gap-4 md:gap-8 items-center">
            <Button
              size="small"
              color="dark"
              variant="outline"
              onClick={() => {
                const featuresSection = document.getElementById("features-section");
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Learn More
            </Button>
            <Button size="small" color="green-inactive" />
          </div>
        </div>
      </div>
      

     
    </div>
  );
}

