import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Scale className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-xl">Oregon Legal Directory</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/find-oregon-lawyer" className="hover:text-blue-400 transition">Find a Lawyer</Link>
            <Link to="/blog" className="hover:text-blue-400 transition">Blog</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link 
              to="/lawyer-signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Join Directory
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out`}
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMenu} />
        
        {/* Menu Content */}
        <div className="relative bg-slate-900 h-full w-64 shadow-xl">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
                <Scale className="h-6 w-6 text-blue-400" />
                <span className="font-bold">Oregon Legal</span>
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
              <Link
                to="/"
                className="block text-lg hover:text-blue-400 transition"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/find-oregon-lawyer"
                className="block text-lg hover:text-blue-400 transition"
                onClick={closeMenu}
              >
                Find a Lawyer
              </Link>
              <Link
                to="/blog"
                className="block text-lg hover:text-blue-400 transition"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="block text-lg hover:text-blue-400 transition"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-lg hover:text-blue-400 transition"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-slate-800">
              <Link
                to="/lawyer-signup"
                className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                onClick={closeMenu}
              >
                Join Directory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}