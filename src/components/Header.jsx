import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [claimsOpen, setClaimsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        style={{
          backgroundColor: "#fdfdfd"
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white text-lg"
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                color: "#f87416"
              }}>
              AX
            </div>
            <span
              className="font-bold text-gray-900 hidden sm:inline text-lg"
              style={{
                color: "rgb(189, 25, 62)",
                fontStyle: "italic",
                textAlign: "center"
              }}>AKSHRONIX</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/Home" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
            Home
          </a>
          
          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => { setProductsOpen(true); setClaimsOpen(false); }}
          >
            <button 
              className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center">
              Products
              <ChevronDown size={16} className={`ml-1 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            {productsOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200"
                onMouseLeave={() => setProductsOpen(false)}
              >
                <a href="/Login" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 font-medium text-sm">
                  Life Insurance
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 font-medium text-sm">
                  Health Insurance
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 font-medium text-sm">
                  Car Insurance
                </a>
              </div>
            )}
          </div>
          
          {/* Claims Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => { setClaimsOpen(true); setProductsOpen(false); }}
          >
            <button 
              className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center">
              Claims
              <ChevronDown size={16} className={`ml-1 transition-transform ${claimsOpen ? 'rotate-180' : ''}`} />
            </button>
            {claimsOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-200"
                onMouseLeave={() => setClaimsOpen(false)}
              >
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 font-medium text-sm">
                  Submit Claim
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 font-medium text-sm">
                  Track Claim
                </a>
              </div>
            )}
          </div>
          
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
            Contact
          </a>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 text-gray-700 hover:text-gray-900">
            <Search size={20} />
          </button>
          <button className="px-4 py-2 text-cyan-500 border border-cyan-500 rounded-lg hover:bg-cyan-50 font-medium text-sm">
            Login
          </button>
          <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 font-medium text-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2">Home</a>
            
            {/* Mobile Products Dropdown */}
            <div>
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full text-left text-gray-700 hover:text-gray-900 font-medium text-sm py-2 flex items-center justify-between">
                Products
                <ChevronDown size={16} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <a href="#" className="block text-gray-600 hover:text-cyan-600 font-medium text-sm py-2">
                    Life Insurance
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-cyan-600 font-medium text-sm py-2">
                    Health Insurance
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-cyan-600 font-medium text-sm py-2">
                    Car Insurance
                  </a>
                </div>
              )}
            </div>
            
            {/* Mobile Claims Dropdown */}
            <div>
              <button 
                onClick={() => setClaimsOpen(!claimsOpen)}
                className="w-full text-left text-gray-700 hover:text-gray-900 font-medium text-sm py-2 flex items-center justify-between">
                Claims
                <ChevronDown size={16} className={`transition-transform ${claimsOpen ? 'rotate-180' : ''}`} />
              </button>
              {claimsOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <a href="#" className="block text-gray-600 hover:text-cyan-600 font-medium text-sm py-2">
                    Submit Claim
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-cyan-600 font-medium text-sm py-2">
                    Track Claim
                  </a>
                </div>
              )}
            </div>
            
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2">About</a>
            <a href="#" className="block text-gray-700 hover:text-gray-900 font-medium text-sm py-2">Contact</a>
            <div className="flex space-x-2 pt-2">
              <button className="flex-1 px-4 py-2 text-cyan-500 border border-cyan-500 rounded-lg font-medium text-sm">
                Login
              </button>
              <button className="flex-1 px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
