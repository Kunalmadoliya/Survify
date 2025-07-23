import React, {useState} from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full">
          {/* Left Section */}
          <div>
            <h1 className="text-xl font-bold">HomeSurvify</h1>
            <p className="text-gray-400 mt-2">
              Copyright © 2025 HomeSurvify
              <br />
              All rights reserved
            </p>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-400">
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
            <ul className="space-y-2 text-gray-400">
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

          {/* Right Section */}
          <div>
            <ul className="space-y-2 text-gray-400">
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
      </div>

      <div className="text-center mt-10 relative">
        <h1
          className="text-9xl font-extrabold text-white inline-block tracking-wide" 
          style={{
            maskImage: "linear-gradient(to top, white, transparent)",
            WebkitMaskImage: "linear-gradient(to top, white, transparent)",
          }}
        >
          HomeSurvify
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
