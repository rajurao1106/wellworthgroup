"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import upcoming1 from "@/public/homepage/upcoming1.png";
import upcoming2 from "@/public/homepage/upcoming2.png";
import Link from "next/link";
import project4 from "@/public/homepage/project4.png"
import upcoming3 from "@/public/homepage/upcoming3.jpeg"
import project9 from "@/public/homepage/project9.png"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: "Shantikunj",
      subtitle: "Phase 1 & 2",
      badge: "Premium Enclave",
      image:upcoming2,
      gridClass: "md:col-span-2 md:row-span-2 min-h-[420px]",
    },
    {
      title: "Wellworth apartment 1",
      subtitle: "Kamal Vihar",
      badge: "Luxury Living",
      image: project4,
      gridClass: "md:col-span-2 md:row-span-1 min-h-[260px]",
    },
    {
      title: "Wellworth Tower",
      subtitle: "Devpuri",
      badge: "High Rise Residences",
      image: project9,
      gridClass: "md:col-span-1 md:row-span-1 min-h-[260px]",
    },
    {
      title: "Wellworth Mall",
      subtitle: "Kondagaon",
      badge: "Commercial Hub",
      image:upcoming3,
      gridClass: "md:col-span-1 md:row-span-1 min-h-[260px]",
    },
    {
      title: "ACACIA",
      subtitle: "Premium Residential Project",
      badge: "28.50 Acres Grandeur",
      image: upcoming1, // Next.js StaticImageData Object
      gridClass: "md:col-span-2 md:row-span-1 min-h-[260px]",
    },
  ];

  return (
    <section id="project" className="py-24 px-4 md:px-12 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Subtle Accent Decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8FAF9A]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#7a9985] uppercase mb-3 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl leading-tight mb-4 font-[Bodoni_Moda] font-bold text-slate-900 tracking-wide">
            Upcoming <span className="text-[#7a9985] font-light italic">Projects</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed">
            Unlock high-growth architectural landmarks designed to elevate modern lifestyle standards and secure generation-defining value.
          </p>
        </div>
        
        <a 
          href="/projects"
          className="group flex items-center gap-3 bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-4 rounded-none transition-all duration-300 shadow-xl hover:shadow-2xl font-medium tracking-wide text-sm whitespace-nowrap"
        >
          View All Projects
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1.5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Modern Bento Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
        {projectsData.map((item, index) => {
          // Resolve string URL out of static image objects safely
          const resolvedSrc = typeof item.image === "object" ? item.image.src : item.image;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1.0] }}
              onClick={() => setSelectedProject(item)}
              className={`group relative overflow-hidden bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 ${item.gridClass}`}
            >
              {/* Soft Ambient Shadow Layer inside Card */}
              <Link href={"/property"} className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10 opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
              
              {/* Top Badge Overlay */}
              <div className="absolute top-4 left-4 z-20">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 shadow-sm">
                  {item.badge}
                </span>
              </div>

              {/* Smooth Scale Zoom Image */}
              <motion.img
                src={resolvedSrc}
                alt={`${item.title} ${item.subtitle}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />

              {/* Micro-Interactive Title Component */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end h-1/2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl md:text-3xl font-semibold font-[Bodoni_Moda] tracking-wide mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-300 font-light text-sm tracking-wide opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                  {item.subtitle}
                </p>
                
                {/* Animated reveal hint */}
                <div className="w-0 group-hover:w-12 h-[2px] bg-[#8FAF9A] mt-4 transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* --- Elevated Glassmorphic Lightbox Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 md:p-12"
            onClick={() => setSelectedProject(null)}
          >
            {/* Accessible Native Control Hint */}
            <button
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/60 hover:text-white transition-colors p-3 z-50 rounded-full hover:bg-white/10"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Immersive Image Canvas Container */}
            <div className="relative max-w-5xl max-h-[75vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={typeof selectedProject.image === "object" ? selectedProject.image.src : selectedProject.image}
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 260 }}
                src={typeof selectedProject.image === "object" ? selectedProject.image.src : selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            {/* Modal Bottom Text Sync */}
            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-center mt-6 max-w-xl pointer-events-none"
            >
              <h4 className="text-white font-[Bodoni_Moda] text-2xl md:text-3xl font-medium mb-1">
                {selectedProject.title}
              </h4>
              <p className="text-slate-400 text-sm tracking-wider">
                {selectedProject.subtitle} — {selectedProject.badge}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;