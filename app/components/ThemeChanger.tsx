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
    <>
      {resolvedTheme === "dark" && (
        <button onClick={() => setTheme("light")}>
          <BiSun className="hover:scale-110 transition-all" />
        </button>
      )}
      {resolvedTheme === "light" && (
        <button onClick={() => setTheme("dark")}>
          <HiOutlineMoon className="hover:scale-110 transition-all" />
        </button>
      )}
    </>
  );
};

export default ThemeChanger;
