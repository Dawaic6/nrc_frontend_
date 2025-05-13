import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../assets/NRC.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#414868] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center sm:items-start">
          <a href="/" className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="NRC Logo" className="w-12 h-12 rounded-full" />
            <span className="font-bold text-center sm:text-left">Nursing Research Club</span>
          </a>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          </div>
        </div>

        {/* Services */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-3 text-lg">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline hover:text-green-400">Research</a></li>
            <li><a href="#" className="hover:underline hover:text-green-400">Courses</a></li>
            <li><a href="#" className="hover:underline hover:text-green-400">Publication</a></li>
          </ul>
        </div>

        {/* NRC */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-3 text-lg">NRC</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline hover:text-green-400">About Us</a></li>
            <li><a href="#" className="hover:underline hover:text-green-400">Publication</a></li>
            <li><a href="#" className="hover:underline hover:text-green-400">Join Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-3 text-lg">Contact</h3>
          <div className="space-y-2">
            <p>Call: <a href="tel:+250788844556" className="hover:underline hover:text-green-400">+250788844556</a></p>
            <p>Email: <a href="mailto:NRC@gmail.com" className="hover:underline hover:text-green-400">NRC@gmail.com</a></p>
            <p>Kigali, Rwanda</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4 lg:col-span-1 flex flex-col items-center text-center sm:text-left">
          <div className="w-full max-w-md">
            <h3 className="font-bold mb-3 text-lg">Newsletter</h3>
            <p className="mb-3">Subscribe for updates on research and publications</p>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2">
              <div className="relative w-full">
                <FiMail className="absolute left-3 top-3 text-gray-500" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="pl-10 pr-3 py-2 rounded-lg text-gray-800 border border-gray-300 w-full"
                />
              </div>
              <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-600 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Nursing Research Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
