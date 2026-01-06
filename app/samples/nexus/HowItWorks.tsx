"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const linePathRef = useRef<SVGPathElement>(null);
  const lineProgressRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Wait for next frame to ensure SVG is rendered
      requestAnimationFrame(() => {
        if (linePathRef.current && lineProgressRef.current && sectionRef.current) {
          const pathLength = linePathRef.current.getTotalLength();
          
          // Set initial stroke-dasharray and stroke-dashoffset
          gsap.set(lineProgressRef.current, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          // Animate the line progress based on scroll
          gsap.to(lineProgressRef.current, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "1.",
      title: "Bring your tools",
      description: "Connect the apps you already use (like Email, Calendar, and Drive) with one click.",
      position: "right",
      image: "/nexus/step-1.png",
    },
    {
      number: "2.",
      title: "Invite the team",
      description: "Drag and drop your teammates into specific project rooms.",
      position: "left",
      image: "/nexus/step-2.png",
    },
    {
      number: "3.",
      title: "Get it done",
      description: "Chat, share files, and check off tasks without ever leaving the window.",
      position: "right",
      image: "/nexus/step-3.png",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="min-h-screen bg-[#2D1810] relative overflow-hidden px-4 sm:px-12 md:px-24 lg:px-32 py-24 sm:py-32 md:py-40"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-20 sm:mb-28 md:mb-36">
        <h2
          style={{ fontWeight: 800 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F0EB] tracking-tight leading-[1.1]"
        >
          Three Steps to a<br />Calmer Workday.
        </h2>
      </div>

     {/* Steps Container */}
<div ref={stepsContainerRef} className="max-w-6xl mx-auto relative">
  {/* SVG Curved Line connecting the steps - sweeping left to right */}
  <div className="absolute inset-0 pointer-events-none hidden md:block">
    <svg
      className="w-full h-full"
      viewBox="0 0 1000 1200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background curved line (full path) - smooth S-curve */}
      <path
        ref={linePathRef}
        d="M 700 0
           C 720 30, 720 70, 700 100
           C 680 130, 650 160, 600 200
           C 500 280, 400 320, 300 400
           C 280 420, 280 460, 300 480
           C 320 500, 380 550, 450 600
           C 520 650, 600 700, 650 750
           C 680 780, 700 820, 700 850
           C 700 880, 700 920, 700 950
           C 700 980, 700 1020, 700 1050
           C 700 1080, 700 1120, 700 1200"
        stroke="#F5F0EB"
        strokeWidth="2"
        fill="none"
        opacity="0.15"
      />
      {/* Progress curved line (animated) */}
      <path
        ref={lineProgressRef}
        d="M 700 0
           C 720 30, 720 70, 700 100
           C 680 130, 650 160, 600 200
           C 500 280, 400 320, 300 400
           C 280 420, 280 460, 300 480
           C 320 500, 380 550, 450 600
           C 520 650, 600 700, 650 750
           C 680 780, 700 820, 700 850
           C 700 880, 700 920, 700 950
           C 700 980, 700 1020, 700 1050
           C 700 1080, 700 1120, 700 1200"
        stroke="#FF6B35"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </div>

        {/* Steps */}
        <div className="flex flex-col gap-40 sm:gap-52 md:gap-64 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 ${
                step.position === "right"
                  ? "md:flex-row-reverse"
                  : ""
              }`}
            >
              {/* Step Image */}
              {step.image && (
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              )}

              {/* Step Content */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Step Number */}
                <div className="mb-4 sm:mb-6">
                  <span
                    className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-[#FF6B35] leading-none"
                    style={{ fontFamily: "'Switzer', sans-serif", fontWeight: 800 }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  style={{ fontWeight: 800 }}
                  className="text-2xl sm:text-3xl md:text-4xl text-[#F5F0EB] mb-4 sm:mb-6 tracking-tight "
                >
                  {step.title}
                </h3>
                <p
                  style={{ fontWeight: 500 }}
                  className="text-base sm:text-lg md:text-xl text-[#F5F0EB]/70 leading-relaxed max-w-md"
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
