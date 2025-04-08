import React from 'react';
import heroIcon from '../assets/banner-main.png';
import bgShadow from '../assets/bg-shadow.png'

const Hero = ({ handleAddCoin }) => {
    return (
        <div className='relative bg-cover bg-center w-full h-[300px] sm:h-[400px] md:h-[545px] bg-black rounded-2xl flex flex-col justify-center gap-6 md:gap-10 mt-6 max-w-7xl mx-auto px-4'
            style={{ backgroundImage: `url(${bgShadow})` }}>
            
            {/* Image Container */}
            <div className='flex justify-center px-4'>
                <img 
                    src={heroIcon} 
                    alt="Cricket Team" 
                    className='w-full max-w-[200px] h-auto'
                />
            </div>

            {/* Content Container */}
            <div className='text-center space-y-2 md:space-y-4'>
                <h3 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl px-2'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h3>
                
                <p className='text-gray-400 text-base sm:text-lg md:text-xl'>
                    Beyond Boundaries Beyond Limits
                </p>

                <button 
                    onClick={handleAddCoin} 
                    className='bg-[#E7FE29] text-black px-4 py-2 sm:px-5 sm:py-3 rounded-xl cursor-pointer font-bold text-sm sm:text-base ring-2 sm:ring-3 md:ring-4 ring-inset ring-black hover:bg-[#d5e722] transition-colors'
                >
                    Claim Free Coins
                </button>
            </div>
        </div>
    );
};

export default Hero;