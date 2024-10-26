import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">Oregon Legal Directory</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Connecting Oregonians with trusted legal professionals since 2024.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">oregonlawyer.org</p>
              <div className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@oregonlawyer.org" className="hover:text-white">
                  contact@oregonlawyer.org
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+15035550123" className="hover:text-white">
                  (503) 555-0123
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Portland, OR 97205</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/find-oregon-lawyer" className="text-gray-400 hover:text-white">
                  Find a Lawyer
                </Link>
              </li>
              <li>
                <Link to="/lawyer-signup" className="text-gray-400 hover:text-white">
                  Join Directory
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Legal Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/practice-areas/family-law" className="text-gray-400 hover:text-white">
                  Family Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/business-law" className="text-gray-400 hover:text-white">
                  Business Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/personal-injury" className="text-gray-400 hover:text-white">
                  Personal Injury
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/criminal-defense" className="text-gray-400 hover:text-white">
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/estate-planning" className="text-gray-400 hover:text-white">
                  Estate Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-gray-400 hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-white">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-400 hover:text-white">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} oregonlawyer.org. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Not a lawyer referral service. Information provided does not constitute legal advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}