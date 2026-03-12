import ServiceNowLogo from "../assets/servicenow-logo.png";
import Cert1 from "../assets/csa-cert.png";
import Cert2 from "../assets/cis-cert.png";
import Cert3 from "../assets/cert3.png";
import Cert4 from "../assets/cert4.jpg";
import TeamImage from "../assets/cyber-consulting.jpg";
import BgImage from "../assets/talent-solutions.jpg";

export const serviceNowData = {
  // 1. Hero Section
  hero: {
    title: "Get Ready-to-Deploy ServiceNow Resources for Your Projects",
    subtitle:
      "Scale your team with certified ServiceNow professionals available on flexible contracts to support configuration, maintenance, and daily platform operations.",
    // Replace with the actual path to the specific logo for this page
    serviceLogo: ServiceNowLogo,
    bgImage: BgImage,
  },

  // 2. Full Width Text Section
  strategicBenefits: {
    title: "Strategic Benefits of Outsourced ServiceNow Expertise",
    description:
      "ServiceNow is a highly specialized platform that requires certified professionals to manage the complexities of modern IT environments. Hiring in-house experts can be costly due to high salaries and additional administrative overhead. In such cases, engaging an outsourced ServiceNow service provider is a practical solution, giving you access to qualified professionals without the expense and commitment of full-time hiring.",
  },

  // 3. Split Section: Left (Text) / Right (Certificate Slider)
  hiring: {
    title: "Hire ServiceNow Certified Professionals for Your Projects",
    content: [
      "Organizations looking for ServiceNow resources for project support can leverage our certified professionals to assist with platform administration, CMDB structuring, and strategic portfolio management. Our team helps organizations configure the ServiceNow platform, maintain CMDB and CSDM data models, support workflow configuration, and enable effective management of IT services and portfolios.",
      "With certifications in ServiceNow CSA, CIS-SPM, and CMDB & CSDM, our professionals can support ServiceNow environments by assisting with platform setup, configuration tasks, CMDB governance, and portfolio planning aligned with organizational IT operations.",
    ],
    // Add your certificate image paths here for the slider
    certificates: [Cert1, Cert2, Cert3, Cert4],
  },

  // 4. Split Section: Left (Image) / Right (List)
  whyChoose: {
    title: "Why Choose Transdata’s ServiceNow Team?",
    image: TeamImage, // The image on the left
    points: [
      "Flexible support for short-term or long-term project needs.",
      "Remote-ready professionals who can work from any location.",
      "Customer-focused, result-oriented team committed to project success.",
      "Ability to handle complex ServiceNow requirements and demands.",
      "Ensure efficient and reliable ServiceNow operations.",
    ],
  },

  // 5. FAQ Section
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Why is contract hiring preferred for ServiceNow projects?",
        answer:
          "Contract hiring provides certified professionals on-demand, reducing costs and administrative overhead compared to full-time hiring.",
      },
      {
        question: "Are ready-to-deploy ServiceNow resources available?",
        answer:
          "Yes, our certified CSA, CIS-SPM, and CMDB & CSDM professionals are ready to join your projects immediately.",
      },
      {
        question: "Can ServiceNow resources work remotely?",
        answer:
          "Absolutely. Our professionals are fully equipped to deliver high-quality support from remote locations.",
      },
      {
        question:
          "Do you provide short-term and long-term ServiceNow experts on contract?",
        answer:
          "Yes, we offer flexible contract options to meet both short-term and long-term project requirements.",
      },
      {
        question: "How can I get started with hiring ServiceNow resources?",
        answer:
          "Simply reach out to our team, share your project requirements, and we’ll match you with the right certified professionals.",
      },
    ],
  },

  // 6. CTA / Contact Section
  cta: {
    title: "Want to Hire ServiceNow resources?",
    description:
      "Looking to hire ServiceNow resources for your projects? Connect with us to onboard certified professionals who can seamlessly support your team for short-term or long-term engagements.",
    contactInfo: {
      phone: "+971-4-380 7338",
      email: "info@transdata-solutions.com",
    },
  },
};
