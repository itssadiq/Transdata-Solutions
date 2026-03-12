// =========================================================================
// INSTRUCTIONS:
// 1. Place your industry images in your /assets folder.
// 2. Import them here (e.g., import ConstructionImg from '../assets/const.jpg')
// 3. Replace the string paths below with the imported variable names.
// =========================================================================

import construction from "../assets/construction.jpg";
import banking from "../assets/banking.jpg";
import hospitality from "../assets/hospitality.jpg";
import hospitals from "../assets/hospitals.jpg";
import insurance from "../assets/insurance.jpg";
import realEstate from "../assets/real-estate.jpg";
import restaurant from "../assets/restaurant.jpg";
import retail from "../assets/retail.jpg";
import itServices from "../assets/It-services.jpeg";

export const industriesData = {
  // Page Header
  header: {
    title: "Team That Knows Your Industry Inside Out",
    description:
      "Every industry has its own way of working, and we understand how important smooth IT is to your daily operations. At Transdata Solutions, we’ve worked alongside businesses in banking, healthcare, retail, construction, and more — and we know what it takes to keep systems running so teams can focus on what they do best.",
    bgImage: itServices, // You'll need a generic hero image here
  },

  // The Main List of Industries
  industries: [
    {
      id: "construction",
      title: "Construction Industry",
      image: construction,
      content: [
        "Construction companies operate through a combination of head offices and active project sites, where coordination between teams is essential. Engineers, project managers, and procurement teams regularly access drawings, project documents, and reporting systems to track progress and manage resources. This often requires reliable connectivity between office locations and construction sites so information can move easily between teams.",
        "In such environments, stable network infrastructure, secure access to shared files, and reliable cloud connectivity help ensure teams can review plans, update reports, and communicate without delays. At the same time, back-office systems, workstations, servers, and network equipment need to remain available to support daily operations such as project planning, documentation, and internal coordination.",
        "A well-maintained IT environment allows construction teams to focus on project execution while keeping communication, documentation, and operational systems consistently accessible across locations.",
      ],
    },
    {
      id: "restaurant",
      title: "Restaurant Industry",
      image: restaurant,
      content: [
        "Restaurant operations rely on connected systems that keep orders, billing, and kitchen coordination running smoothly during busy hours. POS terminals at cashier counters are connected through the local network and send orders directly to kitchen printers or kitchen display systems (KDS) so kitchen staff can prepare meals without delays.",
        "Many restaurants also use digital menu boards and display screens to show menus, promotions, and visuals that attract customers. These screens are typically connected to a central system, allowing quick updates to menu items and pricing.",
        "In the back office, workstations and systems support daily tasks such as sales reporting, inventory tracking, and supplier coordination. Reliable network connectivity, payment devices, routers, switches, and secure Wi-Fi help ensure POS systems, online orders, and payment processing continue running throughout the day.",
      ],
    },
    {
      id: "retail",
      title: "Retail Industry",
      image: retail,
      content: [
        "Retail businesses operate through connected systems that manage sales, inventory, and store operations throughout the day. At checkout counters, point-of-sale (POS) terminals, barcode scanners, and payment devices process transactions and update inventory records so stock levels and sales data remain accurate.",
        "Many stores also use digital signage and promotional display screens to highlight offers, new arrivals, and seasonal campaigns. These displays are usually connected to centralized systems that allow store teams or head offices to update promotions and product information across locations.",
        "Behind store operations, retail companies often rely on centralized servers or data center environments where inventory systems, reporting platforms, and store data are managed. From there, branch stores connect securely to access sales data, stock information, and operational reports. Maintaining secure infrastructure, controlled access, and stable connectivity between stores and central systems helps keep retail operations organized while protecting business data.",
      ],
    },
    {
      id: "hospitality",
      title: "Hospitality Industry",
      image: hospitality,
      content: [
        "Hospitality operations rely on connected systems that support reservations, guest services, and internal coordination across the entire property. At the front desk, Property Management Systems (PMS) handle bookings, check-ins, check-outs, and billing while connecting with payment gateways and reporting systems.",
        "Hotels also depend on a wide range of IT infrastructure, including IP telephone systems for guest rooms and internal communication, guest Wi-Fi networks, CCTV surveillance systems, and electronic door lock or access control systems. Many properties also use digital display screens in lobbies and conference areas to present event schedules, promotions, and hotel information.",
        "In the back office, systems support reservations management, finance, housekeeping coordination, and operational reporting. Because hotels handle guest information, payment data, and reservation records, data security and controlled network access are critical to protect sensitive information. Reliable network infrastructure, switches, routers, and secure connectivity help ensure these systems remain accessible and stable throughout daily operations.",
      ],
    },
    {
      id: "banking",
      title: "Banking Industry",
      image: banking,
      content: [
        "Banking environments typically run on tightly controlled core banking platforms connected across branches through secure WAN/MPLS or VPN-based networks, allowing authorized staff to access customer accounts, process transactions, and generate operational reports in real time. Branch workstations connect to these centralized systems through managed network infrastructure, ensuring consistent access to banking applications and internal services.",
        "Within branch and back-office environments, banks rely on equipment such as high-speed network printers, cheque scanners to manage the significant volume of paperwork related to account opening, compliance documentation, transaction records, and audit trails. These devices are usually integrated with document management and record-keeping systems to maintain proper regulatory documentation.",
        "Behind branch operations, banking IT infrastructure is supported by centralized data centers or private cloud environments, where core applications, databases, and reporting platforms are hosted. Secure network segmentation, endpoint control, identity access management, and data protection mechanisms are critical to safeguard sensitive financial data while ensuring continuous availability of banking services across branches and operational teams.",
      ],
    },
    {
      id: "real-estate",
      title: "Real Estate Industry",
      image: realEstate,
      content: [
        "Real estate agencies operate in fast-moving environments where agents, sales teams, and back-office staff work together to manage property listings, client interactions, documentation, and transaction records. These operations depend on well-connected office systems where teams can access CRM platforms, property listing databases, and document management systems used to track deals, contracts, and client communications.",
        "A reliable office IT setup is essential for handling large volumes of documents such as property agreements, compliance paperwork, marketing materials, and property layouts. Real estate offices typically rely on high-speed network printers, scanners, shared storage systems, and connected workstations to process documentation efficiently while keeping records organized and accessible.",
        "Behind these daily activities, stable LAN and Wi-Fi networks, routers, switches, and secure internet connectivity keep devices connected across meeting rooms, agent workspaces, and presentation areas where property details are discussed with clients. Many agencies also depend on cloud-based platforms to securely store listings, marketing assets, and client files so teams can access information from the office or while meeting clients at different locations.",
        "A well-structured IT environment helps ensure that back-office systems, communication tools, and connected devices remain reliable, allowing real estate teams to manage properties, documentation, and client interactions smoothly.",
      ],
    },
    {
      id: "healthcare",
      title: "Hospitals & Healthcare Industry",
      image: hospitals,
      content: [
        "Healthcare environments operate on interconnected systems that support patient care, administration, and clinical coordination across departments. Hospitals typically rely on Hospital Information Systems (HIS), Electronic Medical Records (EMR/EHR) platforms, and connected workstations used by doctors, nurses, and administrative staff to access patient records, treatment details, and clinical documentation.",
        "Within daily operations, hospitals depend on a wide range of back-office and departmental equipment such as high-speed printers, label printers, document scanners, and workstation terminals used for patient registration, prescription printing, reports, and medical documentation. These systems must remain consistently connected so patient information, lab reports, and medical records are accessible across departments.",
        "Behind the scenes, hospitals rely on reliable network infrastructure including secure LAN/Wi-Fi networks, routers, switches, and segmented network environments to connect nursing stations, reception areas, laboratories, and administrative offices. Many healthcare systems also operate with centralized data environments or cloud-based platforms where patient data, medical records, and operational systems are securely stored and accessed.",
        "Because healthcare systems handle highly sensitive patient information, data security, controlled access, and system reliability are critical priorities. Maintaining stable connectivity between devices, medical systems, and administrative platforms helps ensure that healthcare teams can access the information they need while keeping clinical and operational workflows running smoothly.",
      ],
    },
    {
      id: "insurance",
      title: "Insurance Industry",
      image: insurance,
      content: [
        "Insurance operations rely on connected systems that support policy management, claims processing, customer records, and regulatory documentation. Office teams typically work on policy administration systems, claims management platforms, and CRM applications that allow staff to manage policies, track claims, and maintain detailed customer records.",
        "Insurance offices also handle a significant amount of documentation, including policy forms, claims paperwork, verification records, and compliance documents. To support these activities, offices depend on workstations, high-speed network printers, scanners, and document management systems that help process and archive large volumes of paperwork efficiently.",
        "Behind these daily operations, stable LAN and secure internet connectivity, routers, switches, and managed network environments keep devices connected across departments such as underwriting, claims processing, and customer support. Many insurance companies also rely on centralized data platforms or cloud-based systems to store policy data, manage customer records, and generate operational reports across offices.",
        "Because insurance companies manage sensitive personal and financial information, maintaining data security, controlled system access, and reliable infrastructure is a key priority to ensure that policy management systems, claims processing platforms, and internal operations remain consistently available.",
      ],
    },
  ],

  // Footer CTA
  cta: {
    title: "Understand Your Industry’s IT Needs",
    description:
      "Every industry operates differently, and the technology that supports those operations must align with how teams actually work. With 13+ years of experience, Transdata Solutions has developed a strong understanding of the IT environments that support businesses across multiple sectors. If you're planning to improve your infrastructure, upgrade systems, or simply want to discuss how your current IT setup supports your operations, we’d be happy to connect and explore it together.",
    buttonText: "Book a Consultation",
    link: "/contact",
  },
};
