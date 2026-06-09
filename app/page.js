import About3 from "@/components/homepage/About";
import CTA2 from "@/components/homepage/CTA";
import FeaturedProperties from "@/components/homepage/FeaturedProperties";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import AlternatingTimeline from "@/components/homepage/Milestone";
import InteriorInspiration from "@/components/homepage/Projects";
import SakuntalaPlotsSection from "@/components/homepage/SakuntalaPlotsSection";
import ServicesStackSection from "@/components/homepage/Services";
import TestimonialSection from "@/components/homepage/Testimonial";
import React from "react";

export default function page() {
  return (
    <main>
      <Hero />
      <About3 />
      <FeaturedProperties />
      {/* <SakuntalaPlotsSection /> */}
      {/* <FeaturedProperties/> */}
      <InteriorInspiration />
      <ServicesStackSection />
      <AlternatingTimeline />
      <TestimonialSection />
      {/* <HowItWorks /> */}
      <CTA2 />
    </main>
  );
}