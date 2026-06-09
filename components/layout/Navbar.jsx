"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Montserrat } from "next/font/google";
import logo from "@/public/layout/logo.jpg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    notes: "",
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Properties", href: "/property" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your site visit request has been received. Our team will contact you shortly.");
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", date: "", notes: "" });
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${montserrat.variable} font-sans ${scrolled ? "pt-2" : "pt-4 md:pt-6"}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`flex items-center justify-between px-6 py-3 transition-all duration-300 ${
              scrolled || isOpen
                ? "bg-white shadow-lg rounded-2xl md:rounded-full border border-gray-100"
                : "bg-white/90 backdrop-blur-md shadow-sm rounded-2xl md:rounded-full border border-white/20"
            }`}
          >
            {/* Logo Section */}
            <Link href="/" className="relative flex items-center gap-2 z-50">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-gray-100">
                <Image
                  src={logo}
                  alt="Wellworth Group"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-semibold text-gray-900 text-lg tracking-tight hidden sm:block">
                Wellworth Group
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#8FAF9A] font-medium text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Side: CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4 z-50">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:flex items-center gap-2 bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
              >
                <CalendarCheck size={16} />
                Schedule Visit
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors bg-gray-50 rounded-full"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden absolute left-4 right-4 top-[70px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
              isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-[#8FAF9A] font-medium text-base transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full flex justify-center items-center gap-2 bg-[#8FAF9A] text-white px-6 py-3 rounded-xl font-medium shadow-sm active:scale-95 transition-transform"
                >
                  <CalendarCheck size={18} />
                  Book Site Visit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- SCHEDULE VISIT MODAL --- */}
      {isModalOpen && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm ${montserrat.variable} font-sans transition-opacity`}>
          
          {/* Modal Container */}
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Site Visit</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Experience our properties firsthand. Fill out the details below to arrange a guided tour with our real estate experts.
              </p>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A]/50 focus:border-[#8FAF9A] text-gray-900 placeholder-gray-400 bg-gray-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A]/50 focus:border-[#8FAF9A] text-gray-900 placeholder-gray-400 bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A]/50 focus:border-[#8FAF9A] text-gray-900 placeholder-gray-400 bg-gray-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Visit Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A]/50 focus:border-[#8FAF9A] text-gray-900 bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Special Requirements (Optional)</label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="E.g., I'm interested in commercial plots..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A]/50 focus:border-[#8FAF9A] text-gray-900 placeholder-gray-400 bg-gray-50/50 resize-none"
                />
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                className="w-full py-3.5 mt-2 rounded-xl bg-[#8FAF9A] hover:bg-[#7a9985] text-white font-semibold transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-[#8FAF9A]/30 outline-none"
              >
                Confirm Booking
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}