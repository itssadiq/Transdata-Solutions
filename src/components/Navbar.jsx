import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/LOGO_1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to sections from different pages
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
    >
      {/* Logo */}
      <Link to="/" className="z-50">
        <img
          src={Logo}
          alt="TransData"
          id="nav-logo"
          className={`w-40 md:w-45 object-contain transition-[filter] duration-300 ${
            scrolled ? "brightness-100 invert-0" : "brightness-0 invert"
          }`}
        />
      </Link>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-8">
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
        <a
          href="#services-drag"
          onClick={(e) => handleNavClick(e, "services-drag")}
          className={`font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow ${scrolled ? "text-black" : "text-white"}`}
        >
          Services
        </a>
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
        {/* <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className={`text-[0.7rem] font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-colors ${
            scrolled
              ? "bg-black text-white hover:bg-td-yellow hover:text-black"
              : "bg-white text-black hover:bg-td-yellow hover:text-black"
          }`}
        >
          Contact Us
        </a> */}
        <Link
          to="/contact" // Use React Router Link instead of a href
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
