"use client";

import React from "react";
import { MapPin, Share, Heart, Printer, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Object keys match exactly with the original titles passed via the URL
const propertiesDB = {
  SAKUNTALA: {
    title: "Sakuntala",
    location: "Old Dhamtari Road, Raipur",
    tags: ["For Sale", "Plots", "New Launch"],
    priceText: "Price on Request",
    priceSubtext: "Call for Details",
    description:
      "Sakuntala is Wellworth's flagship residential plot development on Old Dhamtari Road, Raipur. All plots come with clear title, complete documentation, and ready-to-build infrastructure. Only 12 plots currently available — registry within 7 working days.",
    projectDetails: [
      { label: "Location", value: "Old Dhamtari Road, Raipur" },
      { label: "Total Plots", value: "96 plots (12 remaining)" },
      { label: "Project Area", value: "12 Acres (approx.)" },
      { label: "Registry", value: "7 Working Days" },
      { label: "Title", value: "Clear Title — RERA Approved" },
    ],
    advantages: [
      "5 min drive from National Highway junction",
      "10 min from DAV School and Kendriya Vidyalaya",
      "8 min from District Hospital, Raipur",
      "15 min from Raipur Railway Station",
      "Gated community — boundary wall & CC roads",
      "Electricity connection at every plot",
    ],
    plotSizes: [
      { size: "1,000", detail: "SQ.FT." },
      { size: "1,500", detail: "SQ.FT." },
      { size: "2,400", detail: "SQ.FT." },
    ],
    agentInfo: {
      name: "Wellworth Sales",
      license: "RERA Registered",
    },
    bgImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920",
  },
  "WELLWORTH SARONA": {
    title: "Wellworth Sarona",
    location: "Sarona, Raipur",
    tags: ["For Sale", "Plots", "New Launch"],
    priceText: "Price on Request",
    priceSubtext: "Pre-launch Price",
    description:
      "Wellworth Sarona is a new launch plotted development in Sarona, Raipur. Pre-launch pricing available for early bookings — contact us now for best rates.",
    projectDetails: [
      { label: "Location", value: "Sarona, Raipur" },
      { label: "Plot Size", value: "1,500 sq.ft." },
      { label: "Status", value: "New Launch — Booking Open" },
      { label: "Registry", value: "7 Working Days" },
      { label: "Title", value: "Clear Title — RERA Approved" },
    ],
    advantages: [
      "Sarona, Raipur — fast developing area",
      "Good road connectivity",
      "Close to Ring Road",
      "Schools and markets nearby",
    ],
    plotSizes: [{ size: "1,500", detail: "SQ.FT." }],
    agentInfo: {
      name: "Wellworth Sales",
      license: "RERA Registered",
    },
    bgImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920",
  },
  "WELLWORTH AMANAKA": {
    title: "Wellworth Amanaka",
    location: "Amanaka Road, Raipur",
    tags: ["For Sale", "Plots", "Ready to Register"],
    priceText: "Price on Request",
    priceSubtext: "Immediate Possession",
    description:
      "Wellworth Amanaka plots on Amanaka Road, Raipur. Immediate possession available with all paperwork complete. Ready to build from day one.",
    projectDetails: [
      { label: "Location", value: "Amanaka Road, Raipur" },
      { label: "Plot Size", value: "1,000 sq.ft." },
      { label: "Status", value: "Ready — Immediate Possession" },
      { label: "Registry", value: "7 Working Days" },
      { label: "Title", value: "Clear Title" },
    ],
    advantages: [
      "On Amanaka Road, Raipur",
      "Close to essential amenities",
      "Ready infrastructure",
      "Immediate possession",
    ],
    plotSizes: [{ size: "1,000", detail: "SQ.FT." }],
    agentInfo: {
      name: "Wellworth Sales",
      license: "RERA Registered",
    },
    bgImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920",
  },
  "WELLWORTH PRESTIGE": {
    title: "Wellworth Prestige",
    location: "Kachna, Raipur",
    tags: ["For Sale", "Plots", "Few Left"],
    priceText: "Price on Request",
    priceSubtext: "Call for Details",
    description:
      "Wellworth Prestige offers premium corner plots in Kachna, Raipur. With only 5 plots remaining, this is an exclusive opportunity to secure a large residential plot.",
    projectDetails: [
      { label: "Location", value: "Kachna, Raipur" },
      { label: "Plot Size", value: "2,400 sq.ft." },
      { label: "Status", value: "5 Plots Remaining" },
      { label: "Registry", value: "7 Working Days" },
      { label: "Title", value: "Clear Title" },
    ],
    advantages: [
      "Premium Kachna location",
      "Corner plots available",
      "Quiet residential neighbourhood",
      "Good connectivity to city centre",
    ],
    plotSizes: [{ size: "2,400", detail: "SQ.FT." }],
    agentInfo: {
      name: "Wellworth Sales",
      license: "RERA Registered",
    },
    bgImage:
      "https://images.unsplash.com/photo-1477322524744-0eece9e79f40?auto=format&fit=crop&q=80&w=1920",
  },
  "WELLWORTH GREEN VALLEY": {
    title: "Wellworth Green Valley",
    location: "Ring Road No. 1, Raipur",
    tags: ["For Sale", "Plots", "Limited Plots"],
    priceText: "Price on Request",
    priceSubtext: "Call for Details",
    description:
      "Wellworth Green Valley offers residential plots on Ring Road No. 1, Raipur. A well-connected development with green surroundings and ready infrastructure.",
    projectDetails: [
      { label: "Location", value: "Ring Road No. 1, Raipur" },
      { label: "Plot Size", value: "1,200 sq.ft." },
      { label: "Status", value: "Booking Open" },
      { label: "Registry", value: "7 Working Days" },
      { label: "Title", value: "Clear Title — RERA Approved" },
    ],
    advantages: [
      "Located on Ring Road No. 1",
      "Excellent connectivity to city",
      "Green, open surroundings",
      "Ready infrastructure",
    ],
    plotSizes: [{ size: "1,200", detail: "SQ.FT." }],
    agentInfo: {
      name: "Wellworth Sales",
      license: "RERA Registered",
    },
    bgImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920",
  },
  "WELLWORTH HEIGHTS": {
    title: "Wellworth Heights",
    location: "VIP Road Corridor, Raipur",
    tags: ["Sold Out", "Waitlist Open"],
    priceText: "Price on Request",
    priceSubtext: "Next Phase Pricing",
    description:
      "Wellworth Heights is a premium plotted development on VIP Road Corridor, Raipur. Currently sold out — join the waitlist for the upcoming second phase.",
    projectDetails: [
      { label: "Location", value: "VIP Road Corridor, Raipur" },
      { label: "Plot Size", value: "1,500 sq.ft." },
      { label: "Status", value: "Sold Out — Waitlist Open" },
      { label: "Registry", value: "7 Working Days" },
      { label: "Title", value: "Clear Title" },
    ],
    advantages: [
      "Prime VIP Road location",
      "Close to major commercial hubs",
      "Easy highway access",
      "Near top schools and hospitals",
    ],
    plotSizes: [{ size: "1,500", detail: "SQ.FT." }],
    agentInfo: {
      name: "Wellworth Sales",
      license: "RERA Registered",
    },
    bgImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920",
  },
};

export default async function PropertyDetail({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const property = propertiesDB[decodedSlug];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-sans">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4 text-gray-900">
            Property Not Found
          </h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Animation Variant Declarations
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white font-sans pt-30 text-gray-900"
    >
      {/* Basic Breadcrumbs */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{" "}
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:text-black">
              Projects
            </Link>{" "}
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{property.title}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Modern Header Section matching the image */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
          {/* Left Side: Title and Tags */}
          <motion.div variants={fadeInUp} className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {property.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#E3C77A] text-white px-2.5 py-1 text-xs rounded-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-black mb-3">
              {property.title}
            </h1>
            <div className="flex items-center text-[#E3C77A] text-sm md:text-base">
              <MapPin className="w-4 h-4 mr-1.5 " />
              {property.location}
            </div>
          </motion.div>

          {/* Right Side: Pricing and Actions */}
          <motion.div variants={fadeInUp} className="flex-none text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
            <div className="text-gray-600 mb-1">{property.priceSubtext}</div>
            <div className="text-4xl md:text-5xl font-semibold text-[#E3C77A] mb-6">
              {property.priceText}
            </div>
            <div className="flex items-center justify-start md:justify-end gap-5 text-sm font-medium text-gray-800">
              <button className="flex items-center gap-1.5 hover:text-black transition-colors">
                <Share className="w-4 h-4" /> Share
              </button>
              <button className="flex items-center gap-1.5 hover:text-black transition-colors">
                <Heart className="w-4 h-4" /> Favorite
              </button>
              <button className="flex items-center gap-1.5 hover:text-black transition-colors">
                <Printer className="w-4 h-4" /> Print
              </button>
            </div>
          </motion.div>
        </div>

        {/* Property Hero Image */}
        <motion.div 
          variants={fadeInUp}
          className="w-full h-[400px] mb-12 rounded-lg overflow-hidden bg-gray-100 hidden md:block"
        >
          <img
            src={property.bgImage}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2">
            <motion.section variants={fadeInUp} className="mb-10">
              <h2 className="text-2xl font-medium mb-4 text-black">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {property.description}
              </p>
            </motion.section>

            <hr className="border-gray-200 mb-10" />

            <motion.section 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10"
            >
              <h2 className="text-2xl font-medium mb-6 text-black">
                Project Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {property.projectDetails.map((detail, idx) => (
                  <motion.div
                    variants={fadeInUp}
                    key={idx}
                    className="flex justify-between sm:flex-col border-b border-gray-100 sm:border-none pb-2 sm:pb-0"
                  >
                    <span className="text-gray-500 text-sm mb-1">
                      {detail.label}
                    </span>
                    <span className="font-medium text-gray-900">
                      {detail.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <hr className="border-gray-200 mb-10" />

            <motion.section 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-10"
            >
              <h2 className="text-2xl font-medium mb-6 text-black">
                Location Advantages
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.advantages.map((adv, idx) => (
                  <motion.li
                    variants={fadeInUp}
                    key={idx}
                    className="flex items-start text-gray-700 text-[15px]"
                  >
                    <Check className="w-5 h-5 text-black mr-3 shrink-0" />
                    {adv}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.section 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl font-medium mb-6 text-black">
                Plot Sizes
              </h2>
              <div className="flex gap-4 flex-wrap">
                {property.plotSizes.map((plot, idx) => (
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    key={idx}
                    className="border border-gray-200 rounded p-4 w-32 text-center bg-white"
                  >
                    <div className="text-xl font-semibold text-black">
                      {plot.size}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {plot.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Sidebar Form matching image */}
          <div className="lg:col-span-1">
            <motion.div 
              variants={fadeInUp}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-[0_2px_10px_rgb(0,0,0,0.04)] sticky top-6"
            >
              {/* Input Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded p-3 text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded p-3 text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded p-3 text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
                <textarea
                  placeholder="I am interested in this property..."
                  rows="3"
                  className="w-full border border-gray-300 rounded p-3 text-[15px] focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                ></textarea>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full bg-[#8FAF9A] text-white font-medium py-3.5 rounded transition-colors mt-2 hover:bg-[#7a9985]"
                >
                  Request Information
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}