import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Search,
  Plus,
  Minus,
} from "lucide-react";
import logo from "../assets/LOGO_1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] =
    useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // 1. Scroll Handler (Navbar Appearance)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Body Scroll Lock (When Menu Open)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset"; // Cleanup on unmount
    };
  }, [isMobileMenuOpen]);

  // 3. Reset Mobile Menu on Route Change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesExpanded(false);
  }, [location.pathname]);

  const servicesList = [
    { id: "infrastructure-solutions", name: "Infrastructure Solutions" },
    { id: "cloud-solutions", name: "Cloud Solutions" },
    { id: "it-managed-services", name: "IT Managed Services" },
    { id: "data-management", name: "Data Management" },
    { id: "cybersecurity-solutions", name: "Cybersecurity Solutions" },
    { id: "digital-transformation", name: "Digital Transformation" },
    { id: "collaboration-solutions", name: "Collaboration Solutions" },
    { id: "business-applications", name: "Business Applications" },
    { id: "emerging-technologies", name: "Emerging Technologies" },
  ];

  // Helper for Link Styles
  const linkClass = ({ isActive }) =>
    `font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow ${
      isActive ? "text-td-yellow" : scrolled ? "text-black" : "text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block text-2xl font-bold border-b border-gray-100 pb-4 ${
      isActive ? "text-td-yellow" : "text-black"
    }`;

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 w-full z-50 px-6 md:px-8 py-3 flex justify-between items-center border-b border-white/10 transition-all duration-300 group ${
          scrolled ? "bg-white border-gray-200 shadow-sm py-2" : ""
        }`}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        {/* Logo */}
        <NavLink to="/" className="z-50 relative">
          <img
            src={logo}
            alt="TransData"
            className={`w-40 md:w-[180px] object-contain transition-[filter] duration-300 ${
              scrolled ? "brightness-100 invert-0" : "brightness-0 invert"
            }`}
          />
        </NavLink>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8 h-full">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/solutions" className={linkClass}>
            Solutions
          </NavLink>

          {/* Services Dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
          >
            <div
              className={`font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow flex items-center gap-1 cursor-pointer ${
                location.pathname.includes("/services")
                  ? "text-td-yellow"
                  : scrolled
                    ? "text-black"
                    : "text-white"
              }`}
            >
              Services <ChevronDown size={12} />
            </div>

            {/* Panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl border-t-4 border-td-yellow transition-all duration-300 origin-top mt-5 ${
                isServicesOpen
                  ? "opacity-100 scale-y-100 visible"
                  : "opacity-0 scale-y-95 invisible"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-8">
                {servicesList.map((service) => (
                  <NavLink
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="group flex items-center justify-between text-sm font-bold text-gray-600 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                    <ArrowRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-td-yellow"
                    />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- DESKTOP RIGHT --- */}
        <div
          className={`hidden md:flex items-center gap-6 ${scrolled ? "text-black" : "text-white"}`}
        >
          <button className="hover:text-td-yellow transition-colors">
            <Search size={18} />
          </button>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[0.7rem] font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-colors ${
                isActive
                  ? "bg-td-yellow text-black"
                  : scrolled
                    ? "bg-black text-white hover:bg-td-yellow hover:text-black"
                    : "bg-white text-black hover:bg-td-yellow hover:text-black"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button
          className={`md:hidden z-50 ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <img
            src="/LOGO_1.png"
            alt="Logo"
            className="w-[120px] object-contain invert brightness-0"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-black p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-8 space-y-6">
          <NavLink to="/" className={mobileLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={mobileLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/solutions" className={mobileLinkClass}>
            Solutions
          </NavLink>

          <div className="border-b border-gray-100 pb-4">
            <button
              onClick={() =>
                setIsMobileServicesExpanded(!isMobileServicesExpanded)
              }
              className="w-full flex justify-between items-center text-2xl font-bold text-black"
            >
              Services
              {isMobileServicesExpanded ? (
                <Minus size={20} />
              ) : (
                <Plus size={20} />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesExpanded ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="pl-4 border-l-2 border-td-yellow space-y-3">
                {servicesList.map((service) => (
                  <NavLink
                    key={service.id}
                    to={`/services/${service.id}`}
                    className={({ isActive }) =>
                      `block text-base font-medium ${isActive ? "text-black font-bold" : "text-gray-500"}`
                    }
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/contact" className={mobileLinkClass}>
            Contact Us
          </NavLink>
        </div>

        <div className="p-8 bg-gray-50 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">
            Follow Us
          </p>
          <div className="flex gap-8">
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

export default Navbar;
