"use client";

import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    id: 1,
    title: "GST Registered",
    authority: "Goods and Services Tax",
    location: "Government of India",
    icon: (
      <svg className="w-8 h-8 text-[#8FAF9A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "MCA",
    authority: "Ministry of Corporate Affairs",
    location: "Government of India",
    icon: (
      <svg className="w-8 h-8 text-[#8FAF9A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m22 4v-4M5.68 3.105A6.135 6.135 0 002 8.53v10.457c0 1.127.915 2.012 2.042 2.012h15.916A2.042 2.042 0 0022 18.987V8.53a6.135 6.135 0 00-3.68-5.425l-6-2.571a2.041 2.041 0 00-1.64 0l-6 2.571zM10 13h4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "CG RERA Certified",
    authority: "Chhattisgarh Real Estate Regulatory Authority",
    location: "Raipur, India",
    icon: (
      <svg className="w-8 h-8 text-[#8FAF9A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

// Framer Motion Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Certifications = () => {
  return (
    <section className="py-20 px-4 md:px-8 font-sans bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[1px] bg-[#8FAF9A]"></span>
              <span className="text-[#8FAF9A] font-semibold text-sm tracking-widest uppercase">
                04. Recognitions
              </span>
              <span className="w-12 h-[1px] bg-[#8FAF9A]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-[Bodoni_Moda] text-gray-900">
              Certifications & Approvals
            </h2>
          </motion.div>
        </div>

        {/* Certification Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group rounded-sm"
            >
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-[#8FAF9A]/10 transition-colors duration-300">
                {cert.icon}
              </div>
              
              <h3 className="text-xl font-[Bodoni_Moda] font-semibold text-gray-900 mb-3">
                {cert.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-2 font-medium">
                {cert.authority}
              </p>
              
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 text-gray-400 text-xs uppercase tracking-wider">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {cert.location}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;