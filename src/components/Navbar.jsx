import React, { useState } from 'react';
import logo from '../assets/logo.png';
import coinLogo from '../assets/icons8-coin-50.png';

const Navbar = ({ coin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='my-5 px-4 sm:px-6 max-w-7xl mx-auto'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <img src={logo} alt="Cricket Logo" className='max-h-12' />
        </div>

        {/* Mobile Menu Button */}
        <div className='flex md:hidden'>
          <button
            type='button'
            className='text-gray-700 hover:text-black'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {!isMenuOpen ? (
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            ) : (
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:block'>
          <nav>
            <ul className='flex items-center gap-10 text-[#131313]'>
              <li className='hover:text-gray-600 cursor-pointer'>Home</li>
              <li className='hover:text-gray-600 cursor-pointer'>Fixture</li>
              <li className='hover:text-gray-600 cursor-pointer'>Teams</li>
              <li className='hover:text-gray-600 cursor-pointer'>Schedules</li>
              <li className='border border-gray-700 px-3 py-2 rounded-xl flex items-center gap-2 font-bold'>
                <img className='w-6 h-6' src={coinLogo} alt="Coin" />
                <span>{coin} Coin</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden mt-4 bg-white rounded-lg shadow-lg p-4'>
          <nav>
            <ul className='flex flex-col space-y-4 text-[#131313]'>
              <li className='hover:text-gray-600 cursor-pointer py-2 border-b border-gray-100'>Home</li>
              <li className='hover:text-gray-600 cursor-pointer py-2 border-b border-gray-100'>Fixture</li>
              <li className='hover:text-gray-600 cursor-pointer py-2 border-b border-gray-100'>Teams</li>
              <li className='hover:text-gray-600 cursor-pointer py-2 border-b border-gray-100'>Schedules</li>
              <li className='py-2'>
                <div className='inline-flex border border-gray-700 px-3 py-2 rounded-xl items-center gap-2 font-bold'>
                  <img className='w-6 h-6' src={coinLogo} alt="Coin" />
                  <span>{coin} Coin</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;