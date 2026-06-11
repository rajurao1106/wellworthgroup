"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import about from "@/public/homepage/about3.jpg";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="py-20 pt-30 px-4 md:px-8 font-sans bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] md:h-[650px] w-full p-2 border border-gray-200 shadow-sm bg-white group"
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={about}
              alt="About Wellworth Group"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Side: Content & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <div>
              <span className="text-[#8FAF9A] font-semibold text-sm tracking-widest uppercase mb-4 block">
                Wellworth Group
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[Bodoni_Moda] leading-tight text-gray-900">
                Building Affordable Futures Since 1996
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Wellworth Group was founded in 1996 by Rajendra Kumar Jain with
              one guiding principle — affordability. Our first project, Vardhman
              Nagar (1997), was a landmark moment: for the first time in Raipur,
              a company provided financing on land purchase. Since then,
              Wellworth Group has been offering land on easy instalments to
              valued customers without interest, building trust across
              generations.
            </p>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
              <div className="space-y-3">
                <h3 className="text-2xl font-[Bodoni_Moda] text-gray-900">
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  To achieve long-term relationships with customers through
                  affordability — success is measured after delivering land to them.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-[Bodoni_Moda] text-gray-900">
                  Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Customers always choose Wellworth Group for a better future
                  through Right Cost, Right Place & Growth Investment.
                </p>
              </div>
            </div>
          </div>

          <Link href="/contact" className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white font-medium px-8 py-3.5 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#8FAF9A] focus:ring-offset-2 outline-none">
            Know More
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;