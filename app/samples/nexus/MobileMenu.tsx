"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);
  const line3Ref = useRef<SVGPathElement>(null);
  const line4Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        // Prevent body scroll when menu is open
        document.body.style.overflow = "hidden";
      } else {
        gsap.to(menuRef.current, {
          x: "100%",
          duration: 0.4,
          ease: "power2.in",
        });
        // Restore body scroll when menu is closed
        document.body.style.overflow = "unset";
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Parallax effect for SVG lines
  useEffect(() => {
    if (!isOpen) return;

    const ctx = gsap.context(() => {
      if (line1Ref.current) {
        gsap.to(line1Ref.current, {
          y: -100,
          scrollTrigger: {
            trigger: menuRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      if (line2Ref.current) {
        gsap.to(line2Ref.current, {
          y: -80,
          scrollTrigger: {
            trigger: menuRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (line3Ref.current) {
        gsap.to(line3Ref.current, {
          y: -120,
          scrollTrigger: {
            trigger: menuRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      }

      if (line4Ref.current) {
        gsap.to(line4Ref.current, {
          y: -60,
          scrollTrigger: {
            trigger: menuRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.0,
          },
        });
      }
    }, menuRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed top-0 right-0 w-full h-screen bg-nexus-dark-green z-40 md:hidden overflow-hidden"
      style={{ transform: "translateX(100%)" }}
    >
      {/* SVG Line Patterns with Parallax */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Line 1 - Top left to right */}
          <path
            ref={line1Ref}
            d="M-100 150 Q200 100 500 120 T1200 100"
            stroke="#20583e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Line 2 - Left to bottom right */}
          <path
            ref={line2Ref}
            d="M0 300 Q300 400 600 450 T1200 500"
            stroke="#20583e"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Line 3 - Bottom right curving up */}
          <path
            ref={line3Ref}
            d="M800 800 Q1000 600 1200 400"
            stroke="#20583e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Line 4 - Top right curving down */}
          <path
            ref={line4Ref}
            d="M1000 0 Q1100 200 1200 300"
            stroke="#20583e"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-70 transition-opacity z-50"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          style={{ color: "#ffffff" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Navigation Content */}
      <div className="flex flex-col items-center justify-center h-full px-8 gap-6 sm:gap-8 relative z-10">
        {/* Main Navigation Links */}
        <nav className="flex flex-col items-center gap-6 sm:gap-8">
          <a
            href="#features-section"
            onClick={onClose}
            className="text-4xl sm:text-5xl text-white hover:text-white/70 transition-colors tracking-tight"
            style={{ fontWeight: 800 }}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            onClick={onClose}
            className="text-4xl sm:text-5xl text-white hover:text-white/70 transition-colors tracking-tight"
            style={{ fontWeight: 800 }}
          >
            How It Works
          </a>
        </nav>

        {/* Get Started */}
        <div className="mt-4 sm:mt-8">
          <a
            href="#"
            onClick={onClose}
            className="text-4xl sm:text-5xl text-white hover:text-white/70 transition-colors tracking-tight"
            style={{ fontWeight: 800 }}
          >
            Get Started
          </a>
        </div>

        {/* Policy Links */}
        <div className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-3 sm:gap-4">
          <a
            href="#"
            onClick={onClose}
            className="text-sm sm:text-base text-white/80 hover:text-white transition-colors underline uppercase"
            style={{ fontWeight: 500 }}
          >
            Cookie Policy
          </a>
          <a
            href="#"
            onClick={onClose}
            className="text-sm sm:text-base text-white/80 hover:text-white transition-colors underline uppercase"
            style={{ fontWeight: 500 }}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

