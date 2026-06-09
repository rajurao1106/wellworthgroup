"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Team Data based on your provided structure
const teamData = [
  {
    id: 1,
    name: "Rajendra Kumar Jain",
    role: "Founder, Chairman & Managing Director",
    image: "/team/rajendra.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Devendra Kumar Jain",
    role: "Director",
    image: "/team/devendra.jpg",
  },
  {
    id: 3,
    name: "Rishabh Jain",
    role: "Chief Operating Officer (COO)",
    image: "/team/rishabh.jpg",
  },
  {
    id: 4,
    name: "Akash Nayak",
    role: "Business Development Manager",
    image: "/team/akash.jpg",
  },
  {
    id: 5,
    name: "Dinesh Sahu",
    role: "Relationship Manager",
    image: "/team/dinesh.jpg",
  },
];

// Framer motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OurMembers = () => {
  return (
    <section className="py-20 px-4 md:px-8 font-sans bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header (Matching the image) */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            {/* Small brand icon from the image */}
            <div className="flex -space-x-1">
              <div className="w-4 h-4 rounded-full bg-[#c5f04a]"></div>
              <div className="w-4 h-4 rounded-r-full bg-[#1a3626]"></div>
            </div>
            <span className="text-gray-900 font-semibold text-sm">
              Our Team
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Meet Our Expert Team
          </motion.h2>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group flex flex-col p-4 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:bg-[#1a3626] hover:border-[#1a3626] hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
                {/* Fallback silhouette if image isn't loaded yet. Replace src with your Next/Image component if needed */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-200">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                
                {/* 
                  Uncomment this when you have the actual images in your public folder 
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                */}

                {/* Social Hover Panel (Slides in from the right) */}
                <div className="absolute right-0 bottom-6 translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-[#c5f04a] py-3 px-2.5 rounded-l-xl flex flex-col gap-4 shadow-lg z-10">
                  {/* Facebook */}
                  <a href="#" className="text-[#1a3626] hover:text-black transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="#" className="text-[#1a3626] hover:text-black transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  {/* Pinterest */}
                  <a href="#" className="text-[#1a3626] hover:text-black transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.923 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.55.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="text-[#1a3626] hover:text-black transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>

              {/* Text Information */}
              <div className="pt-5 pb-2 px-1">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-[#8FAF9A] transition-colors duration-300 mt-1.5 font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default OurMembers;