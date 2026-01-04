import React from 'react';
import { FaInstagram, FaLinkedin, FaDiscord, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-[#C5C5C5] pt-16 px-8 border-t border-zinc-800" style={{fontFamily: 'Neue Machina, sans-serif'}}>
      <div className="w-[95vw] px-15 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-15 mb-20">
          {/* Logo and Social Links Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/images/light-logo_lNzGXRRlQ.webp" alt="Sheriyans Logo" className="w-12 h-12" />
            </div>
            <p className="text-sm text-gray-400">Let's connect with our socials</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaDiscord size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms and Condition
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing and Refund
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hire From Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Submit Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">COMMUNITY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400">Online: 11am - 8pm</p>
                <p className="text-white font-medium">+91 9993478545</p>
              </div>
              <div>
                <p className="text-gray-400">Offline: 11am - 8pm</p>
                <p className="text-white font-medium">+91 96917 78470</p>
              </div>
              <div>
                <a href="mailto:hello@sheriyans.com" className="text-gray-400 hover:text-white transition-colors">
                  hello@sheriyans.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 leading-relaxed">
                  23-B, Indrapuri Sector C,<br />
                  Bhopal(MP), 462021
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-4 border-t border-zinc-800 text-center">
          <p className="text-[#E9E9E9] text-sm pb-7">
            Copyright © 2025 Sheriyans Pvt. Ltd.<br />
            Inspired From Sheriyans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
