"use client";

import Image from "next/image";
import React from "react";
import { Bodoni_Moda } from "next/font/google";
import { motion } from "framer-motion";
import hero4 from "@/public/homepage/hero4.jpg";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bodoni",
});

// Animation variants for staggering the children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays the appearance of each child element
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function Hero() {
  return (
    <div id="hero" className="flex justify-center items-center">
      <div className="relative w-full overflow-hidden">
        <section className="min-h-[100dvh] md:h-screen">
          {/* Background Image with a subtle scale-in effect */}
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={hero4}
              alt="Modern Architecture"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Overlay: Solid dark on mobile for better text contrast, gradient on desktop */}
          <div className="absolute inset-0 bg-black/0 max-lg:bg-black/50 md:bg-gradient-to-r md:from-black md:to-black/0" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[100dvh] md:h-screen justify-start items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-5xl flex justify-center items-start flex-col px-6 sm:px-8 md:px-16 w-full"
            >
              <motion.h1
                variants={itemVariants}
                className={`text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight ${bodoni.className}`}
              >
                Discover Premium <br className="hidden sm:block" />
                <span className="italic text-[#E3C77A] inline-block mt-2 sm:mt-0">
                  Plots In Raipur.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mt-4 max-w-xl mb-8 text-white/90 md:text-white text-base md:text-lg"
              >
                Clear title plots on Old Dhamtari Road, Raipur. RERA approved.
                Call now to get pricing and availability — limited plots
                remaining.
              </motion.p>

              {/* Buttons: Stacked on mobile, side-by-side on sm+ screens */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <motion.button
                  id="property"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-colors duration-300 shadow-lg w-full sm:w-auto text-center"
                >
                  Discover Properties
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-colors duration-300 shadow-lg w-full sm:w-auto text-center"
                >
                  Call Now for Pricing
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}