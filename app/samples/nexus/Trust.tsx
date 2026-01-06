"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const metricRefs = useRef<(HTMLDivElement | null)[]>([]);

  const metrics = [
    {
      value: 500000,
      suffix: "+",
      description: "People using Nexus daily.",
    },
    {
      value: 2,
      suffix: " Hours",
      description: "Saved per person, every week.",
    },
    {
      value: 4.9,
      suffix: "/5",
      description: "Rating on the App Store.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      metricRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const metric = metrics[index];
        const valueElement = ref.querySelector(".metric-value");
        const container = ref;

        if (!valueElement) return;

        // Set initial opacity and position
        gsap.set(container, { opacity: 0, y: 30 });

        // Create counter animation
        const counter = { value: 0 };
        const targetValue = metric.value;

        // Animate container fade in and counter
        gsap.to(container, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // Counter animation
        gsap.to(counter, {
          value: targetValue,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (index === 0) {
              // For 500,000+
              valueElement.textContent = Math.floor(counter.value).toLocaleString() + metric.suffix;
            } else if (index === 1) {
              // For 2 Hours
              valueElement.textContent = Math.floor(counter.value) + metric.suffix;
            } else {
              // For 4.9/5
              valueElement.textContent = counter.value.toFixed(1) + metric.suffix;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#ede6d7] relative overflow-hidden px-4 sm:px-12 md:px-24 lg:px-48 py-24 sm:py-32 md:py-40 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 text-center">
        <h2
          style={{ fontWeight: 800 }}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2D2D2D] tracking-tight leading-[1.1] "
        >
          Trusted by teams who value their time.
        </h2>
      </div>

      {/* Metrics */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              ref={(el) => (metricRefs.current[index] = el)}
              className="flex flex-col items-center text-center"
            >
              <div
                className="metric-value text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-4 sm:mb-6 leading-none"
                style={{ fontFamily: "'Switzer', 'Inter', sans-serif", fontWeight: 800 }}
              >
                0{metric.suffix}
              </div>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2D2D2D]/80 leading-relaxed max-w-xs"
                style={{ fontFamily: "'Switzer', 'Inter', sans-serif", fontWeight: 500 }}
              >
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

