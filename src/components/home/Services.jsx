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
    if (Math.abs(startX - (startX + 1)) > 5 && isDown) return;
    if (clickedCard === index) {
      setClickedCard(null);
    } else {
      setClickedCard(index);
    }
  };

  // Updated Services List (6 Items)
  const services = [
    {
      id: "01",
      title: "Managed IT",
      subtitle: "Services",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      desc: "Comprehensive IT management including 24/7 monitoring, helpdesk support, and proactive maintenance to ensure your operations never miss a beat.",
    },
    {
      id: "02",
      title: "IT Datacenter",
      subtitle: "Solutions",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      desc: "End-to-end data center design, precision cooling, power management, and racking solutions built for high-density and mission-critical environments.",
    },
    {
      id: "03",
      title: "Networking &",
      subtitle: "Switching",
      img: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg",
      desc: "Designing robust network architectures with enterprise-grade switching, routing, and wireless infrastructure to ensure seamless connectivity.",
    },
    {
      id: "04",
      title: "Cyber Security",
      subtitle: "Services",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      desc: "Advanced threat protection, zero-trust architectures, and compliance strategies to safeguard your digital assets against evolving cyber threats.",
    },
    {
      id: "05",
      title: "Data Backup &",
      subtitle: "Protection",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      desc: "Resilient disaster recovery planning and automated backup solutions that ensure business continuity and data integrity in any scenario.",
    },
    {
      id: "06",
      title: "Communication",
      subtitle: "& LV",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      desc: "Unified communication systems combined with structured Low Voltage (LV) cabling solutions for smart building automation and connectivity.",
    },
  ];

  return (
    <section
      id="services-drag"
      className="bg-gray-50 py-24 overflow-hidden border-b border-gray-200"
    >
      {/* Header - Updated with new Headline & Subheadline */}
      <div className="container mx-auto px-6 md:px-20 mb-12 reveal-up">
        <h2 className="text-xs font-bold text-black mb-4 uppercase tracking-widest flex items-center gap-3">
          <span className="w-8 h-0.5 bg-td-yellow"></span> // Capabilities
        </h2>
        <div className="max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
            End-to-End IT Solutions <br className="hidden md:block" /> Under One
            Roof
          </h3>
          <p className="text-black/70 text-lg md:text-lg font-medium leading-relaxed max-w-3xl">
            From strategy to support, we deliver complete IT solutions designed
            for reliability, security, and scalability.
          </p>
        </div>
      </div>

      {/* Visual Scroll Guide */}
      <div className="container mx-auto px-6 mb-10 md:px-20 reveal-up">
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
        {services.map((service, index) => {
          const isFlipped = clickedCard === index;

          return (
            // CARD WRAPPER
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="group relative flex-none w-[85vw] md:w-[350px] h-[420px] md:h-[460px] [perspective:1000px]"
            >
              {/* CARD INNER */}
              <div
                className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] shadow-xl group-hover:shadow-2xl 
                ${isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"}`}
              >
                {/* === FRONT FACE === */}
                <div
                  className={`absolute inset-0 w-full h-full [backface-visibility:hidden] bg-black rounded-sm overflow-hidden transition-opacity duration-300 ${
                    isFlipped
                      ? "opacity-0 delay-300"
                      : "opacity-100 group-hover:opacity-0 group-hover:delay-300"
                  }`}
                  // The delay-300 ensures it fades OUT only after it has rotated halfway (90deg)
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    draggable="false"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
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
                <div
                  className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0f0f0f] p-8 flex flex-col justify-center items-start rounded-sm border-2 border-td-yellow overflow-hidden transition-opacity duration-300 ${
                    isFlipped
                      ? "opacity-100 delay-300"
                      : "opacity-0 group-hover:opacity-100 group-hover:delay-300"
                  }`}
                  // The delay-300 ensures it fades IN only after it has rotated halfway
                >
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
          );
        })}
        <div className="min-w-[50px]"></div>
      </div>
    </section>
  );
};

export default Services;
