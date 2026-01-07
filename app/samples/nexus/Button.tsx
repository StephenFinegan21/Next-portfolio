"use client";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  size?: "xsmall" | "small" | "large";
  color?: "dark-brown" | "dark" | "orange" | "green-active" | "dark-green" | "green-inactive";
  variant?: "solid" | "outline";
  children?: React.ReactNode;
}

export default function Button({ 
  onClick, 
  className = "", 
  size = "large",
  color,
  variant = "solid",
  children
}: ButtonProps) {
  const paddingClasses = 
    size === "xsmall" 
      ? "px-4 py-3  text-xs sm:text-sm" 
      : size === "small" 
      ? "px-4 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg lg:text-xl" 
      : "px-8 py-4 sm:px-12 sm:py-5 text-base sm:text-lg md:text-xl";
  
  // Default color based on size if not specified
  const defaultColor: "dark-brown" | "dark" | "orange" | "green-active" | "dark-green" | "green-inactive" = size === "xsmall" ? "dark" : "dark-brown";
  const buttonColor: "dark-brown" | "dark" | "orange" | "green-active" | "dark-green" | "green-inactive" = color || defaultColor;
  
  const solidColorClasses: Record<"dark-brown" | "dark" | "orange" | "green-active" | "dark-green" | "green-inactive", string> = {
    "dark-brown": "bg-nexus-dark-brown hover:bg-nexus-dark-brown/80 text-white",
    "dark": "bg-nexus-dark hover:bg-nexus-dark/80 text-nexus-beige-light",
    "orange": "bg-nexus-orange hover:bg-nexus-orange-hover text-white",
    "green-active": "bg-nexus-green-active hover:bg-nexus-green-hover text-white",
    "dark-green": "bg-nexus-dark-green hover:bg-nexus-dark-green/80 text-white",
    "green-inactive": "bg-nexus-green-inactive hover:bg-nexus-green-hover text-white",
  };

  const outlineColorClasses: Record<"dark-brown" | "dark" | "orange" | "green-active" | "dark-green" | "green-inactive", string> = {
    "dark-brown": "border-2 border-nexus-dark-brown text-nexus-dark-brown hover:bg-nexus-dark-brown hover:text-white bg-transparent",
    "dark": "border-2 border-[#2D2D2D] text-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-white bg-transparent",
    "orange": "border-2 border-nexus-orange text-nexus-orange hover:bg-nexus-orange hover:text-white bg-transparent",
    "green-active": "border-2 border-nexus-green-active text-nexus-green-active hover:bg-nexus-green-active hover:text-white bg-transparent",
    "dark-green": "border-2 border-nexus-dark-green text-nexus-dark-green hover:bg-nexus-dark-green hover:text-white bg-transparent",
    "green-inactive": "border-2 border-nexus-green-inactive text-nexus-green-inactive hover:bg-nexus-green-inactive hover:text-white bg-transparent",
  };
  
  const colorClasses = variant === "outline" ? outlineColorClasses[buttonColor] : solidColorClasses[buttonColor];
  
  const baseClasses = size === "xsmall"
    ? "rounded-full font-semibold transition-colors duration-300"
    : "rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105";
  
  return (
    <button
      onClick={onClick}
      className={`${colorClasses} ${baseClasses} ${paddingClasses} ${className}`}
      style={{ fontWeight: 600, boxSizing: "border-box" }}
    >
      {children || "Get Started"}
    </button>
  );
}

