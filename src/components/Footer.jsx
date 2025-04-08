import React from 'react';
import cricketLogo from '../assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      {/* Cricket Logo - Positioned at top center */}
      <div className="relative flex justify-center">
        <div className="absolute -top-16">
          <img 
            src={cricketLogo} 
            alt="Cricket Logo" 
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
          />
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* About Us Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Services</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-2">•</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Subscribe Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 flex-grow bg-gray-800 text-white border-none rounded-t sm:rounded-l sm:rounded-t-none outline-none text-sm sm:text-base"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-b sm:rounded-r sm:rounded-b-none text-white font-medium text-sm sm:text-base my-2 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="pt-6 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
          <p>©2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;