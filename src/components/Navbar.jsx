import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";
import Logo from "../assets/LOGO_1.png";
import AMC from "../assets/IT-AMC.webp";
import Office from "../assets/New-Office.webp";
import dataCenter from "../assets/Data-center-relocation.webp";
import serverStorage from "../assets/Server-storage.webp";
import itConsultation from "../assets/IT-consultation.webp";
import itPenetration from "../assets/IT-penetration-testing.webp";
import switching from "../assets/Switching.webp";
import firewall from "../assets/Firewall-routers.webp";
import nasStorage from "../assets/NAS-Storage-solution.webp";
import virtualization from "../assets/Virtualization.jpg";
import ups from "../assets/ups-solution.jpg";
import wifi from "../assets/wifi.jpg";
import vpn from "../assets/vpn.jpg";
import cabling from "../assets/cabling.jpg";
import endpointProtection from "../assets/endpoint-protection.jpg";
import cloudSecurity from "../assets/cloud-security.jpg";
import cyberConsulting from "../assets/cyber-consulting.jpg";
import disasterRecovery from "../assets/disaster-recovery.jpg";
import automatedBackup from "../assets/automated-backup.jpg";
import ipPhone from "../assets/ip-phone.jpg";
import conferenceSolution from "../assets/conference-solution.jpg";
import cctv from "../assets/cctv.jpg";
import talentSolutions from "../assets/talent-solutions.jpg";

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

  // Updated Data with UNIQUE links for every sub-category
  const solutionsData = [
    {
      id: "managed-it",
      title: "Managed IT Services",
      items: [
        {
          name: "IT AMC Service",
          link: "/services/it-amc-services",
          img: AMC,
        },
        {
          name: "New Office IT Setup",
          link: "/services/new-office-it-setup",
          img: Office,
        },
        {
          name: "IT Consultation Services",
          link: "/services/it-consultation-services",
          img: itConsultation,
        },
        {
          name: "Datacenter Relocation",
          link: "/services/datacenter-migration-relocation",
          img: dataCenter,
        },
      ],
    },
    {
      id: "datacenter",
      title: "IT Datacenter Solutions",
      items: [
        {
          name: "Servers & Storage Solutions",
          link: "/services/server-storage-solutions",
          img: serverStorage,
        },
        {
          name: "NAS Storage Solutions",
          link: "/services/nas-storage-solutions",
          img: nasStorage,
        },
        {
          name: "Virtualization",
          link: "/services/virtualization-hci",
          img: virtualization,
        },
        {
          name: "UPS Solutions",
          link: "/services/power-backup-ups",
          img: ups,
        },
      ],
    },
    {
      id: "networking",
      title: "Networking & Switching",
      items: [
        {
          name: "Firewall Routers",
          link: "/services/firewall-router-solutions",
          img: firewall,
        },
        {
          name: "Switching",
          link: "/services/switching-solutions",
          img: switching,
        },
        {
          name: "Wifi Services",
          link: "/services/wireless-network-services",
          img: wifi,
        },
        // {
        //   name: "VPN Solutions",
        //   link: "/services/vpn-solutions",
        //   img: vpn,
        // },
        {
          name: "Structured Cabling",
          link: "/services/structured-cabling-solutions",
          img: cabling,
        },
      ],
    },
    {
      id: "cybersecurity",
      title: "Cyber Security Services",
      items: [
        {
          name: "Enterprise Network & Endpoint Protection",
          link: "/services/network-endpoint-protection",
          img: endpointProtection,
        },
        {
          name: "Cloud Security Solutions",
          link: "/services/cloud-security-solutions",
          img: cloudSecurity,
        },
        {
          name: "Penetration Testing Services",
          link: "/services/penetration-testing-services",
          img: itPenetration,
        },
        {
          name: "Cybersecurity Consulting & Compliance",
          link: "/services/cybersecurity-consulting-compliance",
          img: cyberConsulting,
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
          img: disasterRecovery,
        },
        {
          name: "Automated Backup",
          link: "/services/data-backup-protection",
          img: automatedBackup,
        },
      ],
    },
    {
      id: "communication",
      title: "Communication & LV",
      items: [
        {
          name: "IP Phone solutions",
          link: "/services/ip-phone-solutions",
          img: ipPhone,
        },
        {
          name: "Conference solutions",
          link: "/services/conference-solutions",
          img: conferenceSolution,
        },
        {
          name: "CCTV surveillance system",
          link: "/services/cctv-surveillance",
          img: cctv,
        },
      ],
    },
    {
      id: "talent",
      title: "Transdata Talent Solutions",
      items: [
        {
          name: "ServiceNow Expertise",
          link: "/services/servicenow-expertise",
          img: talentSolutions,
        },
      ],
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
        {/* LOGO with shrink effect */}
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
