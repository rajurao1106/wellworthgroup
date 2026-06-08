"use client";

import React from 'react';
import Image from 'next/image';
import { Bodoni_Moda } from "next/font/google";
import { Phone, Calendar, CheckCircle2, MapPin, Layers, ShieldCheck, FileText, IndianRupee, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import plot from "@/public/homepage/plot.jpg";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bodoni",
});

export default function SakuntalaPlotsSection() {
  const projectDetails = [
    { label: 'LOCATION', value: 'Old Dhamtari Road, Raipur', icon: MapPin },
    { label: 'TOTAL PLOTS', value: '96 plots (12 remaining)', icon: Layers, highlight: true },
    { label: 'PROJECT AREA', value: '12 Acres (approx.)', icon: Layers },
    { label: 'REGISTRY', value: '7 Working Days', icon: Clock },
    { label: 'TITLE', value: 'Clear Title – RERA Approved', icon: ShieldCheck },
    { label: 'PRICING', value: 'Call for Best Price', icon: IndianRupee },
  ];

  const advantages = [
    '5 min drive from National Highway junction',
    '10 min from DAV School and Kendriya Vidyalaya',
    '8 min from District Hospital, Raipur',
    '15 min from Raipur Railway Station',
    'Gated community – boundary wall & CC roads',
    'Electricity connection at every plot',
  ];

  const plotSizes = [
    { size: '1,000', label: 'SQ.FT.', status: 'Price on Request' },
    { size: '1,500', label: 'SQ.FT.', status: 'Price on Request' },
    { size: '2,400', label: 'SQ.FT.', status: 'Price on Request' },
  ];

  // Structural Stagger parent variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  // Upward gliding slide for text blocks and groups
  const slideUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#FAF8F5] py-20 px-4 sm:px-8 md:px-16 lg:px-24 font-sans text-[#4A4A4A] antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Mini-Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-[1px] w-8 bg-[#C5A880]"></span>
          <p className="text-xs tracking-[0.2em] text-[#8A8A8A] uppercase font-semibold">
            Ongoing Project — Raipur
          </p>
        </motion.div>

        {/* Main Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E6DEC9]/60"
        >
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] tracking-wide ${bodoni.className}`}>
            Sakuntala <span className="italic text-[#C5A880] font-light">Residential Plots</span>
          </h2>
          <span className="inline-flex items-center bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium px-3 py-1 rounded-full w-fit">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
            Only 12 Plots Remaining
          </span>
        </motion.div>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative group w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-gray-100 rounded-sm shadow-sm transition-all duration-300 hover:shadow-md">
              <Image 
                src={plot}
                alt="Sakuntala Golden Sunset Field" 
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={true}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            <p className="text-sm leading-relaxed text-[#666666] pt-2">
              Sakuntala stands as Wellworth&apos;s premium flagship development along the rapidly growing Old Dhamtari Road corridor. Every plot features prompt 7-day processing timelines and structurally robust, immediate-construction provisions.
            </p>
          </motion.div>

          {/* Right Column: Detailed Specifications & Options */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-10"
          >
            
            {/* Info Table Grid */}
            <motion.div variants={slideUpVariants}>
              <h4 className="text-xs tracking-widest text-[#9A8A78] font-bold uppercase mb-4 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#C5A880]" /> Project Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E6DEC9] border border-[#E6DEC9] rounded-sm overflow-hidden shadow-xs">
                {projectDetails.map((detail, index) => {
                  const IconComponent = detail.icon;
                  return (
                    <div 
                      key={index} 
                      className={`p-4 transition-colors duration-200 hover:bg-[#FDFCFB] ${
                        detail.highlight ? 'bg-[#FAF3E6]' : 'bg-[#FAF7F2]'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <IconComponent className={`w-4 h-4 mt-0.5 ${detail.highlight ? 'text-amber-700' : 'text-[#9A8A78]'}`} />
                        <div>
                          <span className="block text-[10px] tracking-wider text-[#9A8A78] font-bold uppercase mb-0.5">
                            {detail.label}
                          </span>
                          <span className={`block text-sm font-semibold ${detail.highlight ? 'text-amber-900 font-bold' : 'text-[#222222]'}`}>
                            {detail.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Location Advantages Grid List */}
            <motion.div variants={slideUpVariants}>
              <h4 className="text-xs tracking-widest text-[#9A8A78] font-bold uppercase mb-4 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" /> Premium Location Advantages
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-[#EFEAE2]/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#96A796] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#4A4A4A] font-medium leading-tight">
                      {advantage}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Available Plot Sizes Row */}
            <motion.div variants={slideUpVariants}>
              <h4 className="text-xs tracking-widest text-[#9A8A78] font-bold uppercase mb-4">
                Available Unit Configurations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#EFEAE2]/60 rounded-sm border border-[#E6DEC9]/40 overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-[#E6DEC9]/60">
                {plotSizes.map((plotItem, index) => (
                  <div key={index} className="p-4 text-center sm:text-left transition-colors hover:bg-[#EFEAE2]/90">
                    <div className="flex flex-baseline justify-center sm:justify-start items-baseline gap-1">
                      <span className="text-2xl font-bold font-serif text-[#5E4B3C]">
                        {plotItem.size}
                      </span>
                      <span className="text-[10px] font-bold text-[#8A7A6B]">
                        {plotItem.label}
                      </span>
                    </div>
                    <span className="block text-[10px] tracking-wider text-[#9A8A78] font-semibold mt-1 uppercase">
                      {plotItem.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Modernized Interactive Call To Actions */}
            <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#E6DEC9]/40">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-[#839483] hover:bg-[#6E7F6E] text-white py-3.5 px-6 text-xs uppercase tracking-widest font-bold rounded-sm shadow-md shadow-emerald-900/5 transition-colors duration-200 flex items-center justify-center gap-2.5 group"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
                Call Now to Request Pricing
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-transparent border-2 border-[#839483] text-[#637463] hover:bg-[#839483] hover:text-white py-3.5 px-6 text-xs uppercase tracking-widest font-bold rounded-sm transition-colors duration-200 flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-4 h-4 text-[#839483] group-hover:text-white transition-colors" />
                Schedule Site Visit
              </motion.button>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}