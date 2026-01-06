"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);
  const line3Ref = useRef<SVGPathElement>(null);
  const line4Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for each line - different speeds for depth
      if (line1Ref.current) {
        gsap.to(line1Ref.current, {
          y: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
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
            trigger: sectionRef.current,
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
            trigger: sectionRef.current,
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
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.0,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Stay in the loop",
      body: "Get a clear bird's-eye view of what's happening today without the endless meetings.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 256 256"
          fill="none"
        >
          <path
            d="M 32 192 C 32 209.673 46.327 224 64 224 C 64 241.673 49.673 256 32 256 C 14.327 256 0 241.673 0 224 C 0 206.327 14.327 192 32 192 Z M 96 192 C 96 209.673 110.327 224 128 224 C 128 241.673 113.673 256 96 256 C 78.327 256 64 241.673 64 224 C 81.673 224 96 209.673 96 192 Z M 160 192 C 160 209.673 174.327 224 192 224 C 192 241.673 177.673 256 160 256 C 142.327 256 128 241.673 128 224 C 145.673 224 160 209.673 160 192 Z M 224 192 C 241.673 192 256 206.327 256 224 C 256 241.673 241.673 256 224 256 C 206.327 256 192 241.673 192 224 C 209.673 224 224 209.673 224 192 Z M 32 128 C 32 145.673 46.327 160 64 160 C 46.327 160 32 174.327 32 192 C 14.327 192 0 177.673 0 160 C 0 142.327 14.327 128 32 128 Z M 96 128 C 96 145.673 110.327 160 128 160 C 128 177.673 113.673 192 96 192 C 78.327 192 64 177.673 64 160 C 64 142.327 78.327 128 96 128 Z M 160 128 C 177.673 128 192 142.327 192 160 C 192 177.673 177.673 192 160 192 C 142.327 192 128 177.673 128 160 C 145.673 160 160 145.673 160 128 Z M 224 128 C 241.673 128 256 142.327 256 160 C 256 177.673 241.673 192 224 192 C 224 174.327 209.673 160 192 160 C 209.673 160 224 145.673 224 128 Z M 32 64 C 32 81.673 46.327 96 64 96 C 46.327 96 32 110.327 32 128 C 14.327 128 0 113.673 0 96 C 0 78.327 14.327 64 32 64 Z M 96 64 C 113.673 64 128 78.327 128 96 C 110.327 96 96 110.327 96 128 C 78.327 128 64 113.673 64 96 C 64 78.327 78.327 64 96 64 Z M 160 64 C 177.673 64 192 78.327 192 96 C 192 113.673 177.673 128 160 128 C 160 110.327 145.673 96 128 96 C 128 78.327 142.327 64 160 64 Z M 224 64 C 241.673 64 256 78.327 256 96 C 256 113.673 241.673 128 224 128 C 224 110.327 209.673 96 192 96 C 209.673 96 224 81.673 224 64 Z M 32 0 C 49.673 0 64 14.327 64 32 C 46.327 32 32 46.327 32 64 C 14.327 64 0 49.673 0 32 C 0 14.327 14.327 0 32 0 Z M 96 0 C 113.673 0 128 14.327 128 32 C 110.327 32 96 46.327 96 64 C 96 46.327 81.673 32 64 32 C 64 14.327 78.327 0 96 0 Z M 160 0 C 177.673 0 192 14.327 192 32 C 174.327 32 160 46.327 160 64 C 160 46.327 145.673 32 128 32 C 128 14.327 142.327 0 160 0 Z M 224 0 C 241.673 0 256 14.327 256 32 C 256 49.673 241.673 64 224 64 C 224 46.327 209.673 32 192 32 C 192 14.327 206.327 0 224 0 Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      title: "Everything in one place",
      body: "No more 'Where is that link?' Keep every conversation and document attached to the project it belongs to.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
          viewBox="0 0 256 256"
        >
          <path
            d="M 144 256 L 27.598 256 L 144 139.598 Z M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z M 0 204.402 L 0 112 L 92.402 112 Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      title: "Built for everyone",
      body: "You don't need a degree in IT to use Nexus. It's as easy as sending a text, but powerful enough to run a company",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
          viewBox="0 0 256 256"
        >
          <path
            d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features-section"
      ref={sectionRef}
      className="min-h-screen bg-[#0c3623] relative overflow-hidden z-10 px-4 sm:px-12 md:px-48 flex flex-col items-start justify-center gap-16"
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

      {/* Feature Tabs */}
      <div className="relative z-10 w-full flex flex-row items-start justify-between sm:justify-start gap-4 sm:gap-16">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setActiveFeature(index)}
            className={`group relative flex flex-col sm:flex-row items-center gap-2 rounded-lg transition-all duration-300
                 ${
                   activeFeature === index
                     ? "text-[#348e64]"
                     : "text-[#20583e] hover:text-[#4fb382]"
                 }`}
          >
            <div className="relative">
              <div
                className={`transition-all duration-300 ${
                  activeFeature === index
                    ? "scale-110"
                    : "scale-100 group-hover:scale-120 group-hover:rotate-3"
                }`}
              >
                {feature.icon}
              </div>
              {/* Orange underline for active tab */}
              {activeFeature === index && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full p-1  h-1 bg-[#FF6B35] rounded-full"></div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Active Feature Content */}
      <div className="relative z-10">
        <h3
          style={{ fontWeight: 800 }}
          className="font-extrabold text-gray-50 text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-4 sm:mb-6 max-w-2xl"
        >
          {features[activeFeature].title}
        </h3>
        <p className="text-white/90 leading-relaxed max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl">
          {features[activeFeature].body}
        </p>
      </div>
    </section>
  );
}
