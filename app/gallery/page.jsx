"use client";
import { useState } from "react";
import Image from "next/image";

// Imports - Assuming these are correctly paths from your file structure
import ashtvinaykshantikunj1 from "@/public/gallery/ashtvinaykshantikunj1.jpeg";
import ashtvinaykshantikunj2 from "@/public/gallery/ashtvinaykshantikunj2.jpeg";
import ashtvinaykshantikunj3 from "@/public/gallery/ashtvinaykshantikunj3.jpeg";
import ashtvinaykshantikunj4 from "@/public/gallery/ashtvinaykshantikunj4.jpeg";
import ashtvinaykshantikunj5 from "@/public/gallery/ashtvinaykshantikunj5.jpeg";
import ashtvinaykshantikunj6 from "@/public/gallery/ashtvinaykshantikunj6.jpeg";
import bhatagaonnaneshnagar1 from "@/public/gallery/bhatagaonnaneshnagar1.png";
import bhatagaonnaneshnagar2 from "@/public/gallery/bhatagaonnaneshnagar2.png";
import dundaarihantvihar1 from "@/public/gallery/dundaarihantvihar1.png";
import dundaarihantvihar2 from "@/public/gallery/dundaarihantvihar2.png";
import hirapurplot1 from "@/public/gallery/hirapurplot1.png";
import hirapurplot2 from "@/public/gallery/hirapurplot2.png";
import hirapurplot3 from "@/public/gallery/hirapurplot3.png";
import hirapurplot4 from "@/public/gallery/hirapurplot4.jpeg";
import hirapurplot5 from "@/public/gallery/hirapurplot5.jpeg";
import vardhmannagardevpuri1 from "@/public/gallery/vardhmannagardevpuri1.png";
import vardhmannagardevpuri2 from "@/public/gallery/vardhmannagardevpuri2.png";
import vardhmannagardevpuri3 from "@/public/gallery/vardhmannagardevpuri3.png";
import wellworthapartment1 from "@/public/gallery/wellworthapartment1.png";
import wellworthapartment2 from "@/public/gallery/wellworthapartment2.png";

const mediaData = [
  {
    id: 1,
    type: "image",
    category: "Projects",
    src: ashtvinaykshantikunj1,
    alt: "Ashtvinayk Shantikunj",
    title: "Ashtvinayk Shantikunj",
  },
  {
    id: 2,
    type: "image",
    category: "Projects",
    src: ashtvinaykshantikunj2,
    alt: "Ashtvinayk Shantikunj",
    title: "Ashtvinayk Shantikunj",
  },
  {
    id: 3,
    type: "image",
    category: "Projects",
    src: ashtvinaykshantikunj3,
    alt: "Ashtvinayk Shantikunj",
    title: "Ashtvinayk Shantikunj",
  },
  {
    id: 4,
    type: "image",
    category: "Projects",
    src: ashtvinaykshantikunj4,
    alt: "Ashtvinayk Shantikunj",
    title: "Ashtvinayk Shantikunj",
  },
  {
    id: 5,
    type: "image",
    category: "Projects",
    src: ashtvinaykshantikunj5,
    alt: "Ashtvinayk Shantikunj",
    title: "Ashtvinayk Shantikunj",
  },
  {
    id: 6,
    type: "image",
    category: "Projects",
    src: ashtvinaykshantikunj6,
    alt: "Ashtvinayk Shantikunj",
    title: "Ashtvinayk Shantikunj",
  },
  {
    id: 7,
    type: "image",
    category: "Projects",
    src: bhatagaonnaneshnagar1,
    alt: "Nanesh Nagar",
    title: "Nanesh Nagar",
  },
  {
    id: 8,
    type: "image",
    category: "Projects",
    src: bhatagaonnaneshnagar2,
    alt: "Nanesh Nagar",
    title: "Nanesh Nagar",
  },
  {
    id: 9,
    type: "image",
    category: "Projects",
    src: dundaarihantvihar1,
    alt: "Arihant Vihar",
    title: "Arihant Vihar",
  },
  {
    id: 10,
    type: "image",
    category: "Projects",
    src: dundaarihantvihar2,
    alt: "Arihant Vihar",
    title: "Arihant Vihar",
  },
  {
    id: 11,
    type: "image",
    category: "Projects",
    src: hirapurplot1,
    alt: "Hirapur Plots",
    title: "Hirapur Plots",
  },
  {
    id: 12,
    type: "image",
    category: "Projects",
    src: hirapurplot2,
    alt: "Hirapur Plots",
    title: "Hirapur Plots",
  },
  {
    id: 13,
    type: "image",
    category: "Projects",
    src: hirapurplot3,
    alt: "Hirapur Plots",
    title: "Hirapur Plots",
  },
  {
    id: 14,
    type: "image",
    category: "Projects",
    src: hirapurplot4,
    alt: "Hirapur Plots",
    title: "Hirapur Plots",
  },
  {
    id: 15,
    type: "image",
    category: "Projects",
    src: hirapurplot5,
    alt: "Hirapur Plots",
    title: "Hirapur Plots",
  },
  {
    id: 16,
    type: "image",
    category: "Projects",
    src: vardhmannagardevpuri1,
    alt: "Vardhman Nagar",
    title: "Vardhman Nagar",
  },
  {
    id: 17,
    type: "image",
    category: "Projects",
    src: vardhmannagardevpuri2,
    alt: "Vardhman Nagar",
    title: "Vardhman Nagar",
  },
  {
    id: 18,
    type: "image",
    category: "Projects",
    src: vardhmannagardevpuri3,
    alt: "Vardhman Nagar",
    title: "Vardhman Nagar",
  },
  {
    id: 19,
    type: "image",
    category: "Projects",
    src: wellworthapartment1,
    alt: "Wellworth Apartment",
    title: "Wellworth Apartment",
  },
  {
    id: 20,
    type: "image",
    category: "Projects",
    src: wellworthapartment2,
    alt: "Wellworth Apartment",
    title: "Wellworth Apartment",
  },
  {
    id: 21,
    type: "video",
    category: "Videos",
    src: "https://res.cloudinary.com/dphkugrbz/video/upload/v1781181083/RAIPUR-Mall_1_j9szwr.mp4",
    alt: "Site Walkthrough",
    title: "Site Walkthrough",
  },
  {
    id: 22,
    type: "video",
    category: "Videos",
    src: "https://res.cloudinary.com/dphkugrbz/video/upload/v1781181055/Well_Worth_Apartments_Imlidih_Main_Road_Deopuri_Raipur_%EF%B8%8F_9039010310_-_FUSION_INFRA_RAIPUR_480p_h264_ckpkpx.mp4",
    alt: "Site Walkthrough",
    title: "Site Walkthrough",
  },
];

const categories = ["All", "Projects", "Videos"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredMedia =
    activeTab === "All"
      ? mediaData
      : mediaData.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 lg:pt-30 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our Gallery
          </h2>
          <div className="w-20 h-1.5 bg-[#8FAF9A] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our premium collection of residential plots and modern
            apartments in prime locations.{" "}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                activeTab === cat
                  ? "bg-[#8FAF9A] text-white border-[#8FAF9A] shadow-xl shadow-[#8FAF9A]/20"
                  : "bg-transparent text-gray-600 border-gray-200 hover:border-[#8FAF9A] hover:text-[#8FAF9A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="group bg-white p-3 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#8FAF9A]/30 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-2xl h-72 bg-gray-100">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-800 group-hover:text-[#8FAF9A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mt-2">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
