interface FacilitySectionProps {
  title: string;
  description: string;
  number: string;
}

export default function FacilitySection({
  title,
  description,
  number,
}: FacilitySectionProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
      {/* Large number in bottom left - hidden on very small screens, repositioned on mobile */}
      <div className="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-24 md:-bottom-32 md:-left-32 pointer-events-none opacity-30 sm:opacity-20">
        <span className="text-white/20 text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter">
          {number}
        </span>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <h2
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2"
          style={{ fontFamily: "'Switzer', sans-serif" }}
        >
          {title}
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto px-2 leading-relaxed"
          style={{ fontFamily: "'Switzer', sans-serif" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

