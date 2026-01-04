interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "small" | "large";
}

export default function Button({ href, children, className = "", onClick, size = "large" }: ButtonProps) {
  const paddingClasses = size === "small" ? "px-6 py-2" : "px-12 py-4";
  const textSizeClasses = size === "small" ? "text-sm" : "";
  
  const buttonClasses = `group relative flex w-fit justify-start items-center ${paddingClasses} ${textSizeClasses} bg-[#ea5d3e] backdrop-blur-md rounded-full overflow-hidden shadow-xl border border-amber-600/30 ${className}`;

  const content = (
    <>
      {/* White fill that slides in from left on hover */}
      <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
      
      {/* Text */}
      <span className="relative z-10 text-amber-50 group-hover:text-[#ea5d3e] font-medium tracking-wide transition-colors duration-500">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}

