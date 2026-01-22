import { ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";

const Services = () => {
  const servicesRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - servicesRef.current.offsetLeft);
    setScrollLeft(servicesRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - servicesRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    servicesRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <section
      id="services-drag"
      className="bg-gray-50 py-24 overflow-hidden border-b border-gray-200"
    >
      <div className="container mx-auto px-6 md:px-20 mb-8 flex flex-col md:flex-row justify-between items-end reveal-up">
        <div>
          <h2 className="text-xs font-bold text-black mb-4 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-0.5 bg-td-yellow"></span> 02 // Capabilities
          </h2>
          <h3 className="text-5xl font-bold text-black">Core Services</h3>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-20 mb-6 reveal-up">
        <div className="flex items-center gap-4 opacity-50">
          <div className="h-px bg-gray-400 w-16"></div>
          <div className="text-2xl animate-hand-guide">☞</div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Drag to Explore
          </span>
        </div>
      </div>

      <div
        ref={servicesRef}
        className={`flex gap-6 overflow-x-auto pb-12 pt-4 px-6 md:px-20 cursor-grab no-scrollbar no-select ${isDown ? "active cursor-grabbing" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {[
          {
            id: "01",
            title: "Infrastructure",
            subtitle: "Solutions",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
            desc: "We design and deploy robust, scalable physical and digital architectures tailored for high-demand environments. From server farms to edge computing nodes, we ensure your foundation is rock solid for future expansion.",
          },
          {
            id: "02",
            title: "Cloud",
            subtitle: "Solutions",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            desc: "Navigate complex cloud migrations with our strategic framework. We implement hybrid and multi-cloud environments (AWS, Azure, Google Cloud) optimized for elasticity, cost-efficiency, and global availability.",
          },
          {
            id: "03",
            title: "IT Managed",
            subtitle: "Services",
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            desc: "Experience operational tranquility with our proactive 24/7 Network Operations Center (NOC). We handle patch management, helpdesk support, and system health monitoring so you can focus on your core business.",
          },
          {
            id: "04",
            title: "Data",
            subtitle: "Management",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            desc: "Transform raw data into actionable intelligence. We build sophisticated data warehouses and governance frameworks that unify fragmented sources, enabling precise evidence-based decision making.",
          },
          {
            id: "05",
            title: "Cybersecurity",
            subtitle: "Solutions",
            img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            desc: "Implement Zero Trust architectures and advanced threat detection systems specifically designed for critical infrastructure. We protect your most valuable assets from cyber espionage and ransomware.",
          },
          {
            id: "06",
            title: "Digital",
            subtitle: "Transformation",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            desc: "Modernize legacy paper-based processes into digital-first workflows using AI and automation. We reimagine business units to improve agility, reduce overhead, and enhance customer satisfaction.",
          },
          {
            id: "07",
            title: "Collaboration",
            subtitle: "Solutions",
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            desc: "Deploy unified communication platforms that seamlessly connect field engineers, drivers, and headquarters. We integrate voice, video, and messaging for real-time collaboration.",
          },
          {
            id: "08",
            title: "Business",
            subtitle: "Applications",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            desc: "Integrate enterprise-grade ERP and CRM systems to unify financial planning, asset management, and customer relations into a single source of truth for your organization.",
          },
          {
            id: "09",
            title: "Emerging",
            subtitle: "Technologies",
            img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            desc: "Future-proof your operations by piloting Blockchain for supply chain transparency, IoT sensors for predictive maintenance, and Edge Computing for ultra-low latency processing.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="flex-none w-75 h-112.5 bg-white shadow-xl relative group overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:w-112.5 hover:shadow-2xl rounded-sm no-select"
          >
            <img
              src={service.img}
              draggable="false"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent pointer-events-none"></div>

            <div className="absolute top-0 left-0 p-8 w-full z-20 pointer-events-none">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono font-bold text-td-yellow tracking-widest border border-td-yellow/30 px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
                  {service.id}
                </span>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:bg-td-yellow group-hover:text-black group-hover:rotate-45 group-hover:border-td-yellow">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <h4 className="text-3xl font-bold text-white leading-tight drop-shadow-md">
                {service.title}
                <br />
                {service.subtitle}
              </h4>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 z-30 transform translate-y-8 opacity-0 transition-all duration-200 ease-in delay-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:duration-700 group-hover:delay-150 no-select pointer-events-none">
              <div className="h-px w-12 bg-td-yellow mb-4 group-hover:w-full transition-all duration-700"></div>
              <p className="text-sm font-medium leading-relaxed text-gray-200">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="min-w-12.5"></div>
      </div>
    </section>
  );
};

export default Services;
