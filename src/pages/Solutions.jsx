import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Database,
  Network,
  Cpu,
  Phone,
  Users,
} from "lucide-react";
import PageHero from "../components/PageHero";
import ServiceCTA from "../components/services/ServiceCTA";

const solutionsList = [
  {
    id: "managed-it",
    title: "Managed IT Solutions",
    icon: <Cpu className="text-td-yellow" size={32} />,
    desc: "Comprehensive IT management to ensure stability, security, and predictable performance.",
    subServices: [
      { name: "IT AMC Service", link: "/services/it-amc-services" },
      { name: "New Office IT Setup", link: "/services/new-office-it-setup" },
      {
        name: "IT Consultation Services",
        link: "/services/it-consultation-services",
      },
      {
        name: "Datacenter Relocation",
        link: "/services/datacenter-migration-relocation",
      },
    ],
  },
  {
    id: "datacenter",
    title: "IT Datacenter Solutions",
    icon: <Database className="text-td-yellow" size={32} />,
    desc: "Resilient infrastructure design, high-performance storage, and virtualization.",
    subServices: [
      {
        name: "Servers & Storage Solutions",
        link: "/services/server-storage-solutions",
      },
      {
        name: "NAS Storage Solutions",
        link: "/services/nas-storage-solutions",
      },
      { name: "Virtualization", link: "/services/virtualization-hci" },
      { name: "UPS Solutions", link: "/services/power-backup-ups" },
    ],
  },
  {
    id: "networking",
    title: "Networking & Switching",
    icon: <Network className="text-td-yellow" size={32} />,
    desc: "Unified connectivity solutions covering core architecture, wireless, and physical cabling.",
    subServices: [
      { name: "Firewall Routers", link: "/services/firewall-router-solutions" },
      { name: "Switching", link: "/services/switching-solutions" },
      { name: "Wifi Services", link: "/services/wireless-network-services" },
      { name: "VPN Solutions", link: "/services/vpn-solutions" },
      {
        name: "Structured Cabling",
        link: "/services/structured-cabling-solutions",
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Services",
    icon: <Shield className="text-td-yellow" size={32} />,
    desc: "Multi-layered defense strategies to protect endpoints, networks, and cloud environments.",
    subServices: [
      {
        name: "Endpoint Protection",
        link: "/services/network-endpoint-protection",
      },
      {
        name: "Cloud Security Solutions",
        link: "/services/cloud-security-solutions",
      },
      {
        name: "Penetration Testing",
        link: "/services/penetration-testing-services",
      },
      {
        name: "Compliance & Consulting",
        link: "/services/cybersecurity-consulting-compliance",
      },
    ],
  },
  {
    id: "communication",
    title: "Communication & LV",
    icon: <Phone className="text-td-yellow" size={32} />,
    desc: "Connecting teams and facilities through unified voice, video, and security systems.",
    subServices: [
      { name: "IP Phone Solutions", link: "/services/ip-phone-solutions" },
      { name: "Conference Solutions", link: "/services/conference-solutions" },
      { name: "CCTV Surveillance", link: "/services/cctv-surveillance" },
    ],
  },
  {
    id: "talent",
    title: "Transdata Talent Solutions",
    icon: <Users className="text-td-yellow" size={32} />,
    desc: "Expert ServiceNow professionals to design, implement, and optimize your platform.",
    subServices: [
      { name: "ServiceNow Expertise", link: "/services/servicenow-expertise" },
    ],
  },
];

const Solutions = () => {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <PageHero
        subtitle="End-to-End"
        title="Enterprise"
        highlight="IT Solutions"
        description="Explore our broad portfolio of intelligent infrastructure and digital services designed for high-availability and security."
        bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
      />

      {/* SOLUTIONS LISTING */}
      {solutionsList.map((pillar, index) => (
        <section
          key={pillar.id}
          className={`py-20 md:py-24 ${index % 2 !== 0 ? "bg-gray-50" : "bg-white"} border-b border-gray-100`}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Pillar Info (Left Side) */}
              <div className="lg:col-span-4 sticky top-32">
                <div className="w-16 h-16 bg-black rounded-sm flex items-center justify-center mb-8">
                  {pillar.icon}
                </div>
                <h2 className="text-xs font-bold text-td-yellow mb-4 uppercase tracking-[0.3em] flex items-center gap-3">
                  Pillar 0{index + 1}
                </h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>

              {/* Sub-services Grid (Right Side) */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillar.subServices.map((sub, i) => (
                  <Link
                    key={i}
                    to={sub.link}
                    className="group bg-white p-8 border border-gray-200 hover:border-td-yellow hover:shadow-xl transition-all duration-500 rounded-sm flex justify-between items-center"
                  >
                    <span className="text-black font-bold text-lg group-hover:text-td-yellow transition-colors">
                      {sub.name}
                    </span>
                    <ArrowRight
                      size={20}
                      className="text-gray-300 group-hover:text-td-yellow group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <ServiceCTA />
    </div>
  );
};

export default Solutions;
