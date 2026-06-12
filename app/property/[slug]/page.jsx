"use client";

import React from "react";
import { MapPin, Share, Heart, Printer, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Object keys match exactly with the original titles passed via the URL
const propertiesDB = {
  // ==========================================
  // --- SECTION A: COMPLETE PROJECTS ---------
  // ==========================================
  "VARDHMAN NAGAR": {
    title: "VARDHMAN NAGAR",
    location: "Devpuri, Raipur, Chhattisgarh",
    tags: ["Complete", "Township", "Premium Bungalows"],
    priceText: "Price on Request",
    priceSubtext: "Premium Living with Peace & Prosperity",
    description:
      "Vardhman Nagar is a prestigious residential township located in the heart of Devpuri, Raipur. Designed for families seeking premium living with peace and prosperity, this fully developed community offers spacious and elegantly crafted bungalows set within a lush, green environment. Wide internal roads, well-maintained parks, and round-the-clock gated security make Vardhman Nagar a benchmark for quality living in Raipur.",
    projectDetails: [
      { label: "Location", value: "Devpuri, Raipur, Chhattisgarh" },
      { label: "Project Type", value: "Residential Township" },
      { label: "Status", value: "Complete" },
      { label: "Bungalows", value: "Spacious | Elegant | Comfortable" },
      { label: "Environment", value: "Green & Clean Environment" },
    ],
    advantages: [
      "Gated community with 24/7 security",
      "Wide internal roads & street lights",
      "Beautifully landscaped, well-maintained parks",
      "Highly family-friendly neighborhood",
      "Peaceful and serene community surroundings",
    ],
    plotSizes: [
      { size: "Premium", detail: "BUNGALOWS" }
    ],
    agentInfo: { name: "Wellworth Sales", license: "RERA Registered" },
    bgImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920",
  },

  "NANESH NAGAR": {
    title: "NANESH NAGAR",
    location: "Bhatagaon, Raipur, Chhattisgarh",
    tags: ["Complete", "Affordable Quality", "Plots & Homes"],
    priceText: "Exclusive Pricing Available",
    priceSubtext: "Affordable Quality Living",
    description:
      "Nanesh Nagar is a well-planned residential township in Bhatagaon, offering a balanced blend of affordability and quality. Developed with careful attention to infrastructure, connectivity, and community living, this project reflects Wellworth Group's commitment to making quality homes accessible for every family in Raipur.",
    projectDetails: [
      { label: "Location", value: "Bhatagaon, Raipur, Chhattisgarh" },
      { label: "Project Type", value: "Residential Township" },
      { label: "Status", value: "Complete" },
      { label: "Configuration", value: "Residential Plots / Homes" },
      { label: "Target Segment", value: "Mid-segment families seeking quality living" },
    ],
    advantages: [
      "Well-connected to Raipur city centre",
      "Carefully planned internal infrastructure",
      "Affordable budget pricing models",
      "Established community neighborhood",
    ],
    plotSizes: [
      { size: "Standard", detail: "PLOTS / HOMES" }
    ],
    agentInfo: { name: "Wellworth Sales", license: "RERA Registered" },
    bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920",
  },

  "ARIHANT VIHAR": {
    title: "ARIHANT VIHAR",
    location: "Duda, Raipur, Chhattisgarh",
    tags: ["Complete", "Serene Zone", "Plots & Villas"],
    priceText: "Call for Best Price",
    priceSubtext: "Serene Residential Community",
    description:
      "Arihant Vihar in Duda offers residents a serene and well-developed residential community. This project emphasises thoughtful infrastructure development, providing residents with smooth internal roads, proper drainage systems, and reliable utility connections—all the essentials for a comfortable, self-sufficient neighbourhood.",
    projectDetails: [
      { label: "Location", value: "Duda, Raipur, Chhattisgarh" },
      { label: "Project Type", value: "Residential Township" },
      { label: "Status", value: "Complete" },
      { label: "Configuration", value: "Residential Plots / Villas" },
      { label: "Environment", value: "Calm and peaceful residential zone" },
    ],
    advantages: [
      "Fully developed internal concrete/tar roads",
      "Robust underground drainage infrastructure",
      "Complete township electrification framework",
      "Quiet lifestyle zone separated from heavy city noise",
    ],
    plotSizes: [
      { size: "Custom", detail: "PLOTS / VILLAS" }
    ],
    agentInfo: { name: "Wellworth Sales", license: "RERA Registered" },
    bgImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920",
  },

  "WELLWORTH CITY": {
    title: "WELLWORTH CITY",
    location: "Hirapur, Raipur, Chhattisgarh",
    tags: ["Complete", "Flagship Layout", "Integrated Township"],
    priceText: "Price on Request",
    priceSubtext: "Township Living Redefined",
    description:
      "Wellworth City in Hirapur stands as one of Wellworth Group's flagship complete projects - a large-scale integrated township that set new benchmarks for planned residential development in Raipur. Offering a well-designed community with comprehensive infrastructure, Wellworth City showcases the group's capacity to deliver township-scale projects with excellence and reliability.",
    projectDetails: [
      { label: "Location", value: "Hirapur, Raipur, Chhattisgarh" },
      { label: "Project Type", value: "Integrated Township" },
      { label: "Status", value: "Complete" },
      { label: "Configuration", value: "Residential Plots & Homes" },
      { label: "Scale", value: "Large-scale township development" },
    ],
    advantages: [
      "Massive open green community spaces",
      "Beautifully segmented recreational parks",
      "Wide network of primary internal roads",
      "Comprehensive planned infrastructure model",
    ],
    plotSizes: [
      { size: "Multiple", detail: "PLOTS & HOMES" }
    ],
    agentInfo: { name: "Wellworth Sales", license: "RERA Registered" },
    bgImage: "https://images.unsplash.com/photo-1477322524744-0eece9e79f40?auto=format&fit=crop&q=80&w=1920",
  },

  // ==========================================
  // --- SECTION B: RUNNING PROJECTS ----------
  // ==========================================
  "ASHTAVINAYAK SHANTIKUNJ": {
    title: "ASHTAVINAYAK SHANTIKUNJ",
    location: "Chhachhanpairi & Saloni, Raipur, Chhattisgarh",
    tags: ["Running", "Premium Township", "RERA Approved"],
    priceText: "RERA: CG/01/2023/RERA/001",
    priceSubtext: "Where Serenity Meets Modern Living",
    description:
      "Ashtavinayak Shantikunj is Wellworth Group's landmark running project—a premium integrated township spread across Chhachhanpairi and Saloni. Inspired by the blessings of the eight Ashtavinayak Ganeshas, this project seamlessly blends spirituality, nature, and modern living. The township features a beautifully designed temple with fountain and garden, a world-class clubhouse, multiple sports courts, swimming pools, children's play areas, and wide landscaped avenues creating a self-contained community for a truly elevated lifestyle.",
    projectDetails: [
      { label: "Location", value: "Chhachhanpairi & Saloni, Raipur" },
      { label: "Project Type", value: "Premium Residential Township" },
      { label: "Status", value: "Under Development (Running)" },
      { label: "RERA Registration", value: "CG/01/2023/RERA/001" },
      { label: "Concept", value: "Integrated township with temple, sports & recreation zones" },
    ],
    advantages: [
      "Premium Clubhouse & Swimming Pool",
      "Grand Temple with interactive Fountain & Garden",
      "Full Sports Zones: Football Ground & Basketball Court",
      "Tennis Court, Cricket Practice Net & Giant Chess",
      "Jogging Track, Landscaped Parks & Gated Security",
      "Wide Internal Roads, Street Lighting & Badminton Court",
    ],
    plotSizes: [
      { size: "Premium", detail: "PLOTS & VILLAS" }
    ],
    agentInfo: { name: "Wellworth Sales", license: "RERA Approved" },
    bgImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920",
  },

  "WELLWORTH APARTMENT 1": {
    title: "WELLWORTH APARTMENT 1",
    location: "Imlidih Main Road, Devpuri (Near Kamal Vihar), Raipur",
    tags: ["Running", "Multi-Storey", "Urban Flats"],
    priceText: "RERA: CG/01/2023/RERA/002",
    priceSubtext: "Comfortable Urban Living",
    description:
      "Wellworth Apartment 1 on Imlidih Main Road, Devpuri is a meticulously designed residential apartment project offering modern 2 BHK and 3 BHK homes in one of Raipur's most sought-after neighbourhoods. Located in proximity to the prestigious Kamal Vihar area, residents enjoy excellent connectivity to educational institutions, healthcare facilities, shopping centres, and entertainment hubs.",
    projectDetails: [
      { label: "Location", value: "Imlidih Main Road, Devpuri, Raipur" },
      { label: "Project Type", value: "Multi-Storey Residential Apartments" },
      { label: "Status", value: "Under Development (Running)" },
      { label: "RERA Registration", value: "CG/01/2023/RERA/002" },
      { label: "Configuration", value: "2 BHK & 3 BHK Apartments" },
    ],
    advantages: [
      "Excellent access to Kamal Vihar framework",
      "Proximity to top schools and emergency hospitals",
      "Easy access to everyday retail markets",
      "Equipped with modern Lift / Elevator access",
      "Secure Car Parking & Dedicated Power Backup",
    ],
    plotSizes: [
      { size: "2 BHK", detail: "APARTMENT" },
      { size: "3 BHK", detail: "APARTMENT" }
    ],
    agentInfo: { name: "Wellworth Sales", license: "RERA Approved" },
    bgImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920",
  },

  "ACACIA - SEJBAHAR": {
    title: "ACACIA - SEJBAHAR",
    location: "Sejbahar, Raipur, Chhattisgarh",
    tags: ["Running", "Luxury Villas", "Designer Layout"],
    priceText: "Pre-Launch Offers",
    priceSubtext: "Premium Villas & Plots in Nature's Embrace",
    description:
      "Acacia is Wellworth Group's ultra-premium residential project in the thriving locality of Sejbahar, Raipur. Designed by the acclaimed Kalaa-Handi Studio, Acacia stands as a testament to architectural excellence featuring a stunning organically-shaped clubhouse with rooftop terrace, swimming pool, generous parking, and beautifully landscaped surroundings. The project offers an exclusive enclave of villas and premium plots, each thoughtfully designed to maximise natural light, ventilation, and scenic views.",
    projectDetails: [
      { label: "Location", value: "Sejbahar, Raipur, Chhattisgarh" },
      { label: "Project Type", value: "Premium Villa / Plot Township" },
      { label: "Status", value: "Under Development (Running)" },
      { label: "Architecture", value: "Contemporary design by Kalaa-Handi Studio" },
      { label: "Concept", value: "Luxury living surrounded by lush landscapes" },
    ],
    advantages: [
      "Iconic organically-shaped Signature Clubhouse",
      "Exclusive open-air Rooftop Terrace & Lounge",
      "Designer Swimming Pool with ample parking decks",
      "Maximizes clean natural light & direct wind ventilation",
      "Stunning unhindered scenic landscape views",
    ],
    plotSizes: [
      { size: "Premium", detail: "VILLAS" },
      { size: "Luxury", detail: "PLOTS" }
    ],
    agentInfo: { name: "Wellworth Sales", license: "RERA Registered" },
    bgImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
  },

  "SHANTIKUNJ FARM HOUSE": {
    title: "SHANTIKUNJ FARM HOUSE",
    location: "Chhachhanpairi, Raipur, Chhattisgarh",
    tags: ["Running", "Farm Plots", "Green Escape"],
    priceText: "RERA Compliant",
    priceSubtext: "Exclusive Farm House Plots",
    description:
      "Shantikunj Farm House in Chhachhanpairi offers a rare opportunity to own an exclusive farm house plot in a natural, serene setting just outside Raipur. Ideal for those seeking a weekend retreat, a second home, or a peaceful agricultural investment, these spacious plots are set amidst open greens with fresh air and tranquil surroundings. The project is part of the same Chhachhanpairi locale as the flagship Ashtavinayak Shantikunj township, benefiting from the same developing infrastructure and connectivity.",
    projectDetails: [
      { label: "Location", value: "Chhachhanpairi, Raipur, Chhattisgarh" },
      { label: "Project Type", value: "Farm House Plots" },
      { label: "Status", value: "Under Development (Running)" },
      { label: "Environment", value: "Natural, open & tranquil surroundings" },
      { label: "Concept", value: "An escape from city life peaceful countryside living" },
    ],
    advantages: [
      "Highly spacious countryside farm plot options",
      "Guaranteed clear documentation titles",
      "High long-term agricultural & land investment value",
      "Clean, fresh air environment far away from urban pollution",
      "Shares common infrastructure with flagship Ashtavinayak Shantikunj",
    ],
    plotSizes: [
      { size: "Spacious", detail: "FARM PLOTS" }
    ],
    agentInfo: { name: "Wellworth Sales", license: "RERA Compliant" },
    bgImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1920",
  },

  "WELLWORTH APARTMENT 2": {
    title: "WELLWORTH APARTMENT 2",
    location: "Kamal Vihar, Raipur, Chhattisgarh",
    tags: ["Running", "Premium Sector", "Modern Apartments"],
    priceText: "Modern Residences",
    priceSubtext: "Modern Residences in the Heart of Kamal Vihar",
    description:
      "Wellworth Apartment 2 is strategically located in Kamal Vihar—one of Raipur's most prestigious and sought-after residential localities. This project offers thoughtfully designed apartments with premium specifications, modern amenities, and excellent connectivity to all key landmarks of the city. Ideal for urban professionals and families who seek a blend of comfort, style, and convenience.",
    projectDetails: [
      { label: "Location", value: "Kamal Vihar, Raipur, Chhattisgarh" },
      { label: "Project Type", value: "Multi-Storey Residential Apartments" },
      { label: "Status", value: "Under Development (Running)" },
      { label: "Configuration", value: "2 BHK & 3 BHK Apartments" },
      { label: "Target Segment", value: "Urban professionals and families" },
    ],
    advantages: [
      "Prime location within premium sector framework of Kamal Vihar",
      "Constructed with high-end premium infrastructure finishes",
      "Comprehensive CCTV security layout and water grids",
      "Close proximity to corporate commercial city landmarks",
      "Dedicated multi-vehicle car parking spaces",
    ],
    plotSizes: [
      { size: "2 BHK", detail: "RESIDENCE" },
      { size: "3 BHK", detail: "RESIDENCE" }
    ],
    agentInfo: { name: "Wellworth Sales", license: "RERA Registered" },
    bgImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920",
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
            <div className="flex items-center text-[#7a9985] text-sm md:text-base">
              <MapPin className="w-4 h-4 mr-1.5 " />
              {property.location}
            </div>
          </motion.div>

          {/* Right Side: Pricing and Actions */}
          <motion.div variants={fadeInUp} className="flex-none text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
            <div className="text-gray-600 mb-1">{property.priceSubtext}</div>
            <div className="text-4xl md:text-5xl font-semibold text-[#7a9985] mb-6">
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