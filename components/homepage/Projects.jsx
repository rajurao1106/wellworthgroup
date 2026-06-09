"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  // State to store the URL of the image to be shown in the modal
  const [selectedImage, setSelectedImage] = useState(null);

  const designs = [
    {
      title: "Living Room",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      size: "md:col-span-2 md:row-span-2 h-[400px]",
    },
    {
      title: "Master Bedroom",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400",
      size: "md:col-span-1 md:row-span-2 h-[400px]",
    },
    {
      title: "False Ceiling",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      size: "md:col-span-1 md:row-span-2 h-[400px]",
    },
    {
      title: "Dining Area",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=400",
      size: "md:col-span-1 md:row-span-2 h-[350px]",
    },
    {
      title: "Modular Kitchen",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      size: "md:col-span-2 md:row-span-2 h-[350px]",
    },
    {
      title: "Wardrobe",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400",
      size: "md:col-span-1 md:row-span-2 h-[350px]",
    },
  ];

  return (
    <section id="project" className="pt-24 relative">
      {/* Header Section */}
      <div className="flex flex-col px-8 max-lg:px-4 md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-6xl max-lg:text-4xl leading-tight mb-4 font-[Bodoni_Moda] font-semibold text-slate-900 tracking-wide">
           Our Recent  <span className="text-[#7a9985] italic">Project</span>
          </h2>
          <p className="text-gray-500 text-base mb-4 font-light">
            Give your home a new look with these real estate ideas curated for
            you
          </p>
        </div>
        <button className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-all duration-300 shadow-lg">
          View All
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 h-screen max-lg:h-[150vh] max-lg:gap-1 md:grid-cols-4">
        {designs.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => setSelectedImage(item.image)} // Set image on click
            className={`group relative overflow-hidden h-full shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer ${item.size}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <motion.img
              src={item.image}
              alt={item.title}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)} // Close when clicking background
          >
            {/* Close Button */}
            <button
              className="absolute top-10 right-10 text-white text-4xl hover:text-gray-300 transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            {/* Big Image */}
            <motion.img
              key={selectedImage}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Stop bubble closing modal
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;