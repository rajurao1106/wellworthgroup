"use client";

import React from "react";
import about from "@/public/homepage/about3.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const About3 = () => {
  
  const stats = [
    { value: "2900+", label: "Members Served" },
    { value: "30+", label: "Years (Since 1996)" },
    { value: "300 Ac+", label: "Land Developed" },
  { value: "14", label: "Total Projects (9 Comp. + 5 Upc.)" },
  ];

  return (
    <div id="about" className="p-4 py-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 max-lg:gap-8 items-center">
        {/* Left Side (Visually): Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 grid grid-cols-1 gap-2 h-[400px] md:h-[750px]"
        >
          <div
            className={`relative group overflow-hidden flex justify-between h-full`}
          >
            <h1 className="relative py-10 font-light tracking-widest items-end">
              <p className="absolute text-6xl max-lg:text-5xl font-bold font-[Bodoni_Moda] text-[#E3C77A]">
                Premium Plots
              </p>
              <p className="[writing-mode:vertical-lr] text-xs max-lg:text-[8px] h-[100%] text-right py-10 max-lg:py-8">
                https://www.wellworthgroup.com
              </p>
            </h1>
            <Image
              height={1000}
              width={1000}
              priority
              src={about}
              alt={"About Wellworth Group"}
              className="w-full h-full border border-gray-300 p-2 object-cover transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Right Side (Visually): About & Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <span className="text-[#7a9985] text-sm tracking-widest uppercase">
              About Wellworth Group
            </span>
            <br />
            <br />
            <h1 className="text-5xl font-[Bodoni_Moda] md:text-7xl leading-16">
              <p>30+ Years in</p>
              <span className="relative">Raipur</span>
              <span className="italic max-lg:left-10 font-[Playfair_Display] relative text-[#7a9985] ">
                <br /> Real Estate
              </span>
            </h1>
            <p className="text-gray-400 leading-relaxed">
              We are a Raipur-based residential plot developer with over 10
              years of experience in Chhattisgarh real estate. Every plot we
              sell comes with a clear title, complete documentation, and ready
              infrastructure — no delays, no hidden charges.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our office is at Currency Tower, 3rd Floor, VIP Road, Raipur. Walk
              in anytime — our team will show you layout maps, available plots,
              and pricing on the spot. Free site visits arranged 7 days a week.
            </p>
          </div>

          {/* New Stats Grid Implementation */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-3xl lg:text-4x  font-bold text-[#E3C77A] font-[Bodoni_Moda]">
                  {stat.value}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link href="/about" className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-all duration-300 shadow-lg mt-4">
            Know More
          </Link>
        </motion.div>

        {/* Note: Masonry Gallery commented out in original logic */}
        {/* Yahan grid-cols-2 kiya hai taaki mobile pe bhi 2 side-by-side dikhe */}
      </div>
    </div>
  );
};

export default About3;