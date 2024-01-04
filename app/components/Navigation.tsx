"use client";

import ThemeChanger from "./ThemeChanger";

export default function Navigation() {
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="fixed z-50  top-4 left-1/2 transform -translate-x-1/2 sm:-translate-x-0 sm:top-1/2 sm:left-4  transition-all px-4 sm:px-2">
      <ThemeChanger />
    </nav>
  );
}
