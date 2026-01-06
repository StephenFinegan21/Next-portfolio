"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<(HTMLDivElement | null)[]>([]);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for SVG lines
      if (line1Ref.current) {
        gsap.to(line1Ref.current, {
          y: -80,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.3,
          },
        });
      }

      if (line2Ref.current) {
        gsap.to(line2Ref.current, {
          y: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.6,
          },
        });
      }

      // Animate benefits on scroll
      benefitsRef.current.forEach((ref, index) => {
        if (!ref) return;

        gsap.set(ref, { opacity: 0, y: 50 });

        gsap.to(ref, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      title: "Work smarter, not harder",
      description: "Nexus eliminates the constant switching between apps and tabs. Everything you need is in one place, so you can focus on what matters.",
    },
    {
      title: "Built for real teams",
      description: "Whether you're a startup or enterprise, Nexus scales with you. Connect your existing tools and watch your workflow transform.",
    },
    {
      title: "Your time, reclaimed",
      description: "Stop losing hours to context switching. Nexus helps teams save time every single day, giving you more room to do your best work.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#0c3623] relative overflow-hidden z-10 px-4 sm:px-12 md:px-48 py-24 sm:py-32 md:py-40 flex flex-col items-start justify-center gap-16"
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
            d="M-50 200 Q300 150 650 180 T1200 200"
            stroke="#20583e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            ref={line2Ref}
            d="M0 600 Q400 550 800 600 T1200 650"
            stroke="#20583e"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Heading */}
      <div className="relative z-10 mb-8 sm:mb-12">
        <h2
          style={{ fontWeight: 800 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-50 tracking-tight leading-[1.1]"
        >
          Why teams choose Nexus
        </h2>
      </div>

      {/* Benefits Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            ref={(el) => (benefitsRef.current[index] = el)}
            className="flex flex-col gap-4"
          >
            <h3
              style={{ fontWeight: 800 }}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-50 tracking-tight"
            >
              {benefit.title}
            </h3>
            <p className="text-white/80 leading-relaxed text-base sm:text-lg md:text-xl">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

