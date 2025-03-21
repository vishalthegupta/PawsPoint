import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <div className="bg-black pt-8 text-white text-xs px-8">
    
 {/* Footer Top */}
  <div className="mx-auto w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
  {/* About Section */}
  <div className="flex flex-col justify-between">
    <h3 className="text-sm font-semibold">About Us</h3>
    <p className="text-xs mt-1 text-white/[80%]">
      PawsPoint is your trusted companion for expert pet care advice, products, and services. We ensure your furry friends get the best care possible.
    </p>
  </div>

{/* Quick Links */}
<div className="flex flex-col">
  <h3 className="text-sm font-semibold">Quick Links</h3>
  <ul className="text-xs text-white/[80%] mt-2 space-y-1">
    <li><a href="#" className="hover:text-gray-400">About Us</a></li>
    <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
  </ul>
</div>


  {/* Contact Section */}
  <div className="flex flex-col justify-between">
    <h3 className="text-sm font-semibold">Contact Us</h3>
    <p className="text-xs mt-1 text-white/[80%]">PawsPoint Pvt. Ltd.</p>
    <p className="text-xs text-white/[80%]">123 Pet Street, Kolkata, WB</p>
    <p className="text-xs text-white/[80%]">Email: help@pawspoint.com</p>
    <p className="text-xs text-white/[80%]">Phone: +91 1800123444</p>
  </div>

  {/* Information Section */}
  <div className="flex flex-col justify-between">
    <h3 className="text-sm font-semibold">Information</h3>
    <ul className="mt-1 text-xs text-white/[80%] space-y-1">
      <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
      <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
      <li><a href="#" className="hover:text-gray-400">Return & Exchanges</a></li>
      <li><a href="#" className="hover:text-gray-400">Payment & Shipping Policy</a></li>
    </ul>
  </div>
</div>


    
    
    {/* Footer Bottom */}
    <div className="mt-8 flex flex-col md:flex-row items-center justify-between px-4 w-full">
  {/* Left Section: Logo */}
  <div className="flex items-center">
    <img src={logo} alt="Logo" className="w-20 h-auto" />
  </div>

  {/* Middle Section: Copyright */}
  <div className="flex flex-col items-center mt-4 md:mt-0">
    {/* Social Media Icons */}
    <div className="flex space-x-4 mb-2">
      <FaFacebookF size={16} className="text-white hover:text-blue-600 cursor-pointer" />
      <FaInstagram size={16} className="text-white hover:text-pink-600 cursor-pointer" />
    </div>

    {/* Copyright */}
    <p className="text-white/[80%] text-center">© 2025 PawsPoint Pvt. Ltd. All Rights Reserved.</p>
  </div>

  {/* Right Section: App Store & Play Store */}
  <div className="flex space-x-4 mt-4 md:mt-0">
    <a target="_blank" href="#">
      <img alt="Google Play" className="w-24 h-auto" src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" />
    </a>
    <a target="_blank" href="#">
      <img alt="App Store" className="w-24 h-auto" src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" />
    </a>
  </div>
</div>

    </div>
  );
};

export default Footer;
