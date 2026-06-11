"use client";

import React from "react";
import cta2 from "@/public/homepage/cta5.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA2() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-[100dvh] lg:min-h-screen w-full flex items-center py-20 lg:py-12"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          width={1920}
          height={1080}
          priority
          src={cta2}
          className="w-full h-full object-cover"
          alt="real estate background"
        />
      </div>

      {/* Overlay - Darkened slightly for better contrast against the form */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-[Bodoni_Moda] leading-tight">
            Get Pricing &
            <br className="hidden lg:block" /> Book a Site Visit.
          </h1>
          <p className="max-w-xl text-gray-200 text-base md:text-lg">
            Call us or WhatsApp to get plot pricing, availability, and book a
            free site visit. 7 days a week. No commitment needed.
          </p>

          {/* Buttons: Stacked on mobile, side-by-side on sm+ screens */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto justify-center lg:justify-start">
            <Link href="/property">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-colors duration-300 shadow-lg w-full sm:w-auto text-center"
              >
                Discover Properties
              </motion.button>
            </Link>
          <Link href="/contact">
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-colors duration-300 shadow-lg w-full sm:w-auto text-center"
            >
              Call Now for Pricing
            </motion.button></Link>
          </div>
        </motion.div>

        {/* Right Column: Enquiry Form */}
        <div className="flex justify-center lg:justify-end w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-white p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-md"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-[Bodoni_Moda] text-center">
              Enquire Now
            </h3>
            <form className="flex flex-col gap-4 md:gap-5">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FAF9A] text-gray-800"
                  required
                />
              </div>

              {/* Mobile Number Input */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FAF9A] text-gray-800"
                  required
                />
              </div>

              {/* Project Selection Dropdown */}
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project of Interest
                </label>
                <select
                  id="project"
                  name="project"
                  defaultValue=""
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8FAF9A] text-gray-800 bg-white"
                  required
                >
                  <option value="" disabled>
                    Not sure — show me all options
                  </option>
                  <option value="sakuntala">
                    Sakuntala — Old Dhamtari Road, Raipur
                  </option>
                  <option value="wellworth-heights">
                    Wellworth Heights — VIP Road Corridor, Raipur
                  </option>
                  <option value="wellworth-green">
                    Wellworth Green Valley — Ring Road No. 1, Raipur
                  </option>
                  <option value="wellworth-prestige">
                    Wellworth Prestige — Kachna, Raipur
                  </option>
                  <option value="wellworth-amanaka">
                    Wellworth Amanaka — Amanaka Road, Raipur
                  </option>
                  <option value="wellworth-sarona">
                    Wellworth Sarona — Sarona, Raipur
                  </option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 rounded-md transition-colors duration-300 shadow-md text-sm md:text-base font-medium uppercase tracking-wider w-full"
              >
                Get in Touch
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
