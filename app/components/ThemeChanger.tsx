"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSun } from "react-icons/bi";
import { HiOutlineMoon } from "react-icons/hi";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full  sm:w-auto">
      {resolvedTheme === "dark" && (
        <BiSun
          onClick={() => setTheme("light")}
          className="hover:scale-110 transition-all cursor-pointer"
        />
      )}
      {resolvedTheme === "light" && (
        <HiOutlineMoon
          onClick={() => setTheme("dark")}
          className="hover:scale-110 transition-all cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeChanger;
