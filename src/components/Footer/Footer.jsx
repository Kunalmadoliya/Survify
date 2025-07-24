import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h1 className="text-2xl font-bold">HomeServify</h1>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Copyright © 2025 HomeServify
              <br />
              All rights reserved
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6 justify-center md:justify-start">
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Gradient Text Logo */}
        <div className="text-center mt-16 w-full">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white tracking-wide inline-block"
            style={{
              maskImage: "linear-gradient(to top, white, transparent)",
              WebkitMaskImage: "linear-gradient(to top, white, transparent)",
            }}
          >
            HomeServify
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
