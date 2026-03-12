import IT_AMC from "../assets/IT-AMC.webp";
import New_Office from "../assets/New-Office.webp";
import IT_Consultation from "../assets/IT-consultation.webp";
import Data_Center from "../assets/Data-center-relocation.webp";
import Server_Storage from "../assets/Server-storage.webp";
import NAS_Storage from "../assets/NAS-Storage-solution.webp";
import Virtualization from "../assets/Virtualization.jpg";
import Ups_Solution from "../assets/ups-solution.jpg";
import Firewall_Routers from "../assets/Firewall-routers.webp";
import Switching from "../assets/Switching.webp";
import Wifi from "../assets/wifi.jpg";
import Vpn from "../assets/vpn.jpg";
import Structured_Cabling from "../assets/cabling.jpg";
import Endpoint_Protection from "../assets/endpoint-protection.jpg";
import Cloud_Security from "../assets/cloud-security.jpg";
import IT_Penetration_Testing from "../assets/IT-penetration-testing.webp";
import Cyber_Consulting from "../assets/cyber-consulting.jpg";
import Ip_Phone from "../assets/ip-phone.jpg";
import Conference_Solution from "../assets/conference-solution.jpg";
import CCTV from "../assets/cctv.jpg";
import Talent_Solutions from "../assets/talent-solutions.jpg";

