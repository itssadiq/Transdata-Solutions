import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const servicesRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mobile Tap State
  const [clickedCard, setClickedCard] = useState(null);

  // Drag Interaction Logic
  const handleMouseDown = (e) => {
    if (e.target.closest("button")) return;
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

  // Mobile Tap Logic
  const handleCardClick = (index) => {
    if (Math.abs(startX - (startX + 1)) > 5 && isDown) return; // Ignore drag clicks
    if (clickedCard === index) {
      setClickedCard(null);
    } else {
      setClickedCard(index);
    }
  };

  const services = [
    {
      id: "01",
      title: "Infrastructure",
      subtitle: "Solutions",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      desc: "We design and deploy robust, scalable physical and digital architectures tailored for high-demand environments. From server farms to edge computing nodes, we ensure your foundation is rock solid.",
    },
    {
      id: "02",
      title: "Cloud",
      subtitle: "Solutions",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      desc: "Navigate complex cloud migrations with our strategic framework. We implement hybrid and multi-cloud environments (AWS, Azure, Google Cloud) optimized for elasticity and cost-efficiency.",
    },
    {
      id: "03",
      title: "IT Managed",
      subtitle: "Services",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      desc: "Experience operational tranquility with our proactive 24/7 Network Operations Center (NOC). We handle patch management, helpdesk support, and system health monitoring.",
    },
    {
      id: "04",
      title: "Data",
      subtitle: "Management",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      desc: "Transform raw data into actionable intelligence. We build sophisticated data warehouses and governance frameworks that unify fragmented sources for precise decision making.",
    },
    {
      id: "05",
      title: "Cybersecurity",
      subtitle: "Solutions",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      desc: "Implement Zero Trust architectures and advanced threat detection systems. We protect your most valuable assets from cyber espionage and ransomware with military-grade protocols.",
    },
    {
      id: "06",
      title: "Digital",
      subtitle: "Transformation",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      desc: "Modernize legacy paper-based processes into digital-first workflows using AI and automation. We reimagine business units to improve agility and enhance customer satisfaction.",
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
  ];

  return (
    <section
      id="services-drag"
      className="bg-gray-50 py-24 overflow-hidden border-b border-gray-200"
    >
      {/* Header */}
      <div className="container mx-auto px-6 md:px-20 mb-8 flex flex-col md:flex-row justify-between items-end reveal-up">
        <div>
          <h2 className="text-xs font-bold text-black mb-4 uppercase tracking-widest flex items-center gap-3">
            <span class="w-8 h-0.5 bg-td-yellow"></span> 02 // Capabilities
          </h2>
          <h3 className="text-5xl font-bold text-black">Core Services</h3>
        </div>
      </div>

      {/* Visual Scroll Guide */}
      <div className="container mx-auto px-6 md:px-20 mb-10 reveal-up">
        <div className="flex items-center gap-4 opacity-50">
          <div className="h-px bg-gray-400 w-16"></div>
          <div className="text-2xl animate-hand-guide">☞</div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Drag to Explore
          </span>
        </div>
      </div>

      {/* Cards Container */}
      <div
        ref={servicesRef}
        className={`flex gap-6 md:gap-8 overflow-x-auto pb-16 pt-4 px-6 md:px-20 cursor-grab no-scrollbar select-none ${
          isDown ? "active cursor-grabbing" : ""
        }`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {services.map((service, index) => (
          // CARD WRAPPER - Responsive Width
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className="group relative flex-none w-[85vw] md:w-87.5 h-87.5 md:h-100 [perspective:1000px]"
          >
            {/* CARD INNER */}
            <div
              className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] shadow-xl group-hover:shadow-2xl 
              ${clickedCard === index ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}
            >
              {/* === FRONT FACE === */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-black rounded-sm overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  draggable="false"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none opacity-90"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold text-td-yellow tracking-widest border border-td-yellow/30 px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
                      {service.id}
                    </span>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <div>
                    <div className="h-0.5 w-12 bg-td-yellow mb-4"></div>
                    <h4 className="text-3xl font-bold text-white leading-tight drop-shadow-md">
                      {service.title}
                      <br />
                      {service.subtitle}
                    </h4>
                  </div>
                </div>
              </div>

              {/* === BACK FACE === */}
              {/* Added [transform:rotateY(180deg)] to ensure it faces the 'back' of the 3D space initially */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0f0f0f] p-8 flex flex-col justify-center items-start rounded-sm border-2 border-td-yellow overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-td-yellow/5 rounded-full blur-2xl pointer-events-none"></div>

                <span className="text-td-yellow text-4xl font-black mb-6 opacity-20 select-none">
                  {service.id}
                </span>

                <h4 className="text-xl font-bold text-white mb-4">
                  {service.title} {service.subtitle}
                </h4>

                <p className="text-sm font-medium text-gray-300 leading-relaxed">
                  {service.desc}
                </p>

                <button
                  className="mt-8 flex items-center gap-2 text-td-yellow text-xs font-bold uppercase tracking-widest relative z-[100] !cursor-pointer pointer-events-auto hover:text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Clicked Explore", service.title);
                  }}
                >
                  <span>Explore</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="min-w-[50px]"></div>
      </div>
    </section>
  );
};

export default Services;
