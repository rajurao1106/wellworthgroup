"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gallery1 from "@/public/gallery/gallery1.png";
import gallery2 from "@/public/gallery/gallery2.jpeg";
import gallery3 from "@/public/gallery/gallery3.jpeg";
import gallery4 from "@/public/gallery/gallery4.jpeg";
import gallery5 from "@/public/gallery/gallery5.jpeg";
import gallery6 from "@/public/gallery/gallery6.jpeg";
import gallery7 from "@/public/gallery/gallery7.jpeg";

// Combined Gallery Data
const galleryData = [
  {
    id: 1,
    title: "Raipur Mall Presentation",
    type: "video",
    src: "https://res.cloudinary.com/dphkugrbz/video/upload/v1781181083/RAIPUR-Mall_1_j9szwr.mp4",
  },
  {
    id: 2,
    title: "Well Worth Apartments Deopuri",
    type: "video",
    src: "https://res.cloudinary.com/dphkugrbz/video/upload/v1781181055/Well_Worth_Apartments_Imlidih_Main_Road_Deopuri_Raipur_%EF%B8%8F_9039010310_-_FUSION_INFRA_RAIPUR_480p_h264_ckpkpx.mp4",
  },
  {
    id: 3,
    title: "Vardhman Nagar Development",
    type: "image",
    src: gallery1, 
  },
  {
    id: 4,
    title: "Commercial Corner Plot",
    type: "image",
    src: gallery2,
  },
  {
    id: 5,
    title: "Shantikunj Phase 1 Roadways",
    type: "image",
    src: gallery3,
  },
  {
    id: 6,
    title: "Arihant Vihar Residential Area",
    type: "image",
    src: gallery4,
  },
  {
    id: 7,
    title: "Wellworth City Layout",
    type: "image",
    src: gallery5,
  },
  {
    id: 8,
    title: "ACACIA Premium 28-Acre",
    type: "image",
    src: gallery6,
  },
  {
    id: 9,
    title: "Highway Facing Land",
    type: "image",
    src: gallery7,
  },
];

const PlotGallery = () => {
  // Modal / Lightbox ke liye state manage karna
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 px-4 md:px-8 font-sans bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Project Gallery
          </h2>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                // Agar video hai to click karne par popup khulega
                if (item.type === "video") setActiveVideo(item);
              }}
              className="group relative overflow-hidden bg-gray-100 aspect-square cursor-pointer rounded-lg shadow-sm"
            >
              {item.type === "video" ? (
                <div className="relative w-full h-full">
                  {/* Grid me bina controls ke loop me chalega preview ke liye */}
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  {/* Play Indicator Icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-[#f4f7f5]">
                    <svg className="w-12 h-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 relative z-10"
                  />
                </>
              )}

              {/* Hover Text Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold tracking-wider text-[#82C341] uppercase block mb-1">
                    {item.type}
                  </span>
                  <h3 className="text-white font-medium text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Lightbox / Modal Overlay with Controls */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4 md:p-10"
            onClick={() => setActiveVideo(null)} // Bahar click karne par modal close hoga
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm z-50"
              onClick={() => setActiveVideo(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Video box par click karne se modal close nahi hoga
            >
              <video
                src={activeVideo.src}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                controls  // Yahape native controllers enable kiye hain (Play, Pause, Timeline, Volume, Fullscreen)
                autoPlay
                playsInline
              />
              <div className="p-4 bg-gray-900 text-white border-t border-gray-800">
                <span className="text-xs text-[#82C341] font-semibold uppercase tracking-wider block mb-1">
                  Now Playing
                </span>
                <h3 className="text-lg font-medium">{activeVideo.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PlotGallery;