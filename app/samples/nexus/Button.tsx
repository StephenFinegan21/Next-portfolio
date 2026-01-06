"use client";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  size?: "xsmall" | "small" | "large";
  color?: "dark-brown" | "dark" | "orange" | "green-active" | "dark-green" | "green-inactive";
}

export default function Button({ 
  onClick, 
  className = "", 
  size = "large",
  color
}: ButtonProps) {
  const paddingClasses = 
    size === "xsmall" 
      ? "px-4 py-2 text-xs sm:text-sm" 
      : size === "small" 
      ? "px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl" 
      : "px-8 py-4 sm:px-12 sm:py-5 text-base sm:text-lg md:text-xl";
  
  // Default color based on size if not specified
  const defaultColor: "dark-brown" | "dark" | "orange" | "green-active" | "dark-green" | "green-inactive" = size === "xsmall" ? "dark" : "dark-brown";
  const buttonColor: "dark-brown" | "dark" | "orange" | "green-active" | "dark-green" | "green-inactive" = color || defaultColor;
  
  const colorClasses: Record<"dark-brown" | "dark" | "orange" | "green-active" | "dark-green" | "green-inactive", string> = {
    "dark-brown": "bg-nexus-dark-brown hover:bg-nexus-dark-brown/80 text-white",
    "dark": "bg-nexus-dark hover:bg-nexus-dark/80 text-nexus-beige-light",
    "orange": "bg-nexus-orange hover:bg-nexus-orange-hover text-white",
    "green-active": "bg-nexus-green-active hover:bg-nexus-green-hover text-white",
    "dark-green": "bg-nexus-dark-green hover:bg-nexus-dark-green/80 text-white",
    "green-inactive": "bg-nexus-green-inactive hover:bg-nexus-green-hover text-white",
  };
  
  const baseClasses = size === "xsmall"
    ? "rounded-full font-semibold transition-colors duration-300"
    : "rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105";
  
  return (
    <button
      onClick={onClick}
      className={`${colorClasses[buttonColor]} ${baseClasses} ${paddingClasses} ${className}`}
      style={{ fontFamily: "'Switzer', sans-serif", fontWeight: 600 }}
    >
      Get Started
    </button>
  );
}

