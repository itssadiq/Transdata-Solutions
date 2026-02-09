import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Plus,
  Minus,
} from "lucide-react";

const MobileMenu = ({ isOpen, onClose, solutionsData }) => {
  const [isSolutionsExpanded, setIsSolutionsExpanded] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);

  const mobileLinkClass = ({ isActive }) =>
    `block text-2xl font-bold border-b border-gray-100 pb-4 ${isActive ? "text-td-yellow" : "text-black"}`;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[60] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <img
            src="/LOGO_1.png"
            alt="Logo"
            className="w-[120px] object-contain invert brightness-0"
          />
          <button
            onClick={onClose}
            className="text-black p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-6 space-y-6">
          <NavLink to="/" className={mobileLinkClass} onClick={onClose}>
            Home
          </NavLink>

          {/* SOLUTIONS ACCORDION */}
          <div className="border-b border-gray-100 pb-4">
            <div className="flex justify-between items-center pb-2">
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  `text-2xl font-bold ${isActive ? "text-td-yellow" : "text-black"}`
                }
                onClick={onClose}
              >
                Solutions
              </NavLink>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsSolutionsExpanded(!isSolutionsExpanded);
                }}
                className="p-2 text-black active:scale-95 transition-transform"
              >
                {isSolutionsExpanded ? <Minus size={24} /> : <Plus size={24} />}
              </button>
            </div>

            {/* Main Dropdown Animation */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${isSolutionsExpanded ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
              <div className="pl-2 space-y-4">
                {solutionsData.map((cat) => {
                  const isOpen = activeMobileCategory === cat.id;
                  return (
                    <div
                      key={cat.id}
                      className={`rounded-md overflow-hidden border border-gray-100 transition-all duration-300 ${isOpen ? "bg-gray-50 shadow-sm" : "bg-white"}`}
                    >
                      <button
                        onClick={() =>
                          setActiveMobileCategory(isOpen ? null : cat.id)
                        }
                        className="w-full text-left p-4 text-lg font-bold flex justify-between items-center text-gray-800"
                      >
                        {cat.title}
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-td-yellow" : "text-gray-400"}`}
                        />
                      </button>

                      {/* Inner Items - Simple Conditional Rendering for Stability */}
                      {isOpen && (
                        <div className="p-4 space-y-4 bg-white border-t border-gray-100">
                          {cat.items.map((item, idx) => (
                            <NavLink
                              key={idx}
                              to={item.link}
                              className="flex items-center gap-4 group"
                              onClick={onClose}
                            >
                              <div className="h-16 w-24 overflow-hidden rounded-md shrink-0 border border-gray-100">
                                <img
                                  src={item.img}
                                  className="w-full h-full object-cover"
                                  alt=""
                                />
                              </div>
                              <p className="text-sm font-bold text-gray-600 group-hover:text-black transition-colors">
                                {item.name}
                              </p>
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <NavLink to="/about" className={mobileLinkClass} onClick={onClose}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={mobileLinkClass} onClick={onClose}>
            Contact Us
          </NavLink>
        </div>

        <div className="p-8 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">
            Follow Us
          </p>
          <div className="flex gap-8 justify-start">
            <a
              href="#"
              className="text-gray-400 hover:text-[#0077b5] transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#E1306C] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#1877F2] transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
