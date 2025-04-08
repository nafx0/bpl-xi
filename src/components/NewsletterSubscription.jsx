import React from 'react';
import bgShadow from '../assets/bg-shadow.png';

const NewsletterSubscription = () => {
  return (
    <div className="relative flex justify-center items-center w-full my-20 max-w-7xl mx-auto ">
      {/* Enhanced background shadow with increased visibility */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover transform scale-110"
        style={{ 
          backgroundImage: `url(${bgShadow})`,
          filter: 'contrast(1.2) brightness(1.1)',
          mixBlendMode: 'overlay'
        }}
      ></div>
      
      {/* Container with fixed width (83.75rem) */}
      <div className="w-full max-w-[83.75rem] relative z-10">
        {/* External white ring */}
        <div className="absolute inset-0 rounded-xl border-4 border-white border-opacity-30 -m-2"></div>
        
        {/* Glassmorphic effect background */}
        <div className="rounded-lg p-8 bg-gradient-to-b from-white to-amber-100 bg-opacity-70 backdrop-blur-md shadow-xl relative z-10 overflow-hidden text-center">
          {/* Glassmorphic overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>
          
          {/* White inseam with low transparency */}
          <div className="absolute inset-0 border-2 border-white border-opacity-30 rounded-lg"></div>
          
          {/* Content container */}
          <div className="max-w-xl mx-auto relative z-20">
            {/* Newsletter Content */}
            <h2 className="text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
            <p className="text-gray-700 mb-6">Get the latest updates and news right in your inbox!</p>
            
            {/* Subscription Form */}
            <div className="flex justify-center space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-pink-300 to-amber-300 rounded-lg text-gray-800 font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;