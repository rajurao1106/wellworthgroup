"use client";

import Image from "next/image";
import React from "react";
import { Bodoni_Moda } from "next/font/google";
import { motion } from "framer-motion";
import hero4 from "@/public/homepage/hero5.png";
import Link from "next/link";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bodoni",
});

// Animation variants for staggering the children smoothly
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15 },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[100dvh] overflow-hidden bg-zinc-950 flex items-center">
      {/* Background Image with a luxury subtle scale-in effect */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }} // Left slightly transparent to let dark background add natural contrast
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={hero4}
          alt="Modern Premium Architecture in Raipur"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Enhanced Contrast Overlay: Smooth dark gradient from bottom/left to protect text readability across all breakpoints */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/0 md:to-transparent" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-16 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-start text-left"
        >
          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            className="text-[#E3C77A] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            A Name You Can Trust
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight ${bodoni.className}`}
          >
            Secure Your Piece <br />
            <span className="italic text-[#E3C77A] font-normal block mt-1">
              of Premium Raipur
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-zinc-300 text-base md:text-lg leading-relaxed font-light"
          >
            Wellworth Group has been offering premium land on interest-free, easy installments to valued customers—building trust across generations.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Primary Action */}
            <Link href="/property" className="w-full sm:w-auto">
              <span className="block bg-[#8FAF9A] hover:bg-[#7a9985] text-zinc-950 font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-xl shadow-[#8FAF9A]/10 hover:shadow-[#8FAF9A]/20 text-center cursor-pointer">
                Discover Properties
              </span>
            </Link>

            {/* Secondary Action */}
           <Link href="/contact">
            <button
              type="button"
              className="bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 rounded-md transition-all duration-300 w-full sm:w-auto text-center font-medium backdrop-blur-md"
            >
              Call Now for Pricing
            </button></Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}