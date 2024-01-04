"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("stephenfwebdesign@gmail.com");
    setShowToast(true);
  };

  useEffect(() => {
    let timeoutId;

    if (showToast) {
      timeoutId = setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }

    // Cleanup the timeout to avoid potential memory leaks
    return () => clearTimeout(timeoutId);
  }, [showToast]);

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={handleClick}>stephenfwebdesign@gmail.com</button>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showToast ? 1 : 0, y: showToast ? 0 : 10 }}
        transition={{ duration: 0.2, type: 'spring' }}
        className="text-zinc-200 py-2"
      >
        Copied to clipboard!
      </motion.p>
    </div>
  );
}
