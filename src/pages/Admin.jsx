import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { AuthTabs } from '../components/AuthTabs';

export const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Login:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar onLoginClick={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <div className="w-24 h-24 bg-gray-800 rounded mx-auto flex items-center justify-center text-white font-bold text-sm mb-2">
              AKSIRONIX
            </div>
            <p className="text-cyan-600 font-medium mb-1">Secure Authentication</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage your insurance policies and claims
          </p>
        </div>
      </section>

      {/* Auth Form Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Auth Tabs */}
            <AuthTabs />

            {/* Admin Login Form */}
            <div className="p-8">
              {/* Restricted Access Badge */}
              <div className="flex items-center gap-2 mb-6 text-red-600">
                <AlertCircle size={20} />
                <span className="font-medium text-sm">Restricted Access</span>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Administrator Login</h2>
                <p className="text-gray-600">Access the admin dashboard and management tools</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Admin Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Admin Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="admin@secureinsure.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>

                {/* Admin Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Admin Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter admin password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-yellow-800">Security Notice:</span>
                    {' '}This login is for authorized administrators only. All access attempts are logged and monitored.
                  </p>
                </div>

                {/* Admin Sign In Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                  Admin Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="w-20 h-20 bg-gray-700 rounded flex items-center justify-center text-white font-bold text-xs mb-4">
                AKSIRONIX
              </div>
              <p className="text-sm">
                Protecting your future with comprehensive insurance solutions.
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-white mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Life Insurance</a></li>
                <li><a href="#" className="hover:text-white">Car Insurance</a></li>
                <li><a href="#" className="hover:text-white">Health Insurance</a></li>
                <li><a href="#" className="hover:text-white">Get Quote</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Terms & Privacy</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-white mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Subscribe for updates and offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l text-sm placeholder-gray-500"
                />
                <button className="px-4 py-2 bg-red-600 text-white rounded-r hover:bg-red-700">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm">© 2025 Aksironix Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
