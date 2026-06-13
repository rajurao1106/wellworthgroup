"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Importing images from the public path
import project1 from "@/public/homepage/project1.png";
import project2 from "@/public/homepage/project2.jpg";
import project3 from "@/public/homepage/project3.jpg";
import project4 from "@/public/homepage/project4.png";
import upcoming1 from "@/public/homepage/upcoming1.png";
import upcoming2 from "@/public/homepage/upcoming2.png";
import upcoming3 from "@/public/homepage/upcoming3.jpeg";
import upcoming4 from "@/public/homepage/upcoming4.png";

// --- Authentic Portfolio Data ---
const projectData = [
  { 
    id: 1, 
    title: "Vardhman Nagar", 
    location: "Devpuri, Raipur", 
    status: "Completed", 
    price: 0, 
    size: "Premium Bungalows", 
    image: project1, 
    isNew: false, 
    featured: true 
  },
  { 
    id: 2, 
    title: "Nanesh Nagar", 
    location: "Bhatagaon, Raipur", 
    status: "Completed", 
    price: 0, 
    size: "Plots / Homes", 
    image: project2, 
    isNew: false, 
    featured: false 
  },
  { 
    id: 3, 
    title: "Arihant Vihar", 
    location: "Dunda, Raipur", 
    status: "Completed", 
    price: 0, 
    size: "Plots / Villas", 
    image: project3, 
    isNew: false, 
    featured: true 
  },
  { 
    id: 4, 
    title: "Wellworth City", 
    location: "Hirapur, Raipur", 
    status: "Completed", 
    price: 0, 
    size: "Integrated Township", 
    image: project4, 
    isNew: false, 
    featured: false 
  },
  { 
    id: 5, 
    title: "Ashtavinayak Shantikunj", 
    location: "Chhachhanpairi & Saloni", 
    status: "Running", 
    price: 0, 
    size: "Premium Township", 
    image: upcoming2, 
    isNew: true, 
    featured: true 
  },
  { 
    id: 6, 
    title: "Wellworth Apartment 1", 
    location: "Devpuri (Near Kamal Vihar)", 
    status: "Running", 
    price: 0, 
    size: "2 & 3 BHK Flats", 
    image: project4, 
    isNew: true, 
    featured: false 
  },
  { 
    id: 7, 
    title: "Acacia - Sejbahar", 
    location: "Sejbahar, Raipur", 
    status: "Running", 
    price: 0, 
    size: "Premium Villas/Plots", 
    image: upcoming1, 
    isNew: true, 
    featured: true 
  },
  { 
    id: 8, 
    title: "Shantikunj Farm House", 
    location: "Chhachhanpairi, Raipur", 
    status: "Running", 
    price: 0, 
    size: "Farm House Plots", 
    image: upcoming3, 
    isNew: true, 
    featured: false 
  },
  { 
    id: 9, 
    title: "Wellworth Apartment 2", 
    location: "Kamal Vihar, Raipur", 
    status: "Running", 
    price: 0, 
    size: "2 & 3 BHK Flats", 
    image: upcoming4, 
    isNew: true, 
    featured: true 
  }
];

const SortOptions = [
  "Featured",
  "Most relevant",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Date, new to old",
  "Date, old to new",
];

const ProjectFilterPage = () => {
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [sortOption, setSortOption] = useState("Featured");

  const handleStatusChange = (status) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const handleResetStatus = () => setSelectedStatus([]);

  const displayProjects = useMemo(() => {
    let filtered = [...projectData];

    if (selectedStatus.length > 0) {
      filtered = filtered.filter((p) => selectedStatus.includes(p.status));
    }

    switch (sortOption) {
      case "Alphabetically, A-Z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Alphabetically, Z-A":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Date, new to old":
        filtered.sort((a, b) => b.id - a.id);
        break;
      case "Date, old to new":
        filtered.sort((a, b) => a.id - b.id);
        break;
      case "Featured":
      default:
        filtered.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
        break;
    }
    return filtered;
  }, [selectedStatus, sortOption]);

  return (
    <section className="py-12 pt-30 px-4 md:px-8 font-sans bg-white min-h-screen text-gray-800">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 border-r border-green-200 pr-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-green-200 pb-4">Filters</h2>

          <div className="mb-6 border-b border-gray-100 pb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm tracking-wide uppercase">Project Status</h3>
              <button onClick={handleResetStatus} className="text-gray-400 text-xs hover:text-green-600">Reset</button>
            </div>
            <div className="space-y-3 text-sm">
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-[#1e9653]" checked={selectedStatus.includes("Completed")} onChange={() => handleStatusChange("Completed")} />
                  <span className="group-hover:text-[#1e9653]">Completed</span>
                </div>
                <span className="text-gray-400 text-xs">(4)</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-[#1e9653]" checked={selectedStatus.includes("Running")} onChange={() => handleStatusChange("Running")} />
                  <span className="group-hover:text-[#1e9653]">Running</span>
                </div>
                <span className="text-gray-400 text-xs">(5)</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-sm tracking-wide uppercase mb-4">Configuration</h3>
            <div className="space-y-3 text-sm">
              {["Bungalows", "Plots", "Township", "Apartments", "Farm House"].map((config, i) => (
                <label key={i} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e9653]" />
                    <span className="group-hover:text-[#1e9653]">{config}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-8 border-b border-green-200 pb-4">
            <div className="text-sm text-gray-500">Home / <span className="text-gray-900 font-medium">Projects Collection</span></div>
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-sm px-4 py-1.5 text-sm outline-none focus:border-[#1e9653] cursor-pointer"
            >
              {SortOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {displayProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-lg overflow-hidden group flex flex-col border border-gray-100 p-2 shadow-sm"
                >
                  <div className="relative h-56 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.isNew && (
                      <span className="absolute top-3 left-3 bg-[#e3c77a] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase z-20">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="text-center px-2 flex-1 flex flex-col">
                    <h3 className="text-[#7a9985] font-bold text-lg mb-1 uppercase truncate">{project.title}</h3>
                    <p className="text-gray-400 text-xs mb-2">{project.location}</p>
                    <div className="mt-auto border border-gray-200 rounded-sm py-1.5 px-3 mb-3 flex justify-between items-center text-xs text-gray-600 bg-[#fbfcfb]">
                      <span className="font-medium">{project.size}</span>
                    </div>
                    <Link href={`/property/${project.title.toUpperCase()}`} className="w-full bg-[#8FAF9A] hover:bg-[#7a9985] text-white py-2.5 rounded-sm font-medium text-sm transition-colors flex items-center justify-center gap-2">
                      Enquire Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {displayProjects.length === 0 && (
            <div className="py-12 text-center text-gray-500">No projects found.</div>
          )}
        </main>
      </div>
    </section>
  );
};

export default ProjectFilterPage;