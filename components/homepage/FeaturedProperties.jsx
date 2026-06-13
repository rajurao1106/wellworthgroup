"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link"; 
// 1. Next.js Image component ko import karein
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "@/public/homepage/project1.png";
import project2 from "@/public/homepage/project2.jpg";
import project3 from "@/public/homepage/project8.png";
import project4 from "@/public/homepage/project4.png";
import project6 from "@/public/homepage/project6.png";
import project7 from "@/public/homepage/project7.png";
import project9 from "@/public/homepage/project9.png";

const properties = [
  {
    id: 1,
    tag: null,
    highlight: "COMPLETED PROJECT",
    priceInfo: "Price on Request",
    title: "VARDHMAN NAGAR",
    details: "Devpuri, Raipur, Chhattisgarh",
    foot: "Residential Township | Premium Bungalows | Gated Security, Wide Roads, Parks, Family Community",
    image: project6,
  },
  {
    id: 2,
    tag: null,
    highlight: "COMPLETED PROJECT",
    priceInfo: "Call for Best Price",
    title: "ARIHANT VIHAR",
    details: "Dunda, Raipur, Chhattisgarh",
    foot: "Residential Township | Residential Plots / Villas | Developed roads, drainage, electrification",
    image: project3,
  },
  {
    id: 3,
    tag: null,
    highlight: "COMPLETED PROJECT",
    priceInfo: "Price on Request",
    title: "Wellworth Apartment 1",
    details: "Devpuri, Raipur, Chhattisgarh",
    foot: "Integrated Township | Residential Plots & Homes | Large-scale development with community spaces & parks",
    image: project7,
  },
  {
    id: 4,
    tag: null,
    highlight: "COMPLETED PROJECT",
    priceInfo: "Exclusive Pricing Available",
    title: "NANESH NAGAR",
    details: "Bhatagaon, Raipur, Chhattisgarh",
    foot: "Residential Township | Residential Plots / Homes | Affordable Quality Living for Mid-segment families",
    image: project9,
  },
];

const PropertyCard = ({ property }) => {
  return (
    <div
      id="properties"
      className="flex flex-col bg-white shadow-sm border border-gray-100 overflow-hidden h-full"
    >
      <div className="relative h-56 w-full">
        {/* 2. img ki jagah Next.js Image component fill attribute ke sath */}
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {property.tag && (
          <div
            className={`absolute top-4 left-4 ${property.tagColor} text-white text-[10px] tracking-wider font-bold px-3 py-1.5 rounded-sm z-10`}
          >
            {property.tag}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <p className="text-[#7a9985] text-[10px] font-bold tracking-wider mb-2 uppercase">
          {property.highlight}
        </p>
        <h3 className="text-[19px] font-bold text-gray-800 mb-1 leading-tight">
          {property.priceInfo}
        </h3>
        <p className="text-gray-800 text-[13px] font-bold mb-1 uppercase tracking-wide">
          {property.title}
        </p>
        <p className="text-gray-500 text-[12px] leading-relaxed">
          {property.details}
        </p>
        <p className="text-gray-500 text-[12px] mb-6 leading-relaxed">
          {property.foot}
        </p>

        <div className="mt-auto flex justify-end items-center pt-4 border-t border-gray-100">
          <Link href={`/property/${property.title}`} className="w-full">
            <button className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white w-full py-2 transition-all duration-300 shadow-lg">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + properties.length) % properties.length,
    );
  };

  const handleDotClick = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // responsive layout checks length to avoid errors when data has fewer items than grid columns
  const displayProperties = properties
    .map((_, i) => properties[(currentIndex + i) % properties.length])
    .slice(0, Math.min(3, properties.length));

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-[#f8fafe] py-16 min-h-screen font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 relative">
        <div className="flex flex-col px-8 max-lg:px-4 md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-6xl max-lg:text-4xl leading-tight mb-4 font-[Bodoni_Moda] font-semibold text-slate-900 tracking-wide">
              Our Completed{" "}
              <span className="text-[#7a9985] italic">Projects</span>
            </h2>
            <p className="text-gray-500 text-base mb-4 font-light">
              Discover our completed premium developments
            </p>
          </div>
          <Link href={"/property"} className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-all duration-300 shadow-lg">
            View All
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 z-10 bg-white p-2 md:p-3 rounded-full shadow-md border border-gray-100 text-[#2b3964] hover:bg-[#f07b46] hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              {displayProperties.map((property, index) => (
                <motion.div
                  key={`${property.id}-${currentIndex}-${index}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`
                    ${index > 0 ? "hidden md:block" : "block"} 
                    ${index > 1 ? "md:hidden lg:block" : ""}
                    h-full
                  `}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 z-10 bg-white p-2 md:p-3 rounded-full shadow-md border border-gray-100 text-[#2b3964] hover:bg-[#f07b46] hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mt-10">
          {properties.map((_, idx) => (
            <span
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                currentIndex === idx ? "bg-[#e3c77a] w-4" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
