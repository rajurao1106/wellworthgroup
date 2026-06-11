"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data Injection ---
const projectData = [
  // Completed
  { id: 1, title: "Vardhman Nagar", location: "Devpuri, Raipur", status: "Completed", price: 1500000, size: 1000, image: "/projects/vardhman.jpg", isNew: false, featured: true },
  { id: 2, title: "Nanes Nagar", location: "Bhatagaon", status: "Completed", price: 1200000, size: 800, image: "/projects/nanes.jpg", isNew: false, featured: false },
  { id: 3, title: "Arihant Vihar", location: "Dunda", status: "Completed", price: 1800000, size: 1200, image: "/projects/arihant.jpg", isNew: false, featured: true },
  { id: 4, title: "Wellworth City", location: "Hirapur", status: "Completed", price: 2200000, size: 1500, image: "/projects/city.jpg", isNew: false, featured: false },
  // Upcoming
  { id: 5, title: "Shantikunj Phase 1 & 2", location: "Raipur", status: "Upcoming", price: 2500000, size: 1200, image: "/projects/shanti.jpg", isNew: true, featured: true },
  { id: 6, title: "Wellworth Height", location: "Kamal Vihar", status: "Upcoming", price: 3500000, size: 1800, image: "/projects/height.jpg", isNew: true, featured: false },
  { id: 7, title: "Wellworth Tower", location: "Devpuri", status: "Upcoming", price: 4200000, size: 2000, image: "/projects/tower.jpg", isNew: true, featured: true },
  { id: 8, title: "Wellworth Mall", location: "Kondagaon", status: "Upcoming", price: 8000000, size: 5000, image: "/projects/mall.jpg", isNew: true, featured: false },
  { id: 9, title: "ACACIA Premium Res.", location: "28.50 Acre", status: "Upcoming", price: 5500000, size: 2500, image: "/projects/acacia.jpg", isNew: true, featured: true },
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

  // Process Data (Filter & Sort)
  const displayProjects = useMemo(() => {
    let filtered = [...projectData];

    // Filter by Status
    if (selectedStatus.length > 0) {
      filtered = filtered.filter((p) => selectedStatus.includes(p.status));
    }

    // Sort Logic based on your provided image list
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
        filtered.sort((a, b) => b.id - a.id); // Assuming ID correlates to date added
        break;
      case "Date, old to new":
        filtered.sort((a, b) => a.id - b.id);
        break;
      // Featured/Most relevant/Best selling will default to initial order or featured flag
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
              <span className="text-gray-400 text-xs cursor-pointer hover:text-green-600">Reset</span>
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
                  <input type="checkbox" className="w-4 h-4 accent-[#1e9653]" checked={selectedStatus.includes("Upcoming")} onChange={() => handleStatusChange("Upcoming")} />
                  <span className="group-hover:text-[#1e9653] transition-colors">Upcoming</span>
                </div>
                <span className="text-gray-400 text-xs">(5)</span>
              </label>
            </div>
          </div>

          {/* Filter Group: Size (Placeholder UI matching the image) */}
          <div className="mb-6 border-b border-gray-100 pb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm tracking-wide uppercase">Size</h3>
              <span className="text-gray-400 text-xs cursor-pointer hover:text-green-600">Reset</span>
            </div>
            <div className="space-y-3 text-sm">
              {["800 sq ft", "1000 sq ft", "1200 sq ft", "1500 sq ft", "2000+ sq ft"].map((size, i) => (
                <label key={i} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 accent-[#1e9653]" />
                    <span className="group-hover:text-[#1e9653] transition-colors">{size}</span>
                  </div>
                  <span className="text-gray-400 text-xs">({Math.floor(Math.random() * 5) + 1})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter Group: Price (Placeholder) */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm tracking-wide uppercase">Price Range</h3>
              <span className="text-gray-400 text-xs cursor-pointer hover:text-green-600">Reset</span>
            </div>
            <input type="range" className="w-full accent-[#1e9653]" min="1000000" max="8000000" />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Rs. 10L</span>
              <span>Rs. 80L+</span>
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
                  className="bg-white rounded-lg overflow-hidden group flex flex-col"
                >
                  {/* Card Image Area */}
                  <div className="relative h-56 bg-gray-100 rounded-lg overflow-hidden mb-4">
                    {/* Fallback pattern if images aren't present */}
                    <div className="absolute inset-0 bg-[#eef5f0] flex items-center justify-center text-gray-300">
                       <svg className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </div>

                    {/* New Badge */}
                    {project.isNew && (
                      <span className="absolute top-3 left-3 bg-white text-[#1e9653] text-xs font-bold px-2 py-1 rounded-sm shadow-sm z-10">
                        New
                      </span>
                    )}

                  </div>

                  {/* Card Content */}
                  <div className="text-center px-2 flex-1 flex flex-col">
                    <h3 className="text-[#1e9653] font-bold text-lg mb-1 truncate">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2">{project.location} • {project.status}</p>
                    
                    {/* Stars */}
                    {/* <div className="flex justify-center gap-1 text-[#1e9653] mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div> */}

                    {/* <div className="font-bold text-gray-900 mb-4">
                      Rs. {project.price.toLocaleString('en-IN')}.00
                    </div> */}

                    {/* Size Selector Box */}
                    <div className="mt-auto border border-gray-300 rounded-sm py-1.5 px-3 mb-3 flex justify-between items-center text-sm text-gray-600 bg-white cursor-pointer">
                      <span>{project.size} sq ft</span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-[#1e9653] hover:bg-[#177a43] text-white py-2.5 rounded-sm font-medium text-sm transition-colors flex items-center justify-center gap-2">
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