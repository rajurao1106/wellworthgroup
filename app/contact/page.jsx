"use client";

import React from "react";
import { motion } from "framer-motion";

// Reusable Contact Info Item Component
const ContactInfoItem = ({ icon, title, lines }) => (
  <div className="flex items-start gap-4">
    {/* Icon Container with subtle background accent shape */}
    <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
      <div className="absolute inset-0 bg-[#f5ebe8] rounded-tl-xl rounded-br-2xl rounded-tr-sm rounded-bl-sm opacity-60 transform rotate-12 scale-110"></div>
      <div className="relative z-10 text-gray-800">{icon}</div>
    </div>

    {/* Content */}
    <div>
      <h4 className="text-gray-900 font-bold text-lg mb-2 relative pl-3 border-l-[3px] border-[#82C341] leading-none">
        {title}
      </h4>
      <div className="space-y-2">
        {lines.map((line, index) => (
          <p key={index} className="text-gray-500 text-sm leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section className="pt-20 pt-30 pb-0 font-sans bg-[#fafafa]">
      {/* Top Grid: Location & Form */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Location Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 lg:pr-8" // Slightly expanded column to fit addresses better
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Location Details
          </h2>
          <p className="text-gray-500 text-sm mb-12 leading-relaxed">
            Visit our <span className="font-bold text-gray-800">Agent FAQ</span> page for answers to common questions.
          </p>

          <div className="space-y-10">
            <ContactInfoItem
              title="Addresses"
              lines={[
                <span key="branch">3018 Currency Tower, Third Floor, V.I.P Chowk Raipur, Chhattisgarh</span>,
              ]}
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />

            <ContactInfoItem
              title="WhatsApp Number"
              lines={[
               
                "+91 8878309000"
              ]}
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              }
            />

            <ContactInfoItem
              title="Email"
              lines={["wellworthrealty@gmail.com"]}
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              }
            />

            <ContactInfoItem
              title="Working Hours"
              lines={["Monday - Saturday", "10:00 AM - 7:00 PM"]}
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              }
            />
          </div>
        </motion.div>

        {/* Right Column: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 bg-white p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-sm relative z-10"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Contact With Us
          </h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-200 p-4 text-gray-700 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors bg-transparent rounded-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 p-4 text-gray-700 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors bg-transparent rounded-none"
              />
            </div>
            
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full border border-gray-200 p-4 text-gray-700 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors bg-transparent resize-none rounded-none"
            ></textarea>

            <div>
              <button
                type="submit"
                className="bg-[#82C341] hover:bg-[#6fa836] text-white font-bold text-sm tracking-wider uppercase px-8 py-4 transition-colors duration-300 shadow-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Bottom Full-Width Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full h-[400px] md:h-[500px] mt-20 relative bg-gray-200"
      >
        {/* Replace the 'src' URL with your exact Google Maps Embed URL for Wellworth Group */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1413.2481759462678!2d81.67869021757528!3d21.238646151007664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd3a6a311c0d%3A0xfa933870608a6546!2s5085%2C%20VIP%20Rd%2C%20Vishal%20Nagar%2C%20Raipur%2C%20Chhattisgarh%20492001!5e0!3m2!1sen!2sin!4v1781088385829!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default ContactSection;