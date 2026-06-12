'use client';

import React, { useState } from 'react';
import { BsInstagram, BsYoutube } from 'react-icons/bs';

const StickySocials = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "wellworthrealty@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: 'Facebook',
      // Pure SVG for Facebook
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      url: 'https://www.facebook.com/profile.php?id=61590048279703',
      bgColor: 'bg-blue-600',
    },
    {
      name: 'Youtube',
      // Pure SVG for X (formerly Twitter)
      icon: (
        <BsYoutube/>
      ),
      url: 'https://www.youtube.com/@wellworthgrouprealestate',
      bgColor: 'bg-red-500',
    },
    {
      name: 'Instagram',
      // Pure SVG for Instagram
      icon: (
        <BsInstagram/>
      ),
      url: 'https://www.instagram.com/wellworthgrouprealestate/',
      bgColor: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600',
    },
  ];

  return (
    <div className="fixed -right-2 max-lg:right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 items-end">
      {/* Social Media Links */}
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 ${social.bgColor} text-white p-3 rounded-l-lg translate-x-[calc(100%-46px)] hover:translate-x-0 transition-transform duration-300 ease-in-out cursor-pointer shadow-lg w-auto min-w-[150px]`}
        >
          <div className="shrink-0">{social.icon}</div>
          <span className="font-medium text-sm whitespace-nowrap pr-2">
            {social.name}
          </span>
        </a>
      ))}

      {/* Email Link */}
    {/* Email Link */}
<a
  href={`mailto:${emailAddress}`}
  className="flex items-center gap-3 bg-emerald-600 text-white p-3 rounded-l-lg translate-x-[calc(100%-46px)] hover:translate-x-0 transition-transform duration-300 ease-in-out cursor-pointer shadow-lg w-auto min-w-[220px]"
>
  <div className="shrink-0">
    {/* Mail Icon SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  </div>
  <span className="font-medium text-sm whitespace-nowrap pr-2 text-left">
    {emailAddress}
  </span>
</a>
    </div>
  );
};

export default StickySocials;