import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import ServiceOverview from "../components/services/ServiceOverview";
import ServiceFeatures from "../components/services/ServiceFeatures";
import ServiceProcess from "../components/services/ServiceProcess";
import ServiceCTA from "../components/services/ServiceCTA";

const servicesData = {
  "infrastructure-solutions": {
    title1: "Resilient",
    title2: "Infrastructure",
    subtitle: "Core Capability",
    desc: "Building the physical and digital backbone of modern enterprises. From server farms to edge computing nodes, we ensure your foundation is rock solid.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=2000",
    overview:
      "In today's hyper-connected world, downtime is not an option. Our Infrastructure Solutions provide the robust, scalable framework your business needs to thrive. We architect systems that are not just built for today's capacity, but engineered for tomorrow's growth.",
    benefits: [
      "99.99% Uptime Guarantee",
      "Scalable Architecture",
      "Cost-Efficient Energy Usage",
      "Future-Proof Design",
    ],
    features: [
      {
        title: "Server Virtualization",
        desc: "Maximize hardware efficiency by running multiple operating systems and applications on a single server.",
      },
      {
        title: "Network Design",
        desc: "Low-latency, high-bandwidth architectures designed for seamless data flow across your entire organization.",
      },
      {
        title: "Data Center Mgmt",
        desc: "Comprehensive management of cooling, power, and physical security to ensure optimal performance.",
      },
    ],
  },
  "cloud-solutions": {
    title1: "Limitless",
    title2: "Cloud",
    subtitle: "Digital Agility",
    desc: "Navigate complex cloud migrations with our strategic framework. We implement hybrid and multi-cloud environments optimized for elasticity.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    overview:
      "The cloud is no longer just a storage option; it is the engine of innovation. We help you migrate, modernize, and manage your workloads on AWS, Azure, and Google Cloud, ensuring you only pay for what you use while scaling instantly.",
    benefits: [
      "Global Availability",
      "Instant Scalability",
      "Pay-as-you-go Models",
      "Disaster Recovery",
    ],
    features: [
      {
        title: "Cloud Migration",
        desc: "Seamless transfer of legacy applications to the cloud with zero data loss.",
      },
      {
        title: "Hybrid Cloud Setup",
        desc: "The best of both worlds: secure on-premise control with public cloud flexibility.",
      },
      {
        title: "Cloud Security",
        desc: "Advanced identity management and encryption for cloud-native environments.",
      },
    ],
  },
  "it-managed-services": {
    title1: "Proactive",
    title2: "Support",
    subtitle: "Operational Excellence",
    desc: "Experience operational tranquility with our proactive 24/7 Network Operations Center (NOC). We handle patch management and system health monitoring.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    overview:
      "Stop fighting fires and start building the future. Our Managed Services team acts as an extension of your IT department, monitoring your systems 24/7 to detect and resolve issues before they impact your business operations.",
    benefits: [
      "24/7 Monitoring",
      "Reduced Downtime",
      "Predictable IT Costs",
      "Access to Experts",
    ],
    features: [
      {
        title: "NOC Services",
        desc: "Round-the-clock monitoring of network health, traffic, and device status.",
      },
      {
        title: "Helpdesk Support",
        desc: "Immediate remote and on-site assistance for end-user technical issues.",
      },
      {
        title: "Patch Management",
        desc: "Automated updates to ensure your software is always secure and compliant.",
      },
    ],
  },
  "data-management": {
    title1: "Actionable",
    title2: "Intelligence",
    subtitle: "Data Strategy",
    desc: "Transform raw data into actionable intelligence. We build sophisticated data warehouses and governance frameworks.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    overview:
      "Data is your most valuable asset, but only if you can use it. We unify fragmented data sources into a single source of truth, enabling advanced analytics, reporting, and AI-driven insights that drive strategic decision-making.",
    benefits: [
      "Unified Data View",
      "Enhanced Compliance",
      "Faster Reporting",
      "AI-Ready Infrastructure",
    ],
    features: [
      {
        title: "Data Warehousing",
        desc: "Centralized repositories for integrated data from one or more disparate sources.",
      },
      {
        title: "Data Governance",
        desc: "Ensuring high quality, security, and compliance of your data assets.",
      },
      {
        title: "Business Intelligence",
        desc: "Visual dashboards and reports that turn complex metrics into clear insights.",
      },
    ],
  },
  "cybersecurity-solutions": {
    title1: "Ironclad",
    title2: "Security",
    subtitle: "Zero Trust",
    desc: "Implement Zero Trust architectures and advanced threat detection systems specifically designed for critical infrastructure.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000",
    overview:
      "In an era of sophisticated cyber threats, reactive security is not enough. We implement proactive, multi-layered defense strategies that protect your endpoints, networks, and cloud environments from ransomware, phishing, and espionage.",
    benefits: [
      "Threat Prevention",
      "Regulatory Compliance",
      "Data Privacy",
      "Business Continuity",
    ],
    features: [
      {
        title: "Zero Trust Arch",
        desc: "Never trust, always verify. Strict identity verification for every user and device.",
      },
      {
        title: "Endpoint Protection",
        desc: "Securing laptops, mobiles, and servers from malware and unauthorized access.",
      },
      {
        title: "Penetration Testing",
        desc: "Ethical hacking to identify and fix vulnerabilities before attackers exploit them.",
      },
    ],
  },
  "digital-transformation": {
    title1: "Digital",
    title2: "First",
    subtitle: "Innovation",
    desc: "Modernize legacy paper-based processes into digital-first workflows using AI and automation.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    overview:
      "Digital transformation is not just about technology; it's about reimagining how you create value. We help you digitize operations, automate repetitive tasks, and create seamless digital experiences for your customers and employees.",
    benefits: [
      "Process Efficiency",
      "Cost Reduction",
      "Enhanced UX",
      "Agile Operations",
    ],
    features: [
      {
        title: "Process Automation",
        desc: "Robotic Process Automation (RPA) to handle high-volume, repetitive tasks.",
      },
      {
        title: "Paperless Office",
        desc: "Digitizing documents and workflows for faster access and reduced waste.",
      },
      {
        title: "Legacy Modernization",
        desc: "Upgrading outdated systems to modern, cloud-native architectures.",
      },
    ],
  },
  "collaboration-solutions": {
    title1: "Unified",
    title2: "Comms",
    subtitle: "Connected Workforce",
    desc: "Deploy unified communication platforms that seamlessly connect field engineers, drivers, and headquarters.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
    overview:
      "Empower your teams to work from anywhere, anytime. Our collaboration solutions integrate voice, video, messaging, and file sharing into a single, secure platform, breaking down silos and fostering real-time teamwork.",
    benefits: [
      "Remote Work Ready",
      "Seamless Integration",
      "High Definition AV",
      "Secure Sharing",
    ],
    features: [
      {
        title: "VoIP Systems",
        desc: "Enterprise-grade internet telephony for crystal-clear voice communication.",
      },
      {
        title: "Video Conferencing",
        desc: "Immersive meeting room setups and desktop video solutions.",
      },
      {
        title: "Team Messaging",
        desc: "Persistent chat channels for projects, departments, and instant updates.",
      },
    ],
  },
  "business-applications": {
    title1: "Enterprise",
    title2: "ERP & CRM",
    subtitle: "Business Logic",
    desc: "Integrate enterprise-grade ERP and CRM systems to unify financial planning, asset management, and customer relations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    overview:
      "Streamline your business logic. We implement and customize ERP and CRM solutions that give you a 360-degree view of your operations, financials, and customer interactions, ensuring every department is aligned.",
    benefits: [
      "Data Consistency",
      "Operational Visibility",
      "Customer Insights",
      "Automated Reporting",
    ],
    features: [
      {
        title: "ERP Implementation",
        desc: "Managing day-to-day business activities such as accounting, procurement, and supply chain.",
      },
      {
        title: "CRM Integration",
        desc: "Managing interactions with current and potential customers to drive sales growth.",
      },
      {
        title: "Custom Development",
        desc: "Building bespoke modules to fit unique business requirements.",
      },
    ],
  },
  "emerging-technologies": {
    title1: "Future",
    title2: "Ready",
    subtitle: "Next Gen",
    desc: "Future-proof your operations by piloting Blockchain for supply chain transparency, IoT sensors, and Edge Computing.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000",
    overview:
      "Stay ahead of the disruption curve. We help you experiment with and adopt cutting-edge technologies that redefine industry standards, from transparent blockchain ledgers to hyper-fast edge computing networks.",
    benefits: [
      "Competitive Advantage",
      "Innovation Leadership",
      "Predictive Capability",
      "New Revenue Streams",
    ],
    features: [
      {
        title: "IoT Solutions",
        desc: "Smart sensors and connectivity for real-time monitoring of physical assets.",
      },
      {
        title: "Blockchain",
        desc: "Decentralized ledgers for secure, transparent, and immutable record-keeping.",
      },
      {
        title: "Edge Computing",
        desc: "Processing data near the source to reduce latency and bandwidth use.",
      },
    ],
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const data = servicesData[id] || servicesData["infrastructure-solutions"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <PageHero
        subtitle={data.subtitle}
        title={data.title1} // Passing as single title prop or custom composite in PageHero
        highlight={data.title2}
        description={data.desc}
        bgImage={data.image}
      />
      <ServiceOverview text={data.overview} benefits={data.benefits} />
      <ServiceFeatures features={data.features} />
      <ServiceProcess />
      <ServiceCTA />
    </>
  );
};

export default ServiceDetail;
