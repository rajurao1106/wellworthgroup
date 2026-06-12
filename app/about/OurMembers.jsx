"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import rajendra from "@/public/about/rajendra.jpg"
import rishabh from "@/public/about/devendra.jpeg"
import dinesh from "@/public/about/dinesh.jpeg"
import devendra from "@/public/about/rishabh.jpeg"
import akash from "@/public/about/akash.png"

const teamData = [
  {
    id: 1,
    name: "Rajendra Kumar Jain",
    role: "Founder, Chairman & Managing Director",
    image: rajendra, // Replace with actual image path
  },
  {
    id: 2,
    name: "Devendra Kumar Jain",
    role: "Director",
    image: devendra,
  },
  {
    id: 3,
    name: "Rishabh Jain",
    role: "Chief Operating Officer (COO)",
    image: rishabh,
  },
  {
    id: 4,
    name: "Akash Nayak",
    role: "Business Development Manager",
    image: akash,
  },
  {
    id: 5,
    name: "Dinesh Sahu",
    role: "Relationship Manager",
    image: dinesh,
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
              className="group flex flex-col p-4 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:bg-[#8FAF9A] hover:border-[#1a3626] hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
                {/* Fallback silhouette if image isn't loaded yet. Replace src with your Next/Image component if needed */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-200">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                
                
                 
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500"
                  />
               

              </div>

              {/* Text Information */}
              <div className="pt-5 pb-2 px-1">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300 mt-1.5 font-medium">
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