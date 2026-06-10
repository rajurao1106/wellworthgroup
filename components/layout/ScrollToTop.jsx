"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position to toggle visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 max-lg:right-6 right-8 md:bottom-24 md:right-[27px] z-[90] p-3  bg-[#8FAF9A] text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-[#7a9985] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8FAF9A]"
        >
          <ChevronUp size={28} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;