import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";
import Logo from "../assets/LOGO_1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Updated Unified Data - 6 Services
  const solutionsData = [
    {
      id: "managed-it",
      title: "Managed IT Services",
      items: [
        {
          name: "24/7 NOC Support",
          link: "/services/managed-it-services",
          img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "IT Support",
          link: "/services/managed-it-services",
          img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
    {
      id: "datacenter",
      title: "IT Datacenter Solutions",
      items: [
        {
          name: "Racking & Cooling",
          link: "/services/it-datacenter-solutions",
          img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Power Management",
          link: "/services/it-datacenter-solutions",
          img: "https://images.unsplash.com/photo-1622548066678-a25ead9d3849?q=80&w=400",
        },
      ],
    },
    {
      id: "networking",
      title: "Networking & Switching",
      items: [
        {
          name: "Enterprise Switching",
          link: "/services/networking-switching",
          img: "https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Wireless Infra",
          link: "/services/networking-switching",
          img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
    {
      id: "cybersecurity",
      title: "Cyber Security Services",
      items: [
        {
          name: "Threat Detection",
          link: "/services/cyber-security-services",
          img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Security Compliance",
          link: "/services/cyber-security-services",
          img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
    {
      id: "backup",
      title: "Data Backup & Protection",
      items: [
        {
          name: "Disaster Recovery",
          link: "/services/data-backup-protection",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Automated Backup",
          link: "/services/data-backup-protection",
          img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
    {
      id: "communication",
      title: "Communication & LV",
      items: [
        {
          name: "Unified Comms",
          link: "/services/communication-lv",
          img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "LV Cabling",
          link: "/services/communication-lv",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
  ];

  const linkClass = ({ isActive }) =>
    `font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow ${
      isActive ? "text-td-yellow" : scrolled ? "text-black" : "text-white"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 px-6 md:px-8 py-3 flex justify-between items-center border-b border-white/10 transition-all duration-300 group ${scrolled ? "bg-white border-gray-200 shadow-sm py-2" : ""}`}
      >
        {/* LOGO */}
        <NavLink to="/" className="z-50 relative">
          <img
            src={Logo}
            alt="TransData"
            className={`w-[140px] md:w-[180px] object-contain transition-[filter] duration-300 ${scrolled ? "brightness-100 invert-0" : "brightness-0 invert"}`}
          />
        </NavLink>

        {/* DESKTOP MENU COMPONENT */}
        <DesktopMenu
          scrolled={scrolled}
          solutionsData={solutionsData}
          linkClass={linkClass}
        />

        {/* DESKTOP RIGHT (CONTACT) */}
        <div
          className={`hidden md:flex items-center gap-6 ${scrolled ? "text-black" : "text-white"}`}
        >
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[0.7rem] font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-colors ${isActive ? "bg-td-yellow text-black" : scrolled ? "bg-black text-white hover:bg-td-yellow hover:text-black" : "bg-white text-black hover:bg-td-yellow hover:text-black"}`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`md:hidden z-50 ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* MOBILE MENU COMPONENT */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        solutionsData={solutionsData}
      />
    </>
  );
};

export default Navbar;
