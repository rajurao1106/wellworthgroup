import React from "react";
import logo from "@/public/layout/logo.jpg";
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
            <strong>Wellworth Group</strong> — <em>A Name You Can Trust</em>.
            <br />
            <br />
            Residential plot developer in Raipur, Chhattisgarh. Clear title,
            ready infrastructure, fast registry. Founded by Rajendra Kumar Jain.
            Trusted since 1996.
          </p>
        </div>

        {/* Column 2: Our Projects */}
        <div>
          <h3 className="text-[#c18d46] text-[11px] font-bold tracking-[0.15em] uppercase mb-6">
            Our Projects
          </h3>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <a
                href={"/property"}
                className="hover:text-white transition-colors duration-300"
              >
                Sakuntala — Old Dhamtari Road
              </a>
            </li>
            <li>
              <a
                href={"/property"}
                className="hover:text-white transition-colors duration-300"
              >
                Wellworth Heights — VIP Road Corridor
              </a>
            </li>
            <li>
              <a
                href={"/property"}
                className="hover:text-white transition-colors duration-300"
              >
                Wellworth Green Valley — Ring Road No. 1
              </a>
            </li>
            <li>
              <a
                href={"/property"}
                className="hover:text-white transition-colors duration-300"
              >
                Wellworth Prestige — Kachna
              </a>
            </li>
            <li>
              <a
                href={"/property"}
                className="hover:text-white transition-colors duration-300"
              >
                Wellworth Amanaka — Amanaka Road
              </a>
            </li>
            <li>
              <a
                href={"/property"}
                className="hover:text-white transition-colors duration-300"
              >
                Wellworth Sarona — Sarona
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-[#c18d46] text-[11px] font-bold tracking-[0.15em] uppercase mb-6">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <a
                href={"/"}
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={"/about"}
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href={"/property"}
                className="hover:text-white transition-colors duration-300"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href={"/gallery"}
                className="hover:text-white transition-colors duration-300"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href={"/contact"}
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
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
            {/* Branch Address */}
            <p className="leading-relaxed">
              <strong>Branch Office:</strong>
              <br />
              3018 Currency Tower, Third Floor,
              <br />
              V.I.P Chowk Raipur, Chhattisgarh
            </p>

            {/* HO Address */}
            <p className="leading-relaxed">
              <strong>Head Office:</strong>
              <br />
              B Wing, One, G Block, BKC,
              <br />
              Bandra (E), Mumbai, MH 400 051
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-[#d92d7b]"
                >
                  <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM16.2 16.5l-2.1.8c-.3.1-.7.1-1-.1-2.2-1.2-4-3-5.2-5.2-.2-.3-.2-.7-.1-1l.8-2.1c.2-.4.6-.6 1-.5l2.1.4c.4.1.7.5.8.9l.4 1.9c.1.4-.1.8-.4 1l-1.2.9c.7 1.5 1.9 2.7 3.4 3.4l.9-1.2c.3-.3.7-.4 1-.4l1.9.4c.4.1.7.4.9.8l.4 2.1c.1.4-.1.9-.6 1.1z" />
                </svg>
                <a
                  href="tel:+919826801809"
                  className="hover:text-white transition-colors duration-300"
                >
                  9826801809
                </a>
                <span>/</span>
                <a
                  href="tel:+916260096563"
                  className="hover:text-white transition-colors duration-300"
                >
                  6260096563
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/918878309000"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  WhatsApp: +91 8878309000
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="mailto:wellworthrealty@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  wellworthrealty@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#262626] flex flex-col md:flex-row justify-between items-center text-[12px] text-[#7a7469]">
        <p>
          © {new Date().getFullYear()} Wellworth Group. All rights reserved.
        </p>
        <p className="mt-4 md:mt-0 uppercase tracking-[0.15em] font-medium text-[10px]">
          Design and Developed By Zerogravityweb
        </p>
      </div>
    </footer>
  );
};

export default Footer;
