"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for SVG lines
      if (line1Ref.current) {
        gsap.to(line1Ref.current, {
          y: -90,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }

      if (line2Ref.current) {
        gsap.to(line2Ref.current, {
          y: -70,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      }

      // Animate content on scroll
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 0, y: 30 });
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      if (subheadingRef.current) {
        gsap.set(subheadingRef.current, { opacity: 0, y: 30 });
        gsap.to(subheadingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      if (buttonRef.current) {
        gsap.set(buttonRef.current, { opacity: 0, y: 30, scale: 0.9 });
        gsap.to(buttonRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#0c3623] relative overflow-hidden z-10 px-4 sm:px-12 md:px-48 py-24 sm:py-32 md:py-40 flex flex-col items-center justify-center gap-8 sm:gap-12"
    >
      {/* SVG Line Patterns with Parallax */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            ref={line1Ref}
            d="M-100 100 Q200 200 500 150 T1200 180"
            stroke="#20583e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            ref={line2Ref}
            d="M0 700 Q400 650 800 700 T1200 720"
            stroke="#20583e"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
        <h2
          ref={headingRef}
          style={{ fontWeight: 800 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-50 tracking-tight leading-[1.1]"
        >
          Ready to simplify your workday?
        </h2>
        <p
          ref={subheadingRef}
          className="text-white/80 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl"
        >
          Join thousands of teams who have found a better way to work. No credit card required.
        </p>
        <div ref={buttonRef}>
          <Button size="large" color="orange" />
        </div>
      </div>
    </section>
  );
}

