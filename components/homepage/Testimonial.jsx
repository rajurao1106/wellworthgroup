"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Vikram & Neha Desai",
    role: "Invested in Premium Plots",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400&h=400&fit=crop",
    text: "The transparency and professionalism they showed were unmatched. We were nervous about buying land, but their clear-title guarantee and seamless registry process gave us complete peace of mind. Truly the best real estate partners!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Commercial Plot Buyer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&fit=crop",
    text: "I was looking for a strategic location for my new business venture. The team not only found a prime corner plot but also ensured the infrastructure was ready to go. The ROI in just 2 years has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjali Mehta",
    role: "First-Time Investor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop",
    text: "As a first-time investor, I had a lot of questions. Their team was incredibly patient, guiding me through the future growth corridors of the city. I am thrilled with the appreciation value of my plot so far.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha & Kunal Kapoor",
    role: "Luxury Villa Plot Owners",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&fit=crop",
    text: "Finding a premium plot in a gated community was our priority. The team understood our needs perfectly and offered us a location that blends luxury with nature. Absolutely delighted!",
    rating: 5,
  },
  {
    id: 5,
    name: "Rohan Gupta",
    role: "Long-term Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
    text: "The capital appreciation has been brilliant. Their extensive knowledge of upcoming development zones and infrastructure projects is spot on. I've already recommended them to my friends.",
    rating: 5,
  },
  {
    id: 6,
    name: "Priya Sharma",
    role: "Residential Plot Buyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop",
    text: "A fantastic experience from start to finish. We were looking for a safe and secure place to build our dream home, and they delivered exactly what was promised with zero hassle.",
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 5000); 

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Get exactly 3 visible testimonials for the sliding window
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 40 : -40,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#F6F6F4] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E3C77A] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8FAF9A] opacity-5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl font-[Bodoni_Moda] md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-4">
            Stories of <span className="text-[#7a9985] italic">Trust</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our clients who found their perfect investment with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Display Area */}
          <div className="relative min-h-[400px] w-full flex items-center justify-center">
            
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 28 },
                  opacity: { duration: 0.25 },
                }}
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {getVisibleTestimonials().map((t, index) => (
                  <div 
                    key={`${currentIndex}-${t.id}`} 
                    // Hide 2nd and 3rd cards on smaller screens for responsive behavior
                    className={`bg-white shadow-xl rounded-2xl border border-gray-100 p-8 flex flex-col h-full relative overflow-hidden transition-all duration-300
                      ${index === 1 ? 'hidden md:flex' : ''} 
                      ${index === 2 ? 'hidden lg:flex' : ''}
                    `}
                  >
                    {/* Faded Quote Icon in Background */}
                    <Quote className="absolute top-6 right-6 w-16 h-16 text-gray-50 opacity-50 rotate-12 pointer-events-none" />

                    {/* Author Info (Top) */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="w-16 h-16 shrink-0 relative">
                        <div className="absolute inset-0 bg-[#E3C77A] rounded-full translate-x-1 translate-y-1 opacity-20"></div>
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-full h-full object-cover rounded-full border-2 border-white shadow-sm relative z-10"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#2D2D2D] leading-tight">
                          {t.name}
                        </h4>
                        <p className="text-[#8FAF9A] font-medium text-sm mt-1">
                          {t.role}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E3C77A]  text-[#E3C77A]" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-base italic leading-relaxed flex-1">
                      "{t.text}"
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#8FAF9A] hover:text-white hover:border-[#8FAF9A] transition-colors duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            {/* Pagination Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#E3C77A] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#8FAF9A] hover:text-white hover:border-[#8FAF9A] transition-colors duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}