import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import logo from "../assets/LOGO_1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for dropdown
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services Data for Dropdown
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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 px-8 py-3 flex justify-between items-center border-b border-white/10 transition-all duration-300 group ${
        scrolled ? "bg-white border-gray-200 shadow-sm py-2" : ""
      }`}
      onMouseLeave={() => setIsServicesOpen(false)} // Close when leaving nav area
    >
      {/* Logo */}
      <Link to="/" className="z-50 relative">
        <img
          src={logo}
          alt="TransData"
          id="nav-logo"
          className={`w-[160px] md:w-[180px] object-contain transition-[filter] duration-300 ${
            scrolled ? "brightness-100 invert-0" : "brightness-0 invert"
          }`}
        />
      </Link>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-8 h-full">
        <Link
          to="/"
          className={`font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow ${scrolled ? "text-black" : "text-white"}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow ${scrolled ? "text-black" : "text-white"}`}
        >
          About Us
        </Link>
        <a
          href="#partner-marquee"
          onClick={(e) => handleNavClick(e, "partner-marquee")}
          className={`font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow ${scrolled ? "text-black" : "text-white"}`}
        >
          Partners
        </a>

        {/* SERVICES DROPDOWN TRIGGER */}
        <div
          className="relative h-full flex items-center"
          onMouseEnter={() => setIsServicesOpen(true)}
        >
          <Link
            to="/services/infrastructure-solutions" // Default link
            className={`font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow flex items-center gap-1 ${scrolled ? "text-black" : "text-white"}`}
          >
            Services <ChevronDown size={12} />
          </Link>

          {/* DROPDOWN PANEL */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl border-t-4 border-td-yellow transform transition-all duration-300 origin-top ${
              isServicesOpen
                ? "opacity-100 scale-y-100 visible"
                : "opacity-0 scale-y-95 invisible"
            }`}
            style={{ marginTop: "20px" }} // Spacing from nav
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-8">
              {servicesList.map((service) => (
                <Link
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
                </Link>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#industries"
          onClick={(e) => handleNavClick(e, "industries")}
          className={`font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow ${scrolled ? "text-black" : "text-white"}`}
        >
          Industries
        </a>
      </div>

      {/* Contact Btn */}
      <div
        className={`flex items-center gap-6 ${scrolled ? "text-black" : "text-white"}`}
      >
        <button className="transition-colors hover:text-td-yellow">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <Link
          to="/contact"
          className={`text-[0.7rem] font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-colors ${
            scrolled
              ? "bg-black text-white hover:bg-td-yellow hover:text-black"
              : "bg-white text-black hover:bg-td-yellow hover:text-black"
          }`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
