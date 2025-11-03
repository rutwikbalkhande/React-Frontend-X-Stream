import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Navbar = ({ onProductsClick, onClaimsClick, onLoginClick }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isClaimsOpen, setIsClaimsOpen] = useState(false);
  const navigate = useNavigate();

  const handleProductsClick = (e) => {
    e.preventDefault();
    setIsProductsOpen(!isProductsOpen);
    if (onProductsClick) {
      onProductsClick();
    }
  };

  const handleClaimsClick = (e) => {
    e.preventDefault();
    setIsClaimsOpen(!isClaimsOpen);
    if (onClaimsClick) {
      onClaimsClick();
    }
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded flex items-center justify-center text-white font-bold text-sm">
                AKSIRONIX
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Home
              </a>

              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={handleProductsClick}
                  className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1 text-sm"
                >
                  Products
                  <ChevronDown size={18} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Claims Dropdown */}
              <div className="relative">
                <button
                  onClick={handleClaimsClick}
                  className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1 text-sm"
                >
                  Claims
                  <ChevronDown size={18} className={`transition-transform ${isClaimsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                About
              </a>

              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
                Contact
              </a>
            </div>

            {/* Right side - Search, Login, Get Started */}
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-700 hover:text-gray-900">
                <Search size={20} />
              </button>

              <button
                onClick={onLoginClick}
                className="px-4 py-2 text-cyan-600 font-medium hover:text-cyan-700 text-sm"
              >
                Login
              </button>

              <button className="px-4 py-2 bg-cyan-600 text-white rounded-md font-medium hover:bg-cyan-700 text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown Sections - Products */}
      {isProductsOpen && (
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Life Insurance</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive life coverage for you and your family with lifetime benefits.</p>
                <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">Learn More →</button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Car Insurance</h3>
                <p className="text-gray-600 text-sm mb-4">Protect your vehicle with complete coverage including third-party liability.</p>
                <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">Learn More →</button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Health Insurance</h3>
                <p className="text-gray-600 text-sm mb-4">Healthcare coverage for you and your dependents with cashless hospitals.</p>
                <button className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dropdown Sections - Claims */}
      {isClaimsOpen && (
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">File a Claim</h3>
                <p className="text-gray-600 text-sm mb-4">Submit your insurance claim quickly and easily through our online portal.</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Policy Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                  <button className="w-full px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 text-sm">
                    Start Claim
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Claim Status</h3>
                <p className="text-gray-600 text-sm mb-4">Check the status of your submitted claims in real-time.</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Claim Reference Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                  <input
                    type="email"
                    placeholder="Registered Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                  <button className="w-full px-4 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 text-sm">
                    Check Status
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
