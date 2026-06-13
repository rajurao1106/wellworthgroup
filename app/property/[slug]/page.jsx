"use client";

import React from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Import your project images
import vardhmanImg from "@/public/homepage/project1.png";
import naneshImg from "@/public/homepage/project2.jpg";
import arihantImg from "@/public/homepage/project8.png";
import wellworthCityImg from "@/public/homepage/project7.png";
import shantikunjImg from "@/public/homepage/upcoming2.png";
import wellworthApt1Img from "@/public/homepage/project4.png";
import acaciaImg from "@/public/homepage/upcoming1.png";
import wellworthApt2Img from "@/public/homepage/upcoming4.png";

const propertiesDB = {
  "VARDHMAN NAGAR": {
    title: "VARDHMAN NAGAR",
    image: vardhmanImg,
    location: "Devpuri, Raipur, Chhattisgarh",
    description:
      "Vardhman Nagar is a prestigious residential township located in the heart of Devpuri, Raipur. Designed for families seeking premium living with peace and prosperity, this fully developed community offers spacious and elegantly crafted bungalows set within a lush, green environment[cite: 42, 43]. Wide internal roads, well-maintained parks, and round-the-clock gated security make Vardhman Nagar a benchmark for quality living in Raipur[cite: 44].",
    projectDetails: [
      { label: "Location", value: "Devpuri, Raipur" },
      { label: "Status", value: "Complete" },
    ],
    highlights: [
      "Gated Security [cite: 36]",
      "Wide Roads [cite: 36]",
      "Street Lighting [cite: 48]",
      "Well-Maintained Parks [cite: 49]",
      "Green Environment [cite: 50]",
      "Elegant Bungalows [cite: 51]",
      "Family Community [cite: 52]",
      "Peaceful Surroundings [cite: 53]",
    ],
  },
  "NANESH NAGAR": {
    title: "NANESH NAGAR",
    image: naneshImg,
    location: "Bhatagaon, Raipur, Chhattisgarh",
    description:
      "Nanesh Nagar is a well-planned residential township in Bhatagaon, offering a balanced blend of affordability and quality[cite: 70]. This project reflects Wellworth Group's commitment to making quality homes accessible for every family in Raipur[cite: 71].",
    projectDetails: [
      { label: "Location", value: "Bhatagaon, Raipur" },
      { label: "Status", value: "Complete" },
    ],
    highlights: [
      "Well-connected to city centre [cite: 68]",
      "Quality infrastructure [cite: 71]",
      "Affordable pricing [cite: 70]",
      "Established neighborhood [cite: 71]",
    ],
  },
  "ARIHANT VIHAR": {
    title: "ARIHANT VIHAR",
    image: arihantImg,
    location: "Duda, Raipur, Chhattisgarh",
    description:
      "Arihant Vihar in Duda offers residents a serene and well-developed residential community[cite: 74]. This project emphasises thoughtful infrastructure, providing smooth internal roads and reliable utility connections[cite: 75].",
    projectDetails: [
      { label: "Location", value: "Duda, Raipur" },
      { label: "Status", value: "Complete" },
    ],
    highlights: [
      "Developed roads [cite: 72]",
      "Drainage systems [cite: 75]",
      "Reliable utility connections [cite: 75]",
      "Peaceful residential zone [cite: 72]",
    ],
  },
  "WELLWORTH CITY": {
    title: "WELLWORTH CITY",
    image: wellworthCityImg,
    location: "Hirapur, Raipur, Chhattisgarh",
    description:
      "Wellworth City in Hirapur is a large-scale integrated township that set new benchmarks for planned residential development in Raipur[cite: 81].",
    projectDetails: [
      { label: "Location", value: "Hirapur, Raipur" },
      { label: "Status", value: "Complete" },
    ],
    highlights: [
      "Integrated township [cite: 79]",
      "Community spaces [cite: 79]",
      "Parks [cite: 79]",
      "Internal roads [cite: 79]",
    ],
  },
  "ASHTAVINAYAK SHANTIKUNJ": {
    title: "ASHTAVINAYAK SHANTIKUNJ",
    image: shantikunjImg,
    location: "Chhachhanpairi & Saloni, Raipur",
    description:
      "Ashtavinayak Shantikunj is a premium integrated township seamlessly blending spirituality, nature, and modern living[cite: 99, 100]. Features include a temple, clubhouse, and sports zones[cite: 101].",
    projectDetails: [
      { label: "Location", value: "Chhachhanpairi & Saloni" },
      { label: "Status", value: "Running" },
    ],
    highlights: [
      "Premium Clubhouse [cite: 104]",
      "Swimming Pool [cite: 104]",
      "Temple & Garden [cite: 104]",
      "Sports Zones [cite: 101]",
      "Gated Security [cite: 104]",
    ],
  },
  "WELLWORTH APARTMENT 1": {
    title: "WELLWORTH APARTMENT 1",
    image: wellworthApt1Img,
    location: "Imlidih Main Road, Devpuri, Raipur",
    description:
      "A meticulously designed residential apartment project offering modern 2 BHK and 3 BHK homes near the prestigious Kamal Vihar area[cite: 122].",
    projectDetails: [
      { label: "Location", value: "Devpuri, Raipur" },
      { label: "Status", value: "Running" },
    ],
    highlights: [
      "Lift / Elevator [cite: 125]",
      "Car Parking [cite: 127]",
      "Power Backup [cite: 128]",
      "CCTV Security [cite: 129]",
      "Landscaped Gardens [cite: 127]",
    ],
  },
  "ACACIA - SEJBAHAR": {
    title: "ACACIA - SEJBAHAR",
    image: acaciaImg,
    location: "Sejbahar, Raipur, Chhattisgarh",
    description:
      "Acacia is an ultra-premium residential project featuring a stunning organically-shaped clubhouse designed by Kalaa-Handi Studio[cite: 137, 138].",
    projectDetails: [
      { label: "Location", value: "Sejbahar, Raipur" },
      { label: "Status", value: "Running" },
    ],
    highlights: [
      "Iconic Clubhouse [cite: 141]",
      "Rooftop Terrace [cite: 142]",
      "Swimming Pool [cite: 143]",
      "Landscaped Gardens [cite: 145]",
      "Premium Villas [cite: 146]",
    ],
  },
  "WELLWORTH APARTMENT 2": {
    title: "WELLWORTH APARTMENT 2",
    image: wellworthApt2Img,
    location: "Kamal Vihar, Raipur, Chhattisgarh",
    description:
      "Strategically located in Kamal Vihar, offering thoughtful apartments with premium specifications and modern amenities[cite: 180, 181].",
    projectDetails: [
      { label: "Location", value: "Kamal Vihar, Raipur" },
      { label: "Status", value: "Running" },
    ],
    highlights: [
      "Modern Apartments [cite: 184]",
      "Lift/Elevator [cite: 185]",
      "CCTV Security [cite: 187]",
      "Power Backup [cite: 190]",
      "Landscaped Area [cite: 188]",
    ],
  },
};

export default async function PropertyDetail({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const property = propertiesDB[decodedSlug];

  if (!property)
    return <div className="p-10 text-center">Property Not Found</div>;

  return (
    <div className="min-h-screen bg-white font-sans py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-black mb-6 block"
        >
          &larr; Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-6">{property.title}</h1>

        <div className="w-full h-[400px] mb-8 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-medium mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {property.description}
            </p>

            <h2 className="text-2xl font-medium mb-4">Project Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {property.projectDetails.map((d, i) => (
                <div key={i} className="border-b pb-2">
                  <p className="text-sm text-gray-500">{d.label}</p>
                  <p className="font-semibold">{d.value}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-medium mb-6">Key Highlights</h2>
            <div className="flex flex-wrap gap-3">
              {property.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center bg-gray-50 border border-gray-200 px-4 py-2 rounded-full"
                >
                  <Check className="w-4 h-4 text-[#8FAF9A] mr-2" />
                  <span className="text-sm text-gray-700">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