export const servicesData = {
  // SUB-CATEGORY 1: IT AMC SERVICE
  "it-amc-services": {
    title1: "IT AMC",
    title2: "Services",
    subtitle: "Business Continuity",
    desc: "13+ years of enterprise IT experience providing stability, security, and well-maintained environments through Annual Maintenance Contracts.",
    image: IT_AMC,

    overview:
      "Modern businesses require stable, secure, and well-maintained IT environments. Unplanned downtime, aging hardware, and delayed support can disrupt operations and productivity. Transdata Solutions offers IT Annual Maintenance Contract (AMC) services to keep your infrastructure reliable and up to date. We proactively maintain systems, minimize risks, and ensure operational continuity—allowing internal IT teams to focus on strategic initiatives.",

    benefits: [
      "Predictable, Fixed Budgeting",
      "Defined SLAs & Response Times",
      "Experienced Technical Resolution",
      "Extended Asset Lifespan",
    ],

    features: [
      {
        title: "Technical Support & Incident Management",
        desc: "Remote and on-site support with rapid response. Priority service under customized SLAs with full incident tracking and resolution documentation.",
        icon: "support",
      },
      {
        title: "Proactive System & Performance Management",
        desc: "24/7 infrastructure monitoring and alerts. Regular health checks and preventive maintenance with performance optimization to avoid bottlenecks.",
        icon: "activity",
      },
      {
        title: "Network & Security Management",
        desc: "Maintenance of routers, switches, Wi-Fi, and firewalls. Includes security vulnerability scanning, remediation, and bandwidth optimization for peak performance.",
        icon: "network",
      },
      {
        title: "Hardware & Software Excellence",
        desc: "Diagnostics and maintenance for desktops, laptops, and servers. Genuine component replacement and software updates for critical applications.",
        icon: "cpu",
      },
      {
        title: "Compliance & Reporting",
        desc: "IT asset tracking and performance analytics. Security compliance with industry standards and strategic recommendations for IT growth.",
        icon: "compliance",
      },
      {
        title: "Enterprise-Grade Data Protection",
        desc: "Cloud and on-premises backup solutions, disaster recovery planning, data restoration, and ransomware protection.",
        icon: "lock",
      },
    ],

    extraSections: [
      {
        title: "What Is an IT AMC?",
        content:
          "An IT Annual Maintenance Contract (AMC) is a year-long agreement with an IT service provider to maintain, support, and manage IT infrastructure. With an AMC, maintenance is planned within a fixed, predictable budget, reducing unexpected disruptions. Preventive maintenance and timely upgrades extend asset lifespan and improve system reliability.",
        listTitle: "The AMC Advantage",
        items: [
          "Maintenance is planned within a fixed, predictable budget, reducing unexpected disruptions.",
          "Service Level Agreements (SLAs) define response times and escalation processes.",
          "Experienced technicians resolve incidents efficiently.",
          "Preventive maintenance and timely upgrades extend asset lifespan and improve system reliability.",
        ],
      },
    ],
  },

  // SUB-CATEGORY 2: NEW OFFICE IT SETUP
  "new-office-it-setup": {
    title1: "New Office",
    title2: "IT Setup",
    subtitle: "Seamless Deployment",
    desc: "End-to-end office IT deployment tailored to your business needs. Ensuring a technology foundation that supports collaboration and maximizes productivity.",
    image: New_Office,

    overview:
      "Setting up a new office requires a robust, reliable, and scalable IT infrastructure. At Transdata Solutions, we deliver end-to-end office IT deployment tailored to your business needs. As a trusted Office IT Setup Service Provider in Dubai, we ensure your technology foundation supports seamless operations, enhances collaboration, and maximizes productivity.",

    benefits: [
      "Smooth Operations from Day One",
      "Secure, Compliant Solutions",
      "Minimized Technical Disruptions",
      "Scalable Infrastructure Design",
    ],

    features: [
      {
        title: "Foundation for Success",
        desc: "Partnering with Transdata Solutions means gaining a partner committed to enabling smooth operations through optimized infrastructure.",
        icon: "support",
      },
      {
        title: "Secure Technology Stack",
        desc: "We implement secure, compliant technology solutions that protect your new office environment from day one.",
        icon: "shield",
      },
      {
        title: "Optimized Scalability",
        desc: "Start your new office journey with confidence, knowing your IT environment is designed for long-term success and growth.",
        icon: "layers",
      },
    ],

    processTitle: "Our Proven IT Setup Process",
    processSteps: [
      {
        num: "01",
        title: "Requirements Analysis",
        desc: "We assess business needs, growth plans, and budget to define the ideal IT setup.",
      },
      {
        num: "02",
        title: "Infrastructure Design",
        desc: "Creating a tailored IT architecture plan aligned with your operational requirements.",
      },
      {
        num: "03",
        title: "Procurement & Sourcing",
        desc: "We manage the acquisition of all hardware, software, and network components.",
      },
      {
        num: "04",
        title: "Professional Installation",
        desc: "Certified technicians install all systems according to industry best practices.",
      },
      {
        num: "05",
        title: "System Configuration",
        desc: "We configure and integrate systems to ensure seamless performance.",
      },
      {
        num: "06",
        title: "Testing & Quality Assurance",
        desc: "Complete testing of all components to verify functionality and reliability.",
      },
      {
        num: "07",
        title: "Documentation",
        desc: "Detailed documentation of your IT setup for easy reference and future upgrades.",
      },
      {
        num: "08",
        title: "Training & Handover",
        desc: "We provide team training and ensure your staff can use the systems confidently.",
      },
    ],

    faqs: [
      {
        question: "How long does it take to set up IT for a new office?",
        answer:
          "The timeline depends on office size, infrastructure complexity, and the services required. Typically, a small to medium office setup takes 1–3 weeks, while larger setups may take longer.",
      },
      {
        question: "Do you provide both on-premise and cloud solutions?",
        answer:
          "Yes. Transdata Solutions offers both on-premise IT infrastructure and cloud-based solutions, depending on your business needs and growth plans.",
      },
      {
        question: "Can you handle network and internet setup?",
        answer:
          "Absolutely. We design and implement structured cabling, routers, switches, access points, internet connections, and secure firewall configurations to ensure reliable connectivity.",
      },
      {
        question: "How do I get started with a new office IT setup?",
        answer:
          "You can contact Transdata Solutions for an initial assessment. Our experts will evaluate your office requirements and provide a tailored setup plan to get you operational quickly and efficiently.",
      },
      {
        question: "Can you integrate our new office with existing locations?",
        answer:
          "Yes, we specialize in creating unified IT environments across multiple locations. We ensure seamless communication, resource sharing, and centralized management for distributed operations.",
      },
    ],
  },

  // SUB-CATEGORY 3: IT CONSULTATION SERVICES
  "it-consultation-services": {
    title1: "Strategic IT",
    title2: "Consultation",
    subtitle: "Expert Guidance",
    desc: "Aligning technology with strategic goals. We partner with organizations to optimize IT environments, improve performance, and drive digital growth.",
    image: IT_Consultation,

    overview:
      "At Transdata Solutions, we provide expert IT consulting to help businesses in Dubai, and across the UAE align technology with strategic goals. Our consultants partner with organizations of all sizes — from SMEs to large enterprises — to optimize IT environments, improve performance, and drive digital growth. We cover the full IT landscape, blending local market insight with global best practices.",

    benefits: [
      "Advice Tailored to Objectives",
      "Improved IT Efficiency",
      "Reduced Operational Costs",
      "Enhanced Security & Compliance",
    ],

    features: [
      {
        title: "Business IT Assessment",
        desc: "Evaluate your current systems to identify gaps, risks, and opportunities for improvement.",
        icon: "network",
      },
      {
        title: "Technology Strategy & Roadmap",
        desc: "Develop a forward-looking IT plan that supports growth and digital transformation.",
        icon: "globe",
      },
      {
        title: "Cybersecurity Advisory",
        desc: "Define a security framework that protects data, networks, and users from modern threats.",
        icon: "monitor",
      },
      {
        title: "Network & Infrastructure Consulting",
        desc: "Design secure, scalable network architectures that support your operational needs.",
        icon: "users",
      },
      {
        title: "Cloud & Transformation Planning",
        desc: "Plan cloud migrations, integrations, and virtualization for agility and efficiency.",
        icon: "server",
      },
      {
        title: "New Office IT Strategy",
        desc: "Plan the IT technology stack and infrastructure for new office environments in Dubai or Abu Dhabi.",
        icon: "settings",
      },
    ],

    extraSections: [
      {
        title: "The Transdata Advisory Edge",
        content:
          "With Transdata Solutions as your trusted IT advisor, you gain experienced professionals focused on translating technology investments into measurable business value — improving productivity, strengthening security, and future-proofing your IT operations.",
        listTitle: "Consultation Project Scope",
        items: [
          "IT Project Oversight: Support project execution ensuring timelines and quality.",
          "Scalable IT strategies to support future growth.",
          "Expert advice tailored to your specific business objectives.",
          "Strategic technology decisions for today and for the future.",
        ],
      },
    ],
  },

  // SUB-CATEGORY 4: DATACENTER MIGRATION & RELOCATION
  "datacenter-migration-relocation": {
    title1: "Datacenter",
    title2: "Migration",
    subtitle: "Seamless Transition",
    desc: "Ensuring a seamless transition of critical IT infrastructure. We plan, execute, and validate every phase to minimize risk and operational impact.",
    image: Data_Center,

    overview:
      "Ensure a seamless transition of your critical IT infrastructure with professional Data Center Migration & Relocation Services. Our expert team plans, executes, and validates every phase to minimize risk, downtime, and operational impact — so your business stays efficient, secure, and future-ready.",

    benefits: [
      "Minimized Business Downtime",
      "Enhanced Performance & Growth",
      "Improved Security & Compliance",
      "Expert Risk Mitigation",
    ],

    features: [
      {
        title: "Strategic Planning & Assessment",
        desc: "Comprehensive audit of current data center assets, network dependencies, and workloads to build a tailored migration strategy.",
        icon: "server",
      },
      {
        title: "Risk-Controlled Execution",
        desc: "Structured approach covering logistical coordination, secure transport of hardware, and real-time project oversight.",
        icon: "database",
      },
      {
        title: "Secure Data Handling",
        desc: "Prioritizing integrity through detailed backups, encryption during transit, and rigorous validation at every step.",
        icon: "settings",
      },
      {
        title: "Reinstallation & Go-Live",
        desc: "Precision rack-and-stack installation, power/network configuration, and comprehensive testing for operational readiness.",
        icon: "zap",
      },
      {
        title: "Post-Migration Optimization",
        desc: "Post-move tuning, performance checks, and ongoing support to ensure peak stability and resilience.",
        icon: "wireless",
      },
      {
        title: "Scalable Expansion",
        desc: "Relocate to infrastructure that supports scalability, reliability, and future-proof expansion for your business.",
        icon: "network",
      },
    ],

    extraSections: [
      {
        title: "Modernize Your Infrastructure",
        content:
          "With our Data Center Migration & Relocation Services, you get a robust transition from planning to production — ensuring continuity, enhanced performance, and operational agility.",
        listTitle: "Why Partner With Us?",
        items: [
          "Strategic scheduling and phased migration options.",
          "Upgrade to environments with stronger security controls.",
          "Expert project management reduces the chance of data loss.",
          "Unlocking superior reliability, compliance, and cost-efficiency.",
        ],
      },
    ],
  },

  // SUB-CATEGORY 5: ENTERPRISE SERVER & STORAGE SOLUTIONS
  "server-storage-solutions": {
    title1: "Server &",
    title2: "Storage Solutions",
    subtitle: "Resilient Foundation",
    desc: "Reliable, scalable, and high-performance server and storage infrastructure designed to support modern business demands across Dubai and the UAE.",
    image: Server_Storage,

    overview:
      "At Transdata Solutions, we deliver reliable, scalable, and high-performance server and storage infrastructure designed to support modern business demands across Dubai, and the UAE. Our solutions ensure secure data management, optimized workload performance, and a resilient foundation for your critical applications. We offer customized datacenter infrastructure services — from design and deployment to ongoing management — enabling organizations to enhance uptime, improve resource utilization, and reduce operational costs. Our certified experts follow global best practices to ensure your IT environment is efficient, secure, and future-ready.",

    benefits: [
      "Secure Data Management",
      "Optimized Workload Performance",
      "Enhanced System Uptime",
      "Reduced Operational Costs",
    ],

    features: [
      {
        title: "Datacenter Infrastructure Design & Deployment",
        desc: "Tailored architecture planning and implementation to support business growth and performance targets.",
        icon: "server",
      },
      {
        title: "Enterprise Server Deployment",
        desc: "Custom server configurations optimized for your workloads and operational requirements.",
        icon: "network",
      },
      {
        title: "Scalable Storage Systems",
        desc: "Flexible storage infrastructure — including SAN, NAS, hybrid, and all-flash systems — that grows with your data needs.",
        icon: "layers",
      },
      {
        title: "Virtualization & Consolidation",
        desc: "Server, storage, and application virtualization to maximize utilization and reduce hardware footprint.",
        icon: "settings",
      },
      {
        title: "Backup & Business Continuity",
        desc: "Automated backups, disaster recovery planning, and rapid restoration capabilities to protect critical business data.",
        icon: "compliance",
      },
      {
        title: "Performance Optimization",
        desc: "Resource tuning, capacity planning, and performance monitoring to ensure systems run at peak efficiency.",
        icon: "monitor",
      },
    ],
  },

  // SUB-CATEGORY 6: NAS STORAGE SOLUTIONS
  "nas-storage-solutions": {
    title1: "NAS Storage",
    title2: "Solutions",
    subtitle: "Centralized Data",
    desc: "Enterprise-grade Network Attached Storage (NAS) platforms designed for reliable access, collaboration, and resilient data protection.",
    image: NAS_Storage,

    overview:
      "At Transdata Solutions, we deliver secure, scalable, and high-performance Network Attached Storage (NAS) solutions designed for businesses across Dubai, and the UAE. Our enterprise-grade storage platforms consolidate critical data into a centralized system that supports reliable access, streamlined collaboration, and resilient data protection across your organization. We partner with leading NAS technology vendors to provide tailored implementations that align with your data growth, performance expectations, and compliance needs — from initial design and installation to configuration, optimization, and support.",

    benefits: [
      "Streamlined Collaboration",
      "Resilient Data Protection",
      "Remote Access Integration",
      "Scalable Storage Capacity",
    ],

    features: [
      {
        title: "Custom System Design & Deployment",
        desc: "We assess your business requirements and architect NAS solutions that fit your data volume, performance targets, and scalability goals.",
        icon: "settings",
      },
      {
        title: "Scalable Storage Capacity",
        desc: "Expand storage seamlessly as your data grows — without major infrastructure changes or disruption to operations.",
        icon: "search",
      },
      {
        title: "Centralized Data Management",
        desc: "Efficiently manage all business files from a single platform, improving data organization, access, and shared workflows.",
        icon: "server",
      },
      {
        title: "Remote Access & Integration",
        desc: "Enable secure network-wide and remote data access, with options for cloud integration and mobile connectivity to support flexible work environments.",
        icon: "database",
      },
      {
        title: "Data Redundancy & Protection",
        desc: "Implement redundancy through RAID configurations and automated backup routines to ensure data availability and rapid recovery.",
        icon: "support",
      },
      {
        title: "Enhanced Security Controls",
        desc: "Deploy advanced encryption and user access policies to safeguard sensitive business data and enforce authorization rules across the network.",
        icon: "lock",
      },
    ],
  },

  // SUB-CATEGORY 7: VIRTUALIZATION & HCI
  "virtualization-hci": {
    title1: "Virtualization",
    title2: "& HCI",
    subtitle: "Software-Defined IT",
    desc: "Abstracting compute, storage, and networking resources into unified architectures with centralized management and simplified scaling.",
    image: Virtualization,

    overview:
      "Virtualization and Hyper-Converged Infrastructure (HCI) form the foundation of modern data center architecture by abstracting compute, storage, and networking resources into software-defined platforms. These technologies enable centralized management, operational efficiency, high availability, and scalable infrastructure design across enterprise environments. Our solutions support organizations in designing, implementing, and operating virtualized and hyper-converged environments that improve infrastructure utilization, simplify management, and support business-critical workloads.",

    benefits: [
      "Infrastructure Standardization",
      "Operational Efficiency",
      "High Availability Architecture",
      "Dynamic Resource Allocation",
    ],

    features: [
      {
        title: "Infrastructure Virtualization",
        desc: "Implementation of server, storage, and network virtualization to consolidate physical resources, enabling workload isolation and centralized control.",
        icon: "globe",
      },
      {
        title: "Hyper-Converged Infrastructure",
        desc: "Design and deployment of HCI platforms integrating compute, storage, and networking into a unified architecture with simplified scaling.",
        icon: "layers",
      },
      {
        title: "High Availability & Fault Tolerance",
        desc: "Architecture design for redundancy, clustering, failover, and workload continuity to support mission-critical applications.",
        icon: "settings",
      },
      {
        title: "Workload Optimization",
        desc: "Resource allocation planning and performance optimization for enterprise applications, databases, and virtual workloads across multi-node environments.",
        icon: "users",
      },
      {
        title: "Scalability Architecture",
        desc: "Modular infrastructure design enabling horizontal scaling of compute and storage resources without disruption to production systems.",
        icon: "network",
      },
      {
        title: "Centralized Management & Automation",
        desc: "Implementation of centralized orchestration, monitoring, and lifecycle management platforms for operational efficiency and governance.",
        icon: "compliance",
      },
    ],
  },

  // SUB-CATEGORY 8: POWER BACKUP & UPS SOLUTIONS
  "power-backup-ups": {
    title1: "Power Backup",
    title2: "& UPS Solutions",
    subtitle: "Continuous Stability",
    desc: "Ensuring stable power delivery and maintaining operational continuity during utility outages and power fluctuations.",
    image: Ups_Solution,

    overview:
      "Power continuity is a critical component of enterprise IT and data center infrastructure. Power Backup and Uninterruptible Power Supply (UPS) systems ensure stable power delivery, protect critical equipment from electrical disturbances, and maintain operational continuity during utility outages and power fluctuations. Our Power Backup & UPS Solutions are designed to support mission-critical IT infrastructure, data centers, network environments, and enterprise facilities through reliable, scalable, and resilient power protection architectures.",

    benefits: [
      "Stable Power Delivery",
      "Critical Equipment Protection",
      "Fault-Tolerant Distribution",
      "Modular Growth Capacity",
    ],

    features: [
      {
        title: "UPS System Architecture",
        desc: "Design and deployment of online, line-interactive, and modular UPS systems to support continuous power availability for IT environments.",
        icon: "database",
      },
      {
        title: "Power Continuity Design",
        desc: "Infrastructure planning for redundant power paths, load balancing, and fault-tolerant power distribution to support high-availability environments.",
        icon: "zap",
      },
      {
        title: "Critical Load Protection",
        desc: "Protection of servers, storage systems, network devices, and sensitive electronics from voltage fluctuations, surges, and harmonics.",
        icon: "monitor",
      },
      {
        title: "Scalable Power Infrastructure",
        desc: "Modular and expandable UPS architectures enabling future capacity growth without disruption to production systems.",
        icon: "settings",
      },
      {
        title: "Power Quality Management",
        desc: "Implementation of voltage regulation, frequency stabilization, and power conditioning mechanisms to ensure clean and stable electrical supply.",
        icon: "cpu",
      },
      {
        title: "Operational Integrity",
        desc: "Ensuring continuous power delivery and electrical stability, essential for maintaining service availability and infrastructure reliability.",
        icon: "activity",
      },
    ],
  },

  // SUB-CATEGORY 9: FIREWALL & ROUTER SOLUTIONS
  "firewall-router-solutions": {
    title1: "Firewall &",
    title2: "Router Solutions",
    subtitle: "Perimeter Security",
    desc: "Enterprise-class firewall and routing infrastructure designed for high-availability, secure, and scalable network environments.",
    image: Firewall_Routers,

    overview:
      "Transdata Solutions provides enterprise-class firewall and routing infrastructure across Dubai and the UAE, designed for high-availability, secure, and scalable network environments. Solutions cover perimeter security, internal segmentation, routing optimization, and encrypted communications for distributed enterprise IT infrastructure.",

    benefits: [
      "High Availability Architecture",
      "Optimized Traffic Management",
      "Enhanced Security Posture",
      "Scalable Modular Design",
    ],

    features: [
      {
        title: "Firewall Deployment",
        desc: "Next-Generation Firewall (NGFW) implementation with application-aware traffic inspection, threat prevention via IDS/IPS, and policy-based access control.",
        icon: "globe",
      },
      {
        title: "Routing Infrastructure",
        desc: "Core, distribution, and edge configuration supporting BGP, OSPF, EIGRP, and RIP with redundant HSRP/VRRP dual-homed architectures.",
        icon: "activity",
      },
      {
        title: "VPN & Secure Connectivity",
        desc: "Site-to-site VPN for multi-branch environments and remote access VPN for distributed workforces, integrated with firewall policies.",
        icon: "wireless",
      },
      {
        title: "Monitoring & Maintenance",
        desc: "Real-time traffic monitoring, logging, firmware/security patch management, and automated alerting for network anomalies.",
        icon: "monitor",
      },
      {
        title: "Infrastructure Integration",
        desc: "Seamless integration with servers, storage, switching, and cabling, supporting hybrid and cloud network architectures.",
        icon: "settings",
      },
      {
        title: "Traffic Engineering",
        desc: "Implementation of Layer 3 routing, VLAN segmentation, ACL enforcement, and QoS policies for prioritized communications.",
        icon: "globe",
      },
    ],
  },

  // SUB-CATEGORY 10: SWITCHING SOLUTIONS
  "switching-solutions": {
    title1: "Switching",
    title2: "Solutions",
    subtitle: "High-Performance LAN",
    desc: "Enterprise-grade switching infrastructure designed for scalable LAN and WAN environments across core, distribution, and access layers.",
    image: Switching,

    overview:
      "Transdata Solutions delivers enterprise-grade switching infrastructure across Dubai and the UAE, designed for scalable, high-performance LAN and WAN environments. Our solutions cover core, distribution, and access layers, ensuring optimized connectivity, low latency, and high availability for business-critical applications.",

    benefits: [
      "Redundancy & High Availability",
      "Modular Scalability",
      "Traffic Optimization",
      "Enterprise Security Controls",
    ],

    features: [
      {
        title: "Core Layer Switching",
        desc: "High-throughput Layer 3 switches for backbone connectivity with inter-site traffic integration and multi-chassis stacking support.",
        icon: "layers",
      },
      {
        title: "Distribution Layer Switching",
        desc: "Aggregation of access layer switches with OSPF/EIGRP protocols, QoS prioritization, and redundant failover mechanisms.",
        icon: "cpu",
      },
      {
        title: "Access Layer Switching",
        desc: "End-user device connectivity with VLAN segmentation, port-level security (802.1X), and PoE/PoE+ for IP phones and cameras.",
        icon: "network",
      },
      {
        title: "Network Management",
        desc: "SNMP-based monitoring, configuration version control, and proactive alerting integrated with professional management tools.",
        icon: "network",
      },
      {
        title: "Stability & Patching",
        desc: "Comprehensive firmware upgrade strategies and patching to ensure long-term network stability and security.",
        icon: "users",
      },
      {
        title: "Network Design",
        desc: "Architecture utilizing STP/RSTP/MSTP for loop prevention and ACLs for port-level enterprise security.",
        icon: "network",
      },
    ],
  },

  // SUB-CATEGORY 11: WIRELESS NETWORK SERVICES
  "wireless-network-services": {
    title1: "Wireless",
    title2: "Network Services",
    subtitle: "Secure Connectivity",
    desc: "Reliable, secure, and scalable Wi-Fi solutions for offices, campuses, and enterprise environments across the UAE.",
    image: Wifi,

    overview:
      "Transdata Solutions provides enterprise-class wireless network solutions across Dubai and the UAE. Our solutions focus on reliable, secure, and scalable Wi-Fi connectivity for offices, campuses, and medium-scale enterprise environments. We design networks that ensure smooth connectivity for everyday business applications while keeping management simple.",

    benefits: [
      "Consistent Coverage Planning",
      "Reliable Redundant APs",
      "Proactive Traffic Management",
      "Secure Enterprise Authentication",
    ],

    features: [
      {
        title: "Wi-Fi Design & Deployment",
        desc: "Site surveys and access point (AP) placement for optimal coverage in offices and meeting rooms with seamless roaming.",
        icon: "wireless",
      },
      {
        title: "Performance & Optimization",
        desc: "Dual-band (2.4GHz / 5GHz) support with load balancing across APs and QoS for voice, video, and business applications.",
        icon: "compliance",
      },
      {
        title: "Secure Access",
        desc: "Enterprise authentication using 802.1X/RADIUS or WPA3, with separate guest networks and VLAN isolation.",
        icon: "lock",
      },
      {
        title: "Management & Monitoring",
        desc: "Controller-managed or cloud-managed configurations with real-time monitoring of AP performance and connected devices.",
        icon: "monitor",
      },
      {
        title: "Scalability",
        desc: "Modular expansion for growing offices, allowing for the addition of new APs without disruption to existing users.",
        icon: "shield",
      },
      {
        title: "Reliability",
        desc: "Redundant AP configurations and simple failover settings to ensure zero-downtime wireless connectivity.",
        icon: "layers",
      },
    ],
  },

  // SUB-CATEGORY 12: VPN SOLUTIONS
  "vpn-solutions": {
    title1: "VPN",
    title2: "Solutions",
    subtitle: "Secure Remote Access",
    desc: "Encrypted communication infrastructure between sites and remote users aligned with enterprise security policies.",
    image: Vpn,

    overview:
      "Transdata Solutions provides enterprise VPN infrastructure and secure remote connectivity across Dubai and the UAE. These solutions support encrypted communication between sites and remote users while aligning with existing network security and access control policies.",

    benefits: [
      "Encrypted Multi-Site Links",
      "Centralized Authentication",
      "Strong Suite B Encryption",
      "High Session Scalability",
    ],

    features: [
      {
        title: "Secure Site-to-Site Connectivity",
        desc: "Implementation of IPSec VPN tunnels for encrypted links between corporate sites with support for dynamic BGP/OSPF routing.",
        icon: "globe",
      },
      {
        title: "Remote Access VPN",
        desc: "Deployment of SSL or IPSec clients for distributed workforces with RADIUS/AAA server integration and MFA enforcement.",
        icon: "wireless",
      },
      {
        title: "Encryption & Policy",
        desc: "Strong suite encryption (AES-256, SHA2) with split or full tunneling configurations aligned with firewall ACL rules.",
        icon: "activity",
      },
      {
        title: "Scalability & Performance",
        desc: "Clustered VPN gateways supporting simultaneous sessions with bandwidth allocation and QoS rules for critical apps.",
        icon: "support",
      },
      {
        title: "Monitoring & Maintenance",
        desc: "Detailed logging of session events and tunnel health with regular firmware patching and SIEM visibility integration.",
        icon: "monitor",
      },
      {
        title: "Failover Resilience",
        desc: "Redundant VPN termination points to ensure continued site connectivity in the event of a gateway failure.",
        icon: "alert",
      },
    ],
  },

  // SUB-CATEGORY 13: STRUCTURED CABLING SOLUTIONS
  "structured-cabling-solutions": {
    title1: "Structured",
    title2: "Cabling Solutions",
    subtitle: "Physical Layer Topology",
    desc: "Clean physical layer design and reliable signal integrity supporting current and future enterprise network requirements.",
    image: Structured_Cabling,

    overview:
      "Transdata Solutions delivers structured cabling infrastructure for enterprise environments across Dubai and the UAE. Solutions are designed for clean physical layer topology, reliable signal integrity, and support for current and future network requirements.",

    benefits: [
      "TIA/EIA Standard Compliance",
      "Signal Integrity Assurance",
      "Certified Link Performance",
      "Clean Rack Management",
    ],

    // Yahan se start karna hai.

    features: [
      {
        title: "Cabling Standards & Design",
        desc: "System design based on TIA/EIA and ISO/IEC standards, selecting Cat6/Cat6A/Cat7 copper and OM3/OM4 fiber.",
        icon: "network",
      },
      {
        title: "Copper Cabling Implementation",
        desc: "Horizontal and backbone installation with RJ45 terminations, patch panels, and full support for PoE/PoE+ devices.",
        icon: "activity",
      },
      {
        title: "Fiber Optic Implementation",
        desc: "Singlemode and multimode termination with LC/SC connectors, polarity verification, and backbone distribution.",
        icon: "zap",
      },
      {
        title: "Testing & Quality Assurance",
        desc: "Certification testing via Fluke for copper and OTDR/Power meter testing for fiber links with full documentation.",
        icon: "settings",
      },
      {
        title: "Documentation & Maintenance",
        desc: "Provision of as-built cabling diagrams, cable schedules, rack elevations, and future expansion recommendations.",
        icon: "monitor",
      },
      {
        title: "Clean Topology",
        desc: "Professional rack and cable management layout following global best practices for airflow and accessibility.",
        icon: "shield",
      },
    ],
  },

  // SUB-CATEGORY 14: CONFERENCE SOLUTIONS
  "conference-solutions": {
    title1: "Conference",
    title2: "Solutions",
    subtitle: "Enterprise AV Integration",
    desc: "Advanced conferencing infrastructure for boardrooms and collaborative spaces, focused on performance and centralized control.",
    image: Conference_Solution,

    overview:
      "Transdata Solutions provides enterprise conferencing infrastructure for meeting rooms, boardrooms, and collaborative spaces across Dubai and the UAE. The solution focuses on reliable audio/video performance, interoperability, and centralized control. We deploy cameras, microphones, speakers, and displays integrated over existing LAN/WAN networks, supporting both on-premises and cloud video conferencing platforms.",

    benefits: [
      "High-Definition AV Performance",
      "Centralized Room Control",
      "Multi-Platform Interoperability",
      "Low-Latency Streaming",
    ],

    features: [
      {
        title: "Audio/Video Integration",
        desc: "Installation of conference cameras, microphones, and speakers with support for USB, HDMI, and network-based AV connectivity. Audio includes echo cancellation and noise suppression.",
        icon: "monitor",
      },
      {
        title: "Control Systems",
        desc: "Centralized room control via touch panels or networked devices, allowing seamless source switching between laptops, codecs, and AV streams.",
        icon: "cpu",
      },
      {
        title: "Video Conferencing Platforms",
        desc: "Deployment and configuration of Cisco Webex, Microsoft Teams Rooms, Zoom Rooms, or SIP/H.323 endpoints for enterprise collaboration.",
        icon: "users",
      },
      {
        title: "Advanced Video Hardware",
        desc: "Support for PTZ (Pan-Tilt-Zoom) cameras and high-definition streaming peripherals integrated into boardrooms and meeting spaces.",
        icon: "compliance",
      },
      {
        title: "Network Quality Management",
        desc: "Architecture design ensuring low latency and packet prioritization (QoS) for critical streams to maintain stable conferencing.",
        icon: "network",
      },
      {
        title: "Monitoring & Maintenance",
        desc: "Continuous system monitoring and regular firmware updates to maintain optimal performance and hardware reliability.",
        icon: "monitor",
      },
    ],
  },

  // SUB-CATEGORY 15: CCTV SURVEILLANCE
  "cctv-surveillance": {
    title1: "CCTV",
    title2: "Surveillance",
    subtitle: "Secure Monitoring",
    desc: "Enterprise-grade surveillance systems designed for reliable monitoring, recording, and secure centralized management.",
    image: CCTV,

    overview:
      "Transdata Solutions delivers enterprise-grade CCTV systems across Dubai and the UAE, designed for reliable monitoring, recording, and secure storage. Solutions include IP cameras, NVRs, and centralized video management systems integrated over LAN/WAN networks for real-time monitoring.",

    benefits: [
      "Optimal Sightline Coverage",
      "Resilient Data Retention",
      "Secure Video Segmentation",
      "Real-Time Remote Monitoring",
    ],

    features: [
      {
        title: "Camera Installation & Positioning",
        desc: "IP camera placement planning for coverage areas and critical sightlines, including support for fixed, PTZ, and IR/night vision models.",
        icon: "monitor",
      },
      {
        title: "Storage & Retention Planning",
        desc: "Provisioning of NVR/SAN storage with automated overwrite settings, strict retention policies, and RAID planning for data resiliency.",
        icon: "database",
      },
      {
        title: "Network Considerations",
        desc: "Configuration of PoE switches for camera power, VLAN segregation for CCTV traffic, and bandwidth allocation for real-time video streams.",
        icon: "network",
      },
      {
        title: "Sightline Analysis",
        desc: "Detailed planning to ensure critical areas are covered without blind spots, utilizing advanced camera models for different environments.",
        icon: "layers",
      },
      {
        title: "VMS Integration",
        desc: "Implementation of centralized video management systems that unify multiple streams into a single dashboard for security teams.",
        icon: "activity",
      },
      {
        title: "Secure Data Handling",
        desc: "Encryption of video data and restricted access protocols to ensure surveillance footage remains secure and compliant.",
        icon: "support",
      },
    ],
  },

  // SUB-CATEGORY 16: IP PHONE SOLUTIONS
  "ip-phone-solutions": {
    title1: "IP Phone",
    title2: "Solutions",
    subtitle: "Scalable Voice",
    desc: "Consistent call quality, secure connectivity, and centralized management for enterprise office environments of all sizes.",
    image: Ip_Phone,

    overview:
      "Transdata Solutions provides enterprise IP phone solutions across Dubai and the UAE, enabling reliable and scalable voice communication over data networks. Our solutions integrate with existing LAN/WAN infrastructure, ensuring consistent call quality and security.",

    benefits: [
      "Consistent Voice Quality",
      "Easy Multi-Site Scalability",
      "Centralized Provisioning",
      "Secure Network Authentication",
    ],

    features: [
      {
        title: "SIP/IP Phone Hardware",
        desc: "Deployment of specialized phones for desktops, conference rooms, and executive offices with multi-line and voicemail support.",
        icon: "server",
      },
      {
        title: "Telephony Integration",
        desc: "Seamless integration with on-premises IP PBX systems or cloud-based telephony platforms for flexible enterprise communications.",
        icon: "globe",
      },
      {
        title: "Voice Traffic Prioritization",
        desc: "Implementation of VLAN and QoS support to ensure voice traffic is prioritized across the network, eliminating jitter and lag.",
        icon: "users",
      },
      {
        title: "Advanced Calling Features",
        desc: "Full support for voicemail, call forwarding, multi-line management, and automated attendants to improve office productivity.",
        icon: "zap",
      },
      {
        title: "Secure Voice Connectivity",
        desc: "Ensuring secure communication through network authentication and encrypted signaling for sensitive business conversations.",
        icon: "activity",
      },
      {
        title: "Centralized Management",
        desc: "Easy deployment and monitoring with centralized user configuration, allowing for upgrades with minimal business disruption.",
        icon: "lock",
      },
    ],
  },

  // SUB-CATEGORY 17: ENTERPRISE NETWORK & ENDPOINT PROTECTION
  "network-endpoint-protection": {
    title1: "Network &",
    title2: "Endpoint Protection",
    subtitle: "Infallible Security",
    desc: "Safeguarding LAN/WAN infrastructure, servers, and endpoints across the UAE with advanced threat prevention and real-time monitoring.",
    image: Endpoint_Protection,

    overview:
      "In today’s interconnected environments, safeguarding LAN/WAN infrastructure, servers, and endpoints is critical to maintaining business continuity. Transdata Solutions provides comprehensive network and endpoint security across Dubai and the UAE, combining advanced threat prevention, real-time monitoring, and centralized management to ensure visibility, control, and uninterrupted operations for enterprise IT systems.",

    benefits: [
      "Uninterrupted IT Operations",
      "Centralized Policy Management",
      "Real-Time Threat Visibility",
      "Automated Security Patching",
    ],

    features: [
      {
        title: "Firewall & Router Protection",
        desc: "Configuration and management of enterprise firewalls and routers to enforce security policies, control traffic, and protect against external threats.",
        icon: "shield",
      },
      {
        title: "VPN & Secure Remote Access",
        desc: "Deployment of site-to-site and remote access VPNs for encrypted communication between offices and remote users.",
        icon: "lock",
      },
      {
        title: "Intrusion Detection & Prevention",
        desc: "Continuous monitoring and blocking of unauthorized access attempts or malicious network activity to safeguard infrastructure.",
        icon: "support",
      },
      {
        title: "Endpoint Protection",
        desc: "Antivirus, anti-malware, and endpoint detection solutions (EDR) to protect desktops, laptops, and servers from internal and external threats.",
        icon: "network",
      },
      {
        title: "Network Monitoring",
        desc: "Real-time monitoring of network performance and security events to identify anomalies and maintain operational continuity.",
        icon: "monitor",
      },
      {
        title: "Scalable Implementation",
        desc: "Configurable solutions for medium to large enterprise environments, integrated with existing network infrastructure with minimal disruption.",
        icon: "compliance",
      },
    ],

    extraSections: [
      {
        title: "Enterprise Implementation Benefits",
        content:
          "Our solutions integrate security tools seamlessly with your existing network infrastructure, providing the control needed for modern enterprises.",
        listTitle: "Deployment Advantages",
        items: [
          "Centralized management of security policies and device configurations.",
          "Real-time alerting and reporting for critical network events.",
          "Regular firmware updates, patching, and system health checks.",
        ],
      },
    ],
  },

  // SUB-CATEGORY 18: CLOUD SECURITY SOLUTIONS
  "cloud-security-solutions": {
    title1: "Cloud Security",
    title2: "Solutions",
    subtitle: "Protected Workloads",
    desc: "Comprehensive security, compliance, and visibility across public, private, and hybrid cloud environments.",
    image: Cloud_Security,

    overview:
      "Enterprises are increasingly adopting cloud services, making security, compliance, and visibility across cloud workloads critical. Transdata Solutions delivers comprehensive cloud security solutions across Dubai and the UAE, helping organizations prevent incidents, respond to breaches, and safeguard sensitive data in public, private, and hybrid cloud environments. Our approach focuses on continuous monitoring, threat prevention, and secure access, ensuring that cloud-hosted applications remain protected without compromising performance.",

    benefits: [
      "Public/Private/Hybrid Visibility",
      "Proactive Threat Prevention",
      "Identity Federation Control",
      "Regulatory Cloud Compliance",
    ],

    features: [
      {
        title: "Threat Prevention",
        desc: "Proactively stopping cyberattacks before they can impact cloud workloads, databases, or critical business operations.",
        icon: "shield",
      },
      {
        title: "Incident Response & Recovery",
        desc: "Planning and implementing strategies to quickly contain and recover from security breaches in cloud-hosted environments.",
        icon: "alert",
      },
      {
        title: "Data Protection & Encryption",
        desc: "Securing sensitive data at rest and in transit using advanced encryption and tokenization methods to ensure total privacy.",
        icon: "lock",
      },
      {
        title: "Identity Management",
        desc: "Role-based permissions, multi-factor authentication (MFA), and secure identity federation for all enterprise cloud applications.",
        icon: "search",
      },
      {
        title: "Compliance & Monitoring",
        desc: "Continuous auditing, logging, and reporting to meet regulatory requirements and internal enterprise security policies.",
        icon: "compliance",
      },
      {
        title: "Scalable Protection",
        desc: "Ensuring that cloud-hosted applications and storage remain protected as your digital infrastructure grows and expands.",
        icon: "monitor",
      },
    ],
  },

  // SUB-CATEGORY 19: PENETRATION TESTING SERVICES
  "penetration-testing-services": {
    title1: "Penetration",
    title2: "Testing Services",
    subtitle: "Vulnerability Discovery",
    desc: "Identifying vulnerabilities in networks, applications, and systems before they can be exploited by attackers.",
    image: IT_Penetration_Testing,

    overview:
      "Transdata Solutions provides enterprise-grade penetration testing services across Dubai and the UAE, designed to identify vulnerabilities in networks, applications, and systems before they can be exploited by attackers. Our services help organizations strengthen their security posture, meet compliance requirements, and proactively reduce risk. Our approach combines technical expertise, industry-standard testing methodologies, and detailed reporting.",

    benefits: [
      "Actionable Security Insights",
      "Minimized Disruption Risk",
      "Industry-Standard Methodologies",
      "Compliance Strengthening",
    ],

    features: [
      {
        title: "Network Penetration Testing",
        desc: "Assessing internal and external networks for weaknesses, misconfigurations, and exploitable vulnerabilities.",
        icon: "alert",
      },
      {
        title: "Application Security Testing",
        desc: "Identifying vulnerabilities in web, mobile, and enterprise applications, including SQL injection, XSS, and authentication issues.",
        icon: "shield",
      },
      {
        title: "Wireless Network Testing",
        desc: "Evaluating Wi-Fi and wireless infrastructure for potential access points, weak encryption, or rogue devices.",
        icon: "network",
      },
      {
        title: "Social Engineering Assessments",
        desc: "Testing organizational awareness and employee susceptibility to phishing and other social engineering attacks.",
        icon: "compliance",
      },
      {
        title: "Cloud Penetration Testing",
        desc: "Assessing security configurations, access controls, and vulnerabilities in cloud environments including IaaS, PaaS, and SaaS.",
        icon: "cloud",
      },
      {
        title: "Actionable Reporting",
        desc: "Providing IT teams with detailed insights and remediation steps while minimizing disruption to business operations.",
        icon: "support",
      },
    ],
  },

  // SUB-CATEGORY 20: CYBERSECURITY CONSULTING & COMPLIANCE
  "cybersecurity-consulting-compliance": {
    title1: "Cybersecurity",
    title2: "Consulting",
    subtitle: "Regulatory Alignment",
    desc: "Helping organizations assess risks, implement controls, and align with UAE regulatory requirements (NESA, ISO 27001, GDPR).",
    image: Cyber_Consulting,

    overview:
      "Transdata Solutions provides enterprise cybersecurity consulting and compliance services across Dubai and the UAE. We work closely with your IT team to understand your infrastructure, operational workflows, and regulatory obligations, providing tailored recommendations that balance security with operational efficiency.",

    benefits: [
      "Tailored Implementation Approach",
      "Strategic Alignment with Goals",
      "Continuous Defense Improvement",
      "Verified Implementation",
    ],

    features: [
      {
        title: "Risk Assessments & Audits",
        desc: "Identifying vulnerabilities in networks, processes, and applications, prioritizing mitigation based on potential business impact.",
        icon: "compliance",
      },
      {
        title: "Policy Development",
        desc: "Designing enterprise security policies, procedures, and standards aligned with global industry best practices.",
        icon: "search",
      },
      {
        title: "Regulatory Compliance",
        desc: "Assisting with compliance frameworks such as ISO 27001, NESA, GDPR, and other specific UAE regulatory requirements.",
        icon: "support",
      },
      {
        title: "Security Strategy Planning",
        desc: "Creating roadmaps for implementing security technologies, continuous monitoring, and incident response capabilities.",
        icon: "shield",
      },
      {
        title: "Awareness & Training",
        desc: "Educating staff on security policies, threat recognition, and safe practices to reduce organizational risk from the human element.",
        icon: "alert",
      },
      {
        title: "Remediation Roadmaps",
        desc: "Providing detailed assessment reports highlighting risks and prioritizing corrective actions for short-term and long-term initiatives.",
        icon: "support",
      },
    ],

    extraSections: [
      {
        title: "Tailored Implementation & Oversight",
        content:
          "We collaborate closely with IT leadership to ensure that security strategies support operational goals without causing friction.",
        listTitle: "Ongoing Oversight Scope",
        items: [
          "Detailed assessment reports highlighting risks and recommended remediation steps.",
          "Compliance gap analysis with prioritization for corrective actions.",
          "Follow-up consultations and verification to ensure effective implementation.",
          "Roadmaps for security improvements tailored to your specific environment.",
        ],
      },
    ],
  },
};
