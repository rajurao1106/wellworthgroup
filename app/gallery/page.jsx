"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gallery1 from "@/public/gallery/gallery1.png"
import gallery2 from "@/public/gallery/gallery2.jpeg"
import gallery3 from "@/public/gallery/gallery3.jpeg"
import gallery4 from "@/public/gallery/gallery4.jpeg"
import gallery5 from "@/public/gallery/gallery5.jpeg"
import gallery6 from "@/public/gallery/gallery6.jpeg"
import gallery7 from "@/public/gallery/gallery7.jpeg"


// --- Plot/Land specific Gallery Data ---
const galleryData = [
  {
    id: 1,
    title: "Vardhman Nagar Development",
    category: "Completed",
    // Replace with your actual image paths
    src: "/gallery/plot-1.jpg", 
  },
  {
    id: 2,
    title: "Commercial Corner Plot",
    category: "Commercial",
    src: "/gallery/plot-2.jpg",
  },
  {
    id: 3,
    title: "Shantikunj Phase 1 Roadways",
    category: "Upcoming",
    src: "/gallery/plot-3.jpg",
  },
  {
    id: 4,
    title: "Arihant Vihar Residential Area",
    category: "Residential",
    src: "/gallery/plot-4.jpg",
  },
  {
    id: 5,
    title: "Wellworth City Layout",
    category: "Completed",
    src: "/gallery/plot-5.jpg",
  },
  {
    id: 6,
    title: "ACACIA Premium 28-Acre",
    category: "Upcoming",
    src: "/gallery/plot-6.jpg",
  },
  {
    id: 7,
    title: "Highway Facing Land",
    category: "Commercial",
    src: "/gallery/plot-7.jpg",
  },
  {
    id: 8,
    title: "Nanes Nagar Corner Plot",
    category: "Residential",
    src: "/gallery/plot-8.jpg",
  },
];

// Categories tailored for a Plots/Land business
const categories = [
  "All",
  "Residential",
  "Commercial",
  "Completed",
  "Upcoming",
];

const PlotGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return galleryData;
    }
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-20 px-4 md:px-8 font-sans bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Our Project Gallery
          </h2>

          {/* Filter Menu (Matches the screenshot design) */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 border-b border-gray-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-4 text-sm md:text-base font-medium transition-all duration-300 relative ${
                  activeCategory === category
                    ? "text-[#82C341]" // Active text color (Green)
                    : "text-gray-500 hover:text-gray-900" // Inactive text color
                }`}
              >
                {category}
                {/* Active Bottom Border Line */}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#82C341]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden bg-gray-100 aspect-square cursor-pointer"
              >
                {/* Fallback Placeholder (Used if images aren't added to public folder yet) */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-[#f4f7f5]">
                  <svg className="w-12 h-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Actual Image Component (Uncomment src when images are ready) */}
                {/* <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 relative z-10"
                /> 
                */}

                {/* Optional Subtle Hover Overlay for text readability (Remove if you want it exactly like the pure image grid in the screenshot) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
                  <h3 className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State Fallback */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No images available in this category yet.
          </div>
        )}

      </div>
    </section>
  );
};

export default PlotGallery;