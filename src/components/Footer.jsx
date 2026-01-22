import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200 text-gray-800">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          <div className="space-y-8">
            <img
              src="/LOGO_1.png"
              alt="TransData Logo"
              className="w-[150px] object-contain"
            />
            <p className="text-sm leading-relaxed text-gray-600">
              With more than 12 years of experience, TransData Solutions is a
              leading end-to-end digital solutions provider, offering the
              region's broadest portfolio of intelligent infrastructure.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-black mb-4">
                Subscribe to our Newsletter
              </h4>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-50 border-b border-gray-300 py-3 px-2 focus:outline-none focus:border-black transition-colors text-sm"
                />
                <button className="bg-black text-white text-sm font-bold uppercase tracking-wide py-3 px-6 hover:bg-td-yellow hover:text-black transition-colors self-start rounded-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-base font-bold text-black mb-6 text-purple-900">
              General
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li>
                <Link to="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-black transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  All Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-black transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-base font-bold text-black mb-6 text-purple-900">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Technology Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Security Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Infrastructure Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Managed Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Hybrid IT & Cloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Technical Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-base font-bold text-black mb-6 text-purple-900">
              Social Media
            </h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-black transition-colors"
                >
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm text-xs">
                    <Facebook size={14} fill="white" strokeWidth={0} />
                  </div>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-black transition-colors"
                >
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm text-xs">
                    <Instagram size={14} />
                  </div>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-black transition-colors"
                >
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm text-xs">
                    <Twitter size={14} fill="white" strokeWidth={0} />
                  </div>
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/transdata-solutions-llc/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-black transition-colors"
                >
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm text-xs">
                    <Linkedin size={14} fill="white" strokeWidth={0} />
                  </div>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs text-gray-500">
          <p>&copy; 2024 TransData Solutions. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" class="hover:text-black transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
