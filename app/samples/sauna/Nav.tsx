"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const navLinks = [
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Find the About section by id
      const aboutSection = document.getElementById("about-section");
      
      if (aboutSection && navRef.current) {
        // Set initial state (visible)
        gsap.set(navRef.current, {
          y: 0,
          opacity: 1,
        });

        // Animate nav: slide up and fade out when scrolling to About
        // Automatically reverses when scrolling back up
        gsap.to(navRef.current, {
          y: -100,
          opacity: 0,
          scrollTrigger: {
            trigger: aboutSection,
            start: "top 100px",
            end: "top 50px",
            scrub: 0.5,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-6xl"
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-xl px-3 sm:px-6 py-2 sm:py-4 flex items-center justify-between shadow-lg shadow-black/5 relative gap-2 sm:gap-4">
        {/* Logo */}
        <div>
          <span className="text-black text-base sm:text-xl font-semibold tracking-tight">
            Sauna
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 sm:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <Button href="#" size="small" className="ml-1 sm:ml-2 text-xs sm:text-sm px-3 sm:px-6 py-1.5 sm:py-2">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
