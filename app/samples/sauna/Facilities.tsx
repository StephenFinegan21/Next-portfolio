"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FacilitySection from "./FacilitySection";

gsap.registerPlugin(ScrollTrigger);

export default function Facilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = sectionsRef.current;
      
      sections.forEach((section, index) => {
        if (index < sections.length - 1) {
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            pin: true,
            pinSpacing: false,
            endTrigger: sections[sections.length - 1],
            end: "bottom bottom",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      sectionsRef.current[index] = el;
    }
  };

  return (
    <section id="facilities" ref={containerRef} className="relative">
      <div
        ref={(el) => addToRefs(el, 0)}
        className="facility-section w-full h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          zIndex: 1,
          backgroundImage: "url('/images/sauna/sauna-big-4.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <FacilitySection
          title="Steam Room"
          description="Experience the ultimate relaxation in our state-of-the-art steam room"
          number="01"
        />
      </div>
      <div
        ref={(el) => addToRefs(el, 1)}
        className="facility-section w-full h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          zIndex: 2,
          backgroundImage: "url('/images/sauna/sauna-big-3.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <FacilitySection
          title="Cold Plunge"
          description="Complete your wellness journey with an invigorating cold plunge"
          number="02"
        />
      </div>
      <div
        ref={(el) => addToRefs(el, 2)}
        className="facility-section w-full h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          zIndex: 3,
          backgroundImage: "url('/images/sauna/sauna-big-2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <FacilitySection
          title="Infrared Sauna"
          description="Detoxify and rejuvenate with our advanced infrared technology"
          number="03"
        />
      </div>
    </section>
  );
}

