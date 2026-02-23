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

  const solutionsData = [
    {
      id: "managed-it",
      title: "Managed IT Services",
      items: [
        {
          name: "IT AMC Service",
          link: "/services/managed-it-services",
          img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "New Office IT Setup",
          link: "/services/managed-it-services",
          img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "IT Consultation Services",
          link: "/services/managed-it-services",
          img: "https://plus.unsplash.com/premium_photo-1661757847367-65ff2ae7c8af?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Datacenter Relocation",
          link: "/services/managed-it-services",
          img: "https://plus.unsplash.com/premium_photo-1661386266452-54ebeaf7339d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      id: "datacenter",
      title: "IT Datacenter Solutions",
      items: [
        {
          name: "Servers & Storage Solutions",
          link: "/services/it-datacenter-solutions",
          img: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg",
        },
        {
          name: "NAS Storage Solutions",
          link: "/services/it-datacenter-solutions",
          img: "https://images.unsplash.com/photo-1622548066678-a25ead9d3849?q=80&w=400",
        },
        {
          name: "Virtualization",
          link: "/services/it-datacenter-solutions",
          img: "https://images.unsplash.com/photo-1758523670318-f1b79559e1d1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "UPS Solutions",
          link: "/services/it-datacenter-solutions",
          img: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
        },
      ],
    },
    {
      id: "networking",
      title: "Networking & Switching",
      items: [
        {
          name: "Firewall Routers",
          link: "/services/networking-switching",
          img: "https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Switching",
          link: "/services/networking-switching",
          img: "https://images.unsplash.com/photo-1752595883241-f7c69d5092cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Wifi Services",
          link: "/services/networking-switching",
          img: "https://plus.unsplash.com/premium_photo-1683758343999-0975ec01d0cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "VPN Solutions",
          link: "/services/networking-switching",
          img: "https://images.pexels.com/photos/5243610/pexels-photo-5243610.jpeg",
        },
        {
          name: "Structured Cabling",
          link: "/services/networking-switching",
          img: "https://images.pexels.com/photos/5658532/pexels-photo-5658532.jpeg",
        },
      ],
    },
    {
      id: "cybersecurity",
      title: "Cyber Security Services",
      items: [
        {
          name: "Enterprise Network & Endpoint Protection",
          link: "/services/cyber-security-services",
          img: "https://plus.unsplash.com/premium_photo-1674669009418-2643aa58b11b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Cloud Security Solutions",
          link: "/services/cyber-security-services",
          img: "https://plus.unsplash.com/premium_photo-1700830193301-99e1c863ee38?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Penetration Testing Services",
          link: "/services/cyber-security-services",
          img: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        },
        {
          name: "Cybersecurity Consulting & Compliance",
          link: "/services/cyber-security-services",
          img: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          name: "IP Phone solutions",
          link: "/services/communication-lv",
          img: "https://images.pexels.com/photos/5146492/pexels-photo-5146492.jpeg",
        },
        {
          name: "Confernece solutions",
          link: "/services/communication-lv",
          img: "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg",
        },
        {
          name: "CCTV surveillance system",
          link: "/services/communication-lv",
          img: "https://plus.unsplash.com/premium_photo-1749255441533-a04bb85f88d1?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      id: "talent",
      title: "Transdata Talent Solutions",
      items: [],
    },
  ];

  const linkClass = ({ isActive }) =>
    `font-bold text-[0.75rem] uppercase tracking-widest transition-all duration-500 hover:text-td-yellow ${
      isActive ? "text-td-yellow" : scrolled ? "text-black" : "text-white"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 px-6 md:px-8 flex justify-between items-center border-b border-white/10 transition-all duration-500 ease-in-out group ${
          scrolled ? "bg-white border-gray-200 shadow-sm py-2" : "py-3"
        }`}
      >
        <NavLink to="/" className="z-50 relative">
          <img
            src={Logo}
            alt="TransData"
            className={`object-contain transition-all duration-500 ${
              scrolled
                ? "w-[120px] md:w-[150px] brightness-100 invert-0"
                : "w-[140px] md:w-[180px] brightness-0 invert"
            }`}
          />
        </NavLink>

        <DesktopMenu
          scrolled={scrolled}
          solutionsData={solutionsData}
          linkClass={linkClass}
        />

        <div
          className={`hidden md:flex items-center gap-6 ${scrolled ? "text-black" : "text-white"}`}
        >
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[0.7rem] font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all duration-500 ${
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

        <button
          className={`md:hidden z-50 transition-colors duration-500 ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        solutionsData={solutionsData}
      />
    </>
  );
};

export default Navbar;
