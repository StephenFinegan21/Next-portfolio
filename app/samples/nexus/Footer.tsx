"use client";

export default function Footer() {
  return (
    <footer
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "#2D1810" }}
    >
      {/* Centered Brand Name */}
      <div className="flex-1 flex items-center justify-center">
        <h2
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FF6B35] tracking-tight"
          style={{ fontFamily: "'Switzer', sans-serif", fontWeight: 800 }}
        >
          Nexus
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-4 sm:px-12 md:px-24 lg:px-32 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#F5F0EB]/70">
        {/* Social Links - Bottom Left */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hover:text-[#FF6B35] transition-colors"
            style={{ fontFamily: "'Switzer', 'Inter', sans-serif" }}
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-[#FF6B35] transition-colors"
            style={{ fontFamily: "'Switzer', 'Inter', sans-serif" }}
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright - Bottom Right */}
        <div className="flex items-center gap-2">
          <span
            className="text-xs"
            style={{ fontFamily: "'Switzer', 'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Nexus Corporation.
          </span>
          <a
            href="#"
            className="text-xs underline hover:text-[#FF6B35] transition-colors"
            style={{ fontFamily: "'Switzer', 'Inter', sans-serif" }}
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs underline hover:text-[#FF6B35] transition-colors"
            style={{ fontFamily: "'Switzer', 'Inter', sans-serif" }}
          >
            Terms
          </a>
          <a
            href="#"
            className="text-xs underline hover:text-[#FF6B35] transition-colors"
            style={{ fontFamily: "'Switzer', 'Inter', sans-serif" }}
          >
            Trademarks
          </a>
        </div>
      </div>
    </footer>
  );
}
