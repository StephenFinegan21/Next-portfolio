"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const blurShapesRef = useRef<HTMLDivElement>(null);
  const transitionOverlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for the background transition
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Fade out the gradient background
      tl.to(
        gradientRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        0
      );

      // Fade out the blur shapes
      tl.to(
        blurShapesRef.current,
        {
          opacity: 0,
          duration: 0.8,
        },
        0
      );

      // Animate the transition overlay through colors:
      // transparent -> white/light -> soft yellow -> cream (#fdf6e3)
      tl.to(
        transitionOverlayRef.current,
        {
          keyframes: [
            { backgroundColor: "rgba(255, 255, 255, 0)", duration: 0.1 },
            { backgroundColor: "rgba(255, 252, 245, 0.7)", duration: 0.3 },
            { backgroundColor: "rgba(253, 250, 235, 0.9)", duration: 0.3 },
            { backgroundColor: "#fdf6e3", duration: 0.3 },
          ],
        },
        0
      );

      // Fade out the content slightly and move up
      tl.to(
        contentRef.current,
        {
          opacity: 0,
          y: -50,
          duration: 0.6,
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[100svh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Transition overlay - fades from transparent to cream */}
      <div
        ref={transitionOverlayRef}
        className="absolute inset-0 -z-5 pointer-events-none"
        style={{ backgroundColor: "transparent" }}
      />

      {/* Gradient background */}
      <div
        ref={gradientRef}
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 30% 20%, rgba(255, 180, 150, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse 100% 60% at 70% 80%, rgba(220, 140, 130, 0.7) 0%, transparent 45%),
            radial-gradient(ellipse 80% 100% at 90% 30%, rgba(200, 130, 120, 0.5) 0%, transparent 40%),
            linear-gradient(160deg, #e8a090 0%, #ea5d3e 25%, #ea5d3e 50%, #ea5d3e 75%, #dba090 100%)
          `,
        }}
      />

      {/* Organic blur shapes for depth */}
      <div ref={blurShapesRef} className="absolute inset-0 -z-5 overflow-hidden">
        <div
          className="absolute w-[600px] h-[400px] -top-20 -left-20 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(180,100,80,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute w-[500px] h-[600px] top-1/3 -right-32 rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(160,90,70,0.5) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute w-[700px] h-[300px] bottom-0 left-1/4 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(190,110,90,0.6) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="text-center px-6 max-w-4xl tracking-tight">
        <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-10xl leading-[0.95] tracking-tighter text-white/95">
          <span className=" font-medium">
            Recharge
          </span>
          <br />
          <span className="font-medium">
            Your Body
          </span>
        </h1>
        <p className="mt-10 text-lg sm:text-xl text-white font-regular tracking-wide">
          Steam and cold therapy experiences crafted to help you feel your best
        </p>
      </div>
    </div>
  );
}