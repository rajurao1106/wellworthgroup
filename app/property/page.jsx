"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Authentic Portfolio Data Injection ---
const projectData = [
  // ==========================================
  // --- SECTION A: COMPLETED PROJECTS --------
  // ==========================================
  { 
    id: 1, 
    title: "Vardhman Nagar", 
    location: "Devpuri, Raipur", 
    status: "Completed", 
    price: 0, // Price on request
    size: "Premium Bungalows", 
    image: "/projects/vardhman.jpg", 
    isNew: false, 
    featured: true 
  },
  { 
    id: 2, 
    title: "Nanesh Nagar", 
    location: "Bhatagaon, Raipur", 
    status: "Completed", 
    price: 0, // Exclusive pricing
    size: "Plots / Homes", 
    image: "/projects/nanes.jpg", 
    isNew: false, 
    featured: false 
  },
  { 
    id: 3, 
    title: "Arihant Vihar", 
    location: "Duda, Raipur", 
    status: "Completed", 
    price: 0, 
    size: "Plots / Villas", 
    image: "/projects/arihant.jpg", 
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
    image: "/projects/city.jpg", 
    isNew: false, 
    featured: false 
  },

  // ==========================================
  // --- SECTION B: RUNNING PROJECTS ----------
  // ==========================================
  { 
    id: 5, 
    title: "Ashtavinayak Shantikunj", 
    location: "Chhachhanpairi & Saloni", 
    status: "Running", 
    price: 0, // RERA Tracked
    size: "Premium Township", 
    image: "/projects/shantikunj.jpg", 
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
    image: "/projects/apartment1.jpg", 
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
    image: "/projects/acacia.jpg", 
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
    image: "/projects/farmhouse.jpg", 
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
    image: "/projects/apartment2.jpg", 
    isNew: true, 
    featured: true 
  }
];

const SortOptions = [
  "Featured",
  "Most relevant",
  "Best selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, old to new",
  "Date, new to old",
];

const ProjectFilterPage = () => {
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [sortOption, setSortOption] = useState("Featured");

  // Filter Logic
  const handleStatusChange = (status) => {
    setSelectedStatus((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const handleResetStatus = () => setSelectedStatus([]);

  // Process Data (Filter & Sort)
  const displayProjects = useMemo(() => {
    let filtered = [...projectData];

    // Filter by Status
    if (selectedStatus.length > 0) {
      filtered = filtered.filter((p) => selectedStatus.includes(p.status));
    }

    // Sort Logic 
    switch (sortOption) {
      case "Alphabetically, A-Z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Alphabetically, Z-A":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Price, low to high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price, high to low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Date, new to old":
        filtered.sort((a, b) => b.id - a.id); 
        break;
      case "Date, old to new":
        filtered.sort((a, b) => a.id - b.id);
        break;
      case "Featured":
      case "Most relevant":
      case "Best selling":
      default:
        filtered.sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));
        break;
    }

    return filtered;
  }, [selectedStatus, sortOption]);

  return (
    <section className="py-12 pt-30 px-4 md:px-8 font-sans bg-white min-h-screen text-gray-800">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8">
        
        {/* LEFT SIDEBAR: Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 border-r border-green-200 pr-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b border-green-200 pb-4">
            Filters
          </h2>

          {/* Filter Group: Project Status */}
          <div className="mb-6 border-b border-gray-100 pb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm tracking-wide uppercase">Project Status</h3>
              <span onClick={handleResetStatus} className="text-gray-400 text-xs cursor-pointer hover:text-green-600">Reset</span>
            </div>
            <div className="space-y-3 text-sm">
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-[#1e9653]" checked={selectedStatus.includes("Completed")} onChange={() => handleStatusChange("Completed")} />
                  <span className="group-hover:text-[#1e9653] transition-colors">Completed</span>
                </div>
                <span className="text-gray-400 text-xs">(4)</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 accent-[#1e9653]" checked={selectedStatus.includes("Running")} onChange={() => handleStatusChange("Running")} />
                  <span className="group-hover:text-[#1e9653] transition-colors">Running</span>
                </div>
                <span className="text-gray-400 text-xs">(5)</span>
              </label>
            </div>
          </div>

          {/* Filter Group: Size (Static Configurations from PDF Portfolio) */}
          <div className="mb-6 border-b border-gray-100 pb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm tracking-wide uppercase">Configuration Type</h3>
              <span className="text-gray-400 text-xs cursor-pointer hover:text-green-600">Reset</span>
            </div>
            <div className="space-y-3 text-sm">
              {["Premium Bungalows", "Residential Plots", "Integrated Township", "2 & 3 BHK Apartments", "Farm House Plots"].map((config, i) => (
                <label key={i} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e9653]" />
                    <span className="group-hover:text-[#1e9653] transition-colors">{config}</span>
                  </div>
                  <span className="text-gray-400 text-xs">({i === 3 ? 2 : 1})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter Group: Price (Informational Segment placeholder) */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm tracking-wide uppercase">Value Scope</h3>
              <span className="text-gray-400 text-xs cursor-pointer hover:text-green-600">Reset</span>
            </div>
            <input type="range" className="w-full accent-[#1e9653]" min="0" max="10" defaultValue="5" />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Affordable</span>
              <span>Premium Luxury</span>
            </div>
          </div>
        </aside>

        {/* RIGHT SIDE: Content Area */}
        <main className="flex-1">
          {/* Top Bar (Breadcrumb & Sort) */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-green-200 pb-4">
            <div className="text-sm text-gray-500 mb-4 sm:mb-0">
              <span className="hover:text-[#1e9653] cursor-pointer">Home</span> / <span className="text-gray-900 font-medium">Projects Collection</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-700">Sort by:</span>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-300 rounded-sm px-4 py-1.5 text-sm outline-none focus:border-[#1e9653] bg-white text-gray-700 cursor-pointer min-w-[180px]"
              >
                {SortOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid of Projects */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {displayProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg overflow-hidden group flex flex-col border border-gray-100 p-2 shadow-sm"
                >
                  {/* Card Image Area */}
                  <div className="relative h-56 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-[#eef5f0] flex items-center justify-center text-gray-300">
                       <svg className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>

                    {/* New/Running Badge */}
                    {project.isNew && (
                      <span className="absolute top-3 left-3 bg-[#e3c77a] text-white text-[10px] font-bold px-2 py-1 tracking-wider rounded-sm shadow-sm z-10 uppercase">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="text-center px-2 flex-1 flex flex-col">
                    <h3 className="text-[#7a9985] font-bold text-lg mb-1 truncate uppercase">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2">{project.location} • {project.status}</p>

                    {/* Size Selector Box */}
                    <div className="mt-auto border border-gray-200 rounded-sm py-1.5 px-3 mb-3 flex justify-between items-center text-xs text-gray-600 bg-[#fbfcfb]">
                      <span className="font-medium text-gray-700">{project.size}</span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-[#8FAF9A] hover:bg-[#7a9985] text-white py-2.5 rounded-sm font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
                      Enquire Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Empty State */}
            {displayProjects.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-500">
                No projects match your current filters. Try resetting them.
              </div>
            )}
          </motion.div>

        </main>
      </div>
    </section>
  );
};

export default ProjectFilterPage;