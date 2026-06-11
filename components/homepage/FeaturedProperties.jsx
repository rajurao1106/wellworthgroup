"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "@/public/homepage/project1.png"
import project2 from "@/public/homepage/project2.jpg"
import project3 from "@/public/homepage/project3.jpg"
import project4 from "@/public/homepage/project4.png"
import project5 from "@/public/homepage/project5.png"

const properties = [
  {
    id: 1,
    tag: null,
    highlight: "COMPLETED PROJECT",
    priceInfo: "Price on Request",
    title: "VARDHMAN NAGAR",
    details: "Devpuri, Raipur, Chhattisgarh",
    foot: "Premium Plots",
    image: project1,
  },
  {
    id: 2,
    tag: null,
    highlight: "COMPLETED PROJECT",
    priceInfo: "Exclusive Pricing Available",
    title: "NANES NAGAR",
    details: "Bhatagaon, Raipur",
    foot: "Residential Area",
    image: project2,
  },
  {
    id: 3,
    tag: null,
    highlight: "COMPLETED PROJECT",
    priceInfo: "Call for Best Price",
    title: "ARIHANT VIHAR",
    details: "Dunda, Raipur",
    foot: "Residential Plots",
    image: project3,
  },
  {
    id: 4,
    tag: null,
    highlight: "COMPLETED PROJECT",
    priceInfo: "Price on Request",
    title: "WELLWORTH CITY",
    details: "Hirapur, Raipur",
    foot: "Township Project",
    image: project4,
  },
  {
    id: 5,
    tag: "UPCOMING",
    tagColor: "bg-blue-700",
    highlight: "UPCOMING PROJECT",
    priceInfo: "Booking Opening Soon",
    title: "SHANTIKUNJ PHASE 1 & 2",
    details: "Raipur",
    foot: "New Launch",
    image: project5,
  },
  {
    id: 6,
    tag: "UPCOMING",
    tagColor: "bg-blue-700",
    highlight: "UPCOMING PROJECT",
    priceInfo: "Exclusive Launch",
    title: "WELLWORTH HEIGHT KAMAL VIHAR",
    details: "Kamal Vihar, Raipur",
    foot: "Modern Apartments",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    tag: "UPCOMING",
    tagColor: "bg-blue-700",
    highlight: "UPCOMING PROJECT",
    priceInfo: "Price on Request",
    title: "WELLWORTH TOWER DEVPURI",
    details: "Devpuri, Raipur",
    foot: "Premium Residency",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    tag: "COMMERCIAL",
    tagColor: "bg-purple-700",
    highlight: "UPCOMING COMMERCIAL",
    priceInfo: "Express Interest",
    title: "WELLWORTH MALL",
    details: "Kondagaon",
    foot: "Commercial Spaces",
    image: "https://images.unsplash.com/photo-1477322524744-0eece9e79f40?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 9,
    tag: "MEGA PROJECT",
    tagColor: "bg-green-700",
    highlight: "28.50 ACRE RESIDENTIAL PROJECT",
    priceInfo: "Pre-Launch Offers",
    title: "ACACIA PREMIUM RESIDENTIAL PROJECT",
    details: "Raipur",
    foot: "28.50 Acre Township",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
  }
];

const PropertyCard = ({ property }) => {
  return (
    <div id="properties" className="flex flex-col bg-white shadow-sm border border-gray-100 overflow-hidden h-full">
      <div className="relative h-56 w-full">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        {property.tag && (
          <div className={`absolute top-4 left-4 ${property.tagColor} text-white text-[10px] tracking-wider font-bold px-3 py-1.5 rounded-sm`}>
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
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const handleDotClick = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const displayProperties = [
    properties[currentIndex],
    properties[(currentIndex + 1) % properties.length],
    properties[(currentIndex + 2) % properties.length],
  ];

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
              Our <span className="text-[#7a9985] italic">Projects</span>
            </h2>
            <p className="text-gray-500 text-base mb-4 font-light">
              Discover our completed and upcoming premium developments
            </p>
          </div>
          <button className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-all duration-300 shadow-lg">
            View All
          </button>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 z-10 bg-white p-2 md:p-3 rounded-full shadow-md border border-gray-100 text-[#2b3964] hover:bg-[#f07b46] hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
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