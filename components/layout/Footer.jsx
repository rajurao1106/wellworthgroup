import React from "react";
import logo from "@/public/layout/logo.jpg"
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#9c9588] pt-16 pb-8 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Logo & Description */}
        <div className="pr-4">
          <div className="flex items-baseline mb-6">
           <Image
      src={logo} // Replace with the actual path to your logo image
      alt="Wellworth Group Logo"
      width={48}
      height={48}
      className="object-contain"
    />
          </div>
          <p className="text-[14px] leading-relaxed max-w-[280px]">
            Residential plot developer in Raipur, Chhattisgarh. Clear title, ready
            infrastructure, fast registry. Trusted since 2015.
          </p>
        </div>

        {/* Column 2: Our Projects */}
        <div>
          <h3 className="text-[#c18d46] text-[11px] font-bold tracking-[0.15em] uppercase mb-6">
            Our Projects
          </h3>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Sakuntala — Old Dhamtari Road
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Wellworth Heights — VIP Road Corridor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Wellworth Green Valley — Ring Road No. 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Wellworth Prestige — Kachna
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Wellworth Amanaka — Amanaka Road
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Wellworth Sarona — Sarona
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-[#c18d46] text-[11px] font-bold tracking-[0.15em] uppercase mb-6">
            Company
          </h3>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Buyer Reviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Sakuntala Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Book Site Visit
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Reach Us */}
        <div>
          <h3 className="text-[#c18d46] text-[11px] font-bold tracking-[0.15em] uppercase mb-6">
            Reach Us
          </h3>
          <div className="flex flex-col gap-4 text-[14px]">
            <p className="leading-relaxed">
              Currency Tower, 3rd Floor, VIP Road,
              <br />
              Raipur — 492 001
            </p>
            <div className="flex items-center gap-2 mt-1">
              {/* Custom Pink Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#d92d7b]"
              >
                <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM16.2 16.5l-2.1.8c-.3.1-.7.1-1-.1-2.2-1.2-4-3-5.2-5.2-.2-.3-.2-.7-.1-1l.8-2.1c.2-.4.6-.6 1-.5l2.1.4c.4.1.7.5.8.9l.4 1.9c.1.4-.1.8-.4 1l-1.2.9c.7 1.5 1.9 2.7 3.4 3.4l.9-1.2c.3-.3.7-.4 1-.4l1.9.4c.4.1.7.4.9.8l.4 2.1c.1.4-.1.9-.6 1.1z" />
              </svg>
              <a
                href="tel:+916260324413"
                className="hover:text-white transition-colors duration-300"
              >
                +916260324413
              </a>
            </div>
            <p>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                WhatsApp Us
              </a>
            </p>
          </div>
        </div>

      </div>

      {/* Footer Bottom Strip */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center text-[12px] text-[#7a7469]">
        <p>© 2025 Wellworth Group. All rights reserved.</p>
        <p className="mt-4 md:mt-0 uppercase tracking-[0.15em] font-medium text-[10px]">
          Design and Developed By Zerogravityweb
        </p>
      </div>
    </footer>
  );
};

export default Footer;