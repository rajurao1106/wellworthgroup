"use client";

import React from "react";
import { motion } from "framer-motion";
import upcoming1 from "@/public/homepage/upcoming1.png";
import upcoming2 from "@/public/homepage/upcoming2.png";
import Link from "next/link";
import project4 from "@/public/homepage/project4.png";
import upcoming3 from "@/public/homepage/upcoming3.jpeg";
import upcoming4 from "@/public/homepage/upcoming4.png";

const Projects = () => {
  const projectsData = [
    { title: "ASHTAVINAYAK SHANTIKUNJ", subtitle: "Phase 1 & 2", badge: "Premium Enclave", image: upcoming2, gridClass: "md:col-span-2 md:row-span-2 min-h-[420px]" },
    { title: "WELLWORTH APARTMENT 1", subtitle: "Kamal Vihar", badge: "Luxury Living", image: project4, gridClass: "md:col-span-2 md:row-span-1 min-h-[260px]" },
    { title: "WELLWORTH APARTMENT 2", subtitle: "Devpuri", badge: "High Rise Residences", image: upcoming4, gridClass: "md:col-span-1 md:row-span-1 min-h-[260px]" },
    { title: "WELLWORTH CITY", subtitle: "Kondagaon", badge: "Commercial Hub", image: upcoming3, gridClass: "md:col-span-1 md:row-span-1 min-h-[260px]" },
    { title: "ACACIA - SEJBAHAR", subtitle: "Premium Residential Project", badge: "28.50 Acres Grandeur", image: upcoming1, gridClass: "md:col-span-2 md:row-span-1 min-h-[260px]" },
  ];

  return (
    <section id="project" className="py-24 px-4 md:px-12 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8FAF9A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#7a9985] uppercase mb-3 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-6xl leading-tight mb-4 font-[Bodoni_Moda] font-bold text-slate-900 tracking-wide">
            Upcoming <span className="text-[#7a9985] font-light italic">Projects</span>
          </h2>
        </div>
        
        <Link href="/projects" className="flex items-center gap-3 bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-4 transition-all duration-300 shadow-xl font-medium text-sm">
          View All Projects
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
        {projectsData.map((item, index) => {
          const resolvedSrc = typeof item.image === "object" ? item.image.src : item.image;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 ${item.gridClass}`}
            >
              {/* This Link now handles the navigation to your dynamic page */}
              <Link href={`/property/${item.title}`} className="absolute inset-0 z-30" />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10 opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 shadow-sm">
                  {item.badge}
                </span>
              </div>

              <motion.img
                src={resolvedSrc}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover absolute inset-0"
              />

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                <h3 className="text-white text-2xl md:text-3xl font-semibold font-[Bodoni_Moda] tracking-wide mb-1">
                  {item.title}
                </h3>
                <p className="text-slate-300 font-light text-sm tracking-wide opacity-90">{item.subtitle}</p>
                <div className="w-12 h-[2px] bg-[#8FAF9A] mt-4" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;