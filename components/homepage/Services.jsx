"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Hammer, TrendingUp } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Prime & Strategic Locations",
    desc: "We handpick plots in rapidly developing areas ensuring excellent connectivity, proximity to essential amenities, and a peaceful environment.",
    icon: <MapPin size={28} strokeWidth={1.5} />,
    isHighlighted: true,
  },
  {
    title: "100% Clear Titles & Transparency",
    desc: "Skip the legal headaches. All our plots come with verified, litigation-free documents, and immediate registry options for a secure investment.",
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    isHighlighted: false,
  },
  {
    title: "Ready-to-Build Infrastructure",
    desc: "Our projects come equipped with essential infrastructure like wide paved roads, proper drainage, electricity, and water supply.",
    icon: <Hammer size={28} strokeWidth={1.5} />,
    isHighlighted: false,
  },
  {
    title: "High Return on Investment",
    desc: "Land is a safe asset. By investing in our carefully selected growth corridors, you secure a property that promises rapid appreciation.",
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    isHighlighted: false,
  },
];

export default function WhyChooseUsCards() {
  return (
    <section className="bg-[#F2F4EB] py-20 px-6 font-sans text-[#2D2D2D]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Our commitment goes beyond just selling land. Discover the unique
              benefits that set us apart and ensure you have the best experience
              on your investment journey.
            </motion.p>
          </div>

         
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col group p-8 rounded-[2rem] shadow-sm hover:bg-[#2A3C2A] hover:text-white bg-[#E3E8D7] text-[#2D2D2D]`}
            >
              {/* Icon */}
              <div className="mb-6 opacity-90">{service.icon}</div>

              {/* Text Content */}
              <h3 className="text-xl font-bold mb-4 leading-snug">
                {service.title}
              </h3>
              <p
                className={`text-sm md:text-base mb-8 flex-grow leading-relaxed group-hover:text-white text-gray-600 ${
                  service.isHighlighted ? "" : ""
                }`}
              >
                {service.desc}
              </p>

              {/* Card Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`self-start px-6 py-2.5 rounded-full text-sm text-white font-medium bg-[#8FAF9A] hover:bg-[#7a9985] transition-colors `}
              >
                Know More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Mobile Global Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <button className="bg-[#2A3C2A] text-white px-8 py-3 rounded-full font-medium w-full">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
