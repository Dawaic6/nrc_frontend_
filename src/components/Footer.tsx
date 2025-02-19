import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../assets/NRC.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#414868] text-white py-3 px-1 text-base md:text-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5">
        {/* Logo Section */}
        <div>
          <a href="/" className="flex items-center space-x-1">
          <img src={logo} alt="NRC Logo" className="w-25 h-25 rounded-full" />
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-2">Services</h3>
          <ul className="space-y-0.5">
            <li><a href="#" className="hover:underline">Research</a></li>
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Publication</a></li>
          </ul>
        </div>

        {/* NRC */}
        <div>
          <h3 className="font-bold mb-2">NRC</h3>
          <ul className="space-y-0.5">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Publication</a></li>
            <li><a href="#" className="hover:underline">Join Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <div className="space-y-0.5">
          <p>Call: <a href="tel:+250788844556" className="hover:underline">+250788844556</a></p>
          <p>Email: <a href="mailto:NRC@gmail.com" className="hover:underline">NRC@gmail.com</a></p>
          <p>Kigali, Rwanda</p>
          </div>
        </div>
        {/* Newsletter */}
        <div className="space-y-0.5">
        
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-between">
      <div className="flex flex-col ">
        <div className="text-center">
          <h3 className="font-semibold">Subscribe for our Newsletter</h3>
          <p className="text-sm">For new research, new updates, and new publications</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
        <div className="relative w-full max-w-xs flex items-center space-x-2">
  <div className="relative flex-grow">
    <FiMail className="absolute left-3 top-3 text-gray-500" />
    <input 
      type="email" 
      placeholder="Input your Email" 
      className="pl-10 pr-3 py-1 rounded-lg text-gray-800 border border-gray-300 w-full"
    />
  </div>
  <button className="bg-green-500 text-white px-2 py-1 rounded-lg font-[16px]">Subscribe</button>
</div>

 

          </div>
          </div>
          </div>
            </div>
      </div>

      {/* Copyright and Social Icons */}
      <div className="max-w-6xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between border-t border-white pt-4">
        <p className="text-sm">&copy; Copyright 2025 NRC. All rights Reserved</p>
        <div className="flex space-x-4 text-xl">
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
