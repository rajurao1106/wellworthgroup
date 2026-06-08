"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    step: "01",
    title: "Prime & Strategic Locations",
    desc: "We handpick plots in rapidly developing areas ensuring excellent connectivity, proximity to essential amenities, and a peaceful environment for your future home or business.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
  },
  {
    step: "02",
    title: "100% Clear Titles & Transparency",
    desc: "Skip the legal headaches. All our plots come with verified, litigation-free documents, clear titles, and immediate registry options for a completely secure investment.",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200",
  },
  {
    step: "03",
    title: "Ready-to-Build Infrastructure",
    desc: "Our projects come equipped with essential infrastructure like wide paved roads, proper drainage systems, electricity, and water supply, so you can start building immediately.",
    image:
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=1200",
  },
  {
    step: "04",
    title: "High Return on Investment",
    desc: "Land is one of the safest assets. By investing in our carefully selected growth corridors, you secure a property that promises rapid appreciation and long-term financial growth.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200",
  },
];

const ServiceCard = ({
  service,
  index,
  progress,
  range,
  targetScale,
  isMobile,
}) => {
  // Mobile par bhi scaling effect subtle rakha hai
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    /* 1. 'sticky' aur 'top-0' ko hamesha rakha hai taaki mobile par bhi effect dikhe.
       2. 'h-screen' ensures ki card viewport ke saath move kare.
    */
    <div className="w-full flex items-start justify-center h-screen sticky top-0 px-4 md:px-0">
      <motion.div
        style={{
          scale,
          // Mobile par 'top' margin thoda kam rakha hai (20px vs 35px)
          top: `calc(10% + ${index * (isMobile ? 20 : 35)}px)`,
        }}
        className="relative w-full max-w-6xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] md:min-h-[550px] border border-gray-100"
      >
        {/* Right Section (Image): Mobile par pehle dikhane ke liye order-1 */}
        <div className="flex-1 relative h-48 md:h-auto overflow-hidden order-1 md:order-2 group">
          <motion.img
            src={service.image}
            alt={service.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute max-lg:relative inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Left Section (Text Content): Mobile par baad mein order-2 */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center items-start order-2 md:order-1">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl md:text-8xl font-light text-[#E3C77A] mb-2"
          >
            {service.step}
          </motion.span>

          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl font-[Bodoni_Moda] md:text-4xl font-bold text-[#333] leading-tight mb-4"
          >
            {service.title}
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mb-6 text-sm md:text-lg leading-relaxed max-w-md"
          >
            {service.desc}
          </motion.p>

          <motion.button 
            whileTap={{ scale: 0.97 }}
            className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-colors duration-300 shadow-lg text-sm md:text-base"
          >
            Know More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesStackSection() {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative bg-[#F6F6F4]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-[Bodoni_Moda] md:text-6xl font-bold text-[#2D2D2D] leading-tight"
        >
          Why <span className="text-[#E3C77A] italic">Choose Us</span> For{" "}
          <br className="hidden lg:block" />
          Your Next Plot Investment
        </motion.h2>
      </div>

      {/* Cards Container */}
      <div className="pb-[10vh]">
        {services.map((service, i) => {
          // Cards ek ke upar ek stack hote waqt thode chhote honge
          const targetScale = 1 - (services.length - i) * 0.05;
          return (
            <ServiceCard
              key={`p_${i}`}
              index={i}
              service={service}
              progress={scrollYProgress}
              // Is logic se har card apne turn par scale hoga
              range={[i * (1 / services.length), 1]}
              targetScale={targetScale}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </div>
  );
}