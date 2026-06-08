"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Montserrat } from "next/font/google";
import logo from "@/public/layout/logo.jpg"
import Image from "next/image";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    notes: "",
  });

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Properties", href: "#properties" },
    { name: "Project", href: "#project" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call, database entry)
    console.log("Form Submitted:", formData);
    alert("Thank you! Your site visit request has been received.");
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", date: "", notes: "" });
  };

  return (
    <>
      <nav className={`w-full fixed z-50 top-0 left-0 px-4 ${montserrat.variable} font-sans`}>
        <div
          className={`max-w-4xl mx-auto mt-5 bg-white/30 backdrop-blur-xl border ${
            isOpen ? "max-lg:rounded-xl rounded-full" : "rounded-full"
          } border-white/20 shadow-lg overflow-hidden`}
        >
          <div className="px-6 py-2 flex items-center justify-between">
            {/* Logo */}
            <div className="relative text-3xl h-10 w-28 flex items-center font-bold tracking-wider">
               <Image
                    src={logo} // Replace with the actual path to your logo image
                    alt="Wellworth Group Logo"
                    width={48}
                    height={48}
                    className="object-contain rounded-full"
                  />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </ul>

            {/* Right Side: CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:block px-5 py-2 rounded-full bg-[#8FAF9A] text-white text-sm font-medium hover:bg-white hover:text-black border border-white transition cursor-pointer"
              >
                Book Site Visit
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-1 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`${isOpen ? "max-h-screen opacity-100 block" : "max-h-0 opacity-0 hidden"}`}
          >
            <ul className="flex flex-col items-center gap-4 pb-6 font-medium border-t border-white/10 mt-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-2 hover:bg-white/10"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="sm:hidden px-6 py-2 rounded-full bg-[#8FAF9A] text-white text-sm font-medium w-[80%] max-w-xs cursor-pointer"
              >
                Book Site Visit
              </button>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- GET A QUOTE / SITE VISIT MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md ${montserrat.variable} font-sans`}>
          {/* Modal Card */}
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Get a Quote</h3>
              <p className="text-xs text-gray-500 mt-1">
                Fill out the details below to schedule your site visit and receive custom pricing.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A] focus:border-transparent text-gray-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A] focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A] focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Visit Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A] focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Special Requirements / Notes</label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Tell us about your specific property preferences..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF9A] focus:border-transparent text-gray-900 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#8FAF9A] text-white text-sm font-semibold hover:bg-[#7ba087] transition shadow-md cursor-pointer mt-2"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}