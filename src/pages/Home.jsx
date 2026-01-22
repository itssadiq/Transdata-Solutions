import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Share2,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const socialScrollRef = useRef(null);
  const location = useLocation();

  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Scroll to hash on load if present
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Data
  const testimonials = [
    {
      text: `"I am delightful to say that team transdata is amazing. They managed to cater all our hardware and software requirements instantly and we've been running like clock work ever since. They really know the process and are brilliant at it, hence they made all the process a breeze, Thanks a ton, guys!"`,
      author: "POOJA",
      color: "bg-black",
    },
    {
      text: `"I was blown by the speed and reliability of our new digital infrastructure after working with this team. Their expertise in cabling, internet and networking made all the difference our business operations. Thanks to them, we have a seamless and robust system we can count on everyday"`,
      author: "JOSEF",
      color: "bg-td-yellow",
    },
    {
      text: `"Wow, these transdata's team really came through for us! When we experienced a major data loss, we were worried our business was going to suffer. But thanks to their backup and disaster recovery solutions, we were up and running again in no time. Their team was so responsive and tailored a solution to fit our needs perfectly."`,
      author: "SARAH",
      color: "bg-gray-500",
    },
  ];

  // GSAP Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Text Reveal
      const tl = gsap.timeline();
      tl.to(".hero-text-reveal", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      }).to(
        ".animate-in",
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.8",
      );

      // Reveal Sidebar
      gsap.to(".reveal-sidebar", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1,
      });

      // Global Reveal for Sections
      gsap.utils.toArray(".reveal-up").forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: { trigger: elem, start: "top 85%" },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Testimonial Auto-Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Draggable Services Logic
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

  // Social Slider Logic
  const slideSocial = (direction) => {
    if (socialScrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      socialScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div ref={heroRef} className="overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-start text-left">
        <div className="absolute inset-0 z-0 bg-gray-100">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100 grayscale contrast-125"
          >
            <source
              src="https://www.pexels.com/download/video/3129977/"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 w-full md:w-1/2 ml-0 md:ml-20">
          <div className="overflow-hidden mb-6">
            <p className="text-white/80 font-medium text-[11px] uppercase tracking-[0.4em] opacity-0 translate-y-4 animate-in">
              Intelligent Infrastructure
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white capitalize mb-8">
            <div className="overflow-hidden">
              <div className="hero-text-reveal translate-y-full opacity-0">
                Tailored IT Services &
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-text-reveal translate-y-full opacity-0">
                Solution to <span className="text-td-yellow">Boost</span>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-text-reveal translate-y-full opacity-0">
                <span className="text-td-yellow">Your Business</span>
              </div>
            </div>
          </h1>
          <p className="text-white/70 text-sm font-mono uppercase tracking-widest opacity-0 translate-y-4 animate-in">
            Predict the future through AI & Machine Learning
          </p>
        </div>

        {/* Hero Sidebar */}
        <div className="hidden md:flex flex-col items-end gap-2 absolute right-[5%] top-1/2 -translate-y-1/2 z-30 border-r-2 border-white pr-5 opacity-0 translate-x-10 reveal-sidebar">
          <a
            href="#about"
            className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
          >
            Our Mission
          </a>
          <a
            href="#insights"
            className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
          >
            Testimonials
          </a>
          <a
            href="#insights"
            className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
          >
            FAQ's
          </a>
          <a
            href="#social-slider"
            className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
          >
            Social Updates
          </a>
          <a
            href="#contact"
            className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
          >
            Contact
          </a>
          <a
            href="#location"
            className="text-white font-sans font-semibold text-xs opacity-70 capitalize transition-all duration-300 hover:opacity-100 hover:-translate-x-1 hover:text-td-yellow"
          >
            Our Office
          </a>
        </div>

        <div className="absolute bottom-10 left-10 md:left-20 animate-bounce">
          <div className="text-white text-xs font-bold uppercase tracking-widest">
            Scroll Down ↓
          </div>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 h-[400px] bg-gray-100 relative overflow-hidden rounded-md reveal-up">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="https://www.pexels.com/download/video/10395146/"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="mb-8 reveal-up">
                <h2 className="text-xs font-bold text-td-yellow mb-4 uppercase tracking-widest">
                  01 // Who We Are
                </h2>
                <h3 className="text-2xl md:text-3xl font-extrabold text-black leading-tight max-w-2xl">
                  With more than 12 years of experience, 350+ projects, and 265+
                  satisfied clients in 24 countries, Transdata Solutions is a
                  leading end-to-end digital solutions provider.
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-up">
                <div>
                  <h4 className="text-lg font-bold mb-4">About Us</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Transdata Solutions has been working diligently since 2013
                    to serve the IT sector throughout the UAE. Notably, we are
                    passionate about delivering the best value IT products.
                  </p>
                  <div
                    className={`relative overflow-hidden transition-all duration-700 ease-in-out ${isReadMoreOpen ? "max-h-[500px]" : "max-h-[3rem]"}`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      As a technology consulting company, Transdata Solutions
                      caters to all types of organizations at each level. We
                      firmly believe that we have built an organization uniquely
                      equipped for this task.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Furthermore, Transdata Solutions holds the perfect
                      expertise and knowledge to find the best combination when
                      it comes to product configuration for our clients.
                    </p>
                    <div
                      className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none transition-opacity duration-300 ${isReadMoreOpen ? "opacity-0" : "opacity-100"}`}
                    ></div>
                  </div>
                  <button
                    onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                    className="mt-4 text-xs font-bold uppercase tracking-widest border-b-2 border-td-yellow pb-1 hover:text-td-yellow transition-colors"
                  >
                    {isReadMoreOpen ? "Show Less" : "Read More"}
                  </button>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-4">Our Mission</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To empower businesses through innovative technology,
                    providing reliable, scalable, and secure IT infrastructure
                    that drives growth and operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER MARQUEE */}
      <section
        id="partner-marquee"
        className="py-12 bg-white border-b border-gray-100 overflow-hidden"
      >
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by Global Leaders
        </p>
        <div className="flex overflow-hidden">
          {/* Loop 1 */}
          <div className="flex shrink-0 items-center gap-24 px-10 animate-marquee min-w-full justify-around gpu-accelerate">
            {[
              "Microsoft",
              "Amazon_Web_Services",
              "IBM",
              "Cisco",
              "Oracle",
              "SAP",
              "Intel",
              "Lenovo",
            ].map((brand, i) => (
              <img
                key={i}
                src={`https://upload.wikimedia.org/wikipedia/commons/${
                  brand === "Microsoft"
                    ? "9/96/Microsoft_logo_%282012%29"
                    : brand === "Amazon_Web_Services"
                      ? "9/93/Amazon_Web_Services_Logo"
                      : brand === "IBM"
                        ? "5/51/IBM_logo"
                        : brand === "Cisco"
                          ? "0/08/Cisco_logo_blue_2016"
                          : brand === "Oracle"
                            ? "5/50/Oracle_logo"
                            : brand === "SAP"
                              ? "5/59/SAP_2011_logo"
                              : brand === "Intel"
                                ? "c/c9/Intel-logo"
                                : "b/b8/Lenovo_logo_2015"
                }.svg`}
                loading="lazy"
                className={`h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${brand === "Lenovo" || brand === "Oracle" ? "h-6" : ""}`}
                alt={brand}
              />
            ))}
          </div>
          {/* Loop 2 */}
          <div className="flex shrink-0 items-center gap-24 px-10 animate-marquee min-w-full justify-around gpu-accelerate">
            {[
              "Microsoft",
              "Amazon_Web_Services",
              "IBM",
              "Cisco",
              "Oracle",
              "SAP",
              "Intel",
              "Lenovo",
            ].map((brand, i) => (
              <img
                key={i}
                src={`https://upload.wikimedia.org/wikipedia/commons/${
                  brand === "Microsoft"
                    ? "9/96/Microsoft_logo_%282012%29"
                    : brand === "Amazon_Web_Services"
                      ? "9/93/Amazon_Web_Services_Logo"
                      : brand === "IBM"
                        ? "5/51/IBM_logo"
                        : brand === "Cisco"
                          ? "0/08/Cisco_logo_blue_2016"
                          : brand === "Oracle"
                            ? "5/50/Oracle_logo"
                            : brand === "SAP"
                              ? "5/59/SAP_2011_logo"
                              : brand === "Intel"
                                ? "c/c9/Intel-logo"
                                : "b/b8/Lenovo_logo_2015"
                }.svg`}
                loading="lazy"
                className={`h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${brand === "Lenovo" || brand === "Oracle" ? "h-6" : ""}`}
                alt={brand}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services-drag"
        className="bg-gray-50 py-24 overflow-hidden border-b border-gray-200"
      >
        <div className="container mx-auto px-6 md:px-20 mb-8 flex flex-col md:flex-row justify-between items-end reveal-up">
          <div>
            <h2 className="text-xs font-bold text-black mb-4 uppercase tracking-widest flex items-center gap-3">
              <span class="w-8 h-[2px] bg-td-yellow"></span> 02 // Capabilities
            </h2>
            <h3 class="text-5xl font-bold text-black">Core Services</h3>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-20 mb-6 reveal-up">
          <div className="flex items-center gap-4 opacity-50">
            <div className="h-[1px] bg-gray-400 w-16"></div>
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
              className="flex-none w-[300px] h-[450px] bg-white shadow-xl relative group overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:w-[450px] hover:shadow-2xl rounded-sm no-select"
            >
              <img
                src={service.img}
                draggable="false"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>

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
                <div className="h-[1px] w-12 bg-td-yellow mb-4 group-hover:w-full transition-all duration-700"></div>
                <p className="text-sm font-medium leading-relaxed text-gray-200">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="min-w-[50px]"></div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        id="industries"
        className="bg-white py-24 border-t border-gray-100"
      >
        <div className="container mx-auto px-6 md:px-20 mb-20">
          <h2 className="text-xs font-bold text-td-yellow mb-6 uppercase tracking-widest flex items-center gap-3">
            <span class="w-8 h-[2px] bg-black"></span> 03 // Sectors
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <h3 class="text-5xl md:text-6xl font-black text-black leading-tight">
              Industries
              <br />
              We Empower
            </h3>
            <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-2">
              Leveraging deep domain expertise to engineer solutions that
              address the specific challenges of your sector.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Education",
                desc: "Secure digital learning environments and campus-wide high-speed infrastructure for modern universities.",
                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
              },
              {
                title: "Retail",
                desc: "Integrated POS systems, real-time inventory tracking, and data-driven customer loyalty analytics.",
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
              },
              {
                title: "Restaurants",
                desc: "Streamlining operations with smart kitchen display systems and robust reservation management platforms.",
                img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
              },
              {
                title: "Oil & Gas",
                desc: "Ensuring safety and efficiency with remote monitoring IoT sensors and ruggedized communication networks.",
                img: "https://images.unsplash.com/photo-1516937941348-c09e55483d5b?q=80&w=800",
              },
              {
                title: "Logistics",
                desc: "Revolutionizing logistics with automated warehousing solutions and real-time supply chain visibility.",
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
              },
              {
                title: "Healthcare",
                desc: "Protecting patient data with HIPAA-compliant security and digitizing electronic health records.",
                img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800",
              },
            ].map((ind, i) => (
              <div key={i} className="group flex flex-col gap-6">
                <div className="relative overflow-hidden rounded-md aspect-[4/3] w-full bg-gray-100">
                  <img
                    src={ind.img}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    alt={ind.title}
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-black mb-2 group-hover:text-td-yellow transition-colors">
                    {ind.title}
                  </h4>
                  <div className="w-12 h-[2px] bg-gray-200 mb-4 group-hover:w-full group-hover:bg-black transition-all duration-500"></div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section
        id="insights"
        className="py-24 bg-white container mx-auto px-6 md:px-20 reveal-up border-b border-gray-100"
      >
        <h2 className="text-xs font-bold text-black mb-16 uppercase tracking-widest flex items-center gap-3">
          <span class="w-8 h-[2px] bg-td-yellow"></span> 04 // Insights
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Client Voices</h3>
            <div className="relative h-[400px] overflow-hidden">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`testimonial-slide absolute inset-0 transition-opacity duration-1000 flex flex-col justify-start ${i === testimonialIndex ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-black mb-8">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${t.color}`}></div>
                    <div>
                      <p className="font-bold text-sm">{t.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Common Inquiries</h3>
            <div className="space-y-4">
              {[
                {
                  q: "Why hire IT consultants?",
                  a: "Passionate about your business but not about IT? Transdata-Solution's IT support and IT Solutions Company in Dubai specialists can help. With years of experience, we strategize and implement best-in-class IT systems to help you meet your objectives. In addition, we partner with you for dedicated IT consulting and support throughout the entire setup process.",
                },
                {
                  q: "Why Do I need IT consultancy?",
                  a: "Passionate about your business but not about IT? Transdata-Solutions' IT support specialists can help. In fact, with years of experience, we strategize and implement best-in-class IT systems to help you meet your objectives. Furthermore, we partner with you for dedicated IT consulting and support throughout the entire setup process.",
                },
                {
                  q: "What is your consultation process?",
                  a: "We encounter numerous challenges. As technology consultants, we offer services to organizations of all types. Our process involves Evaluation (discussions with stakeholders), Identification (technical survey analysis), and Implementation (scope presentation and execution).",
                },
                {
                  q: "How IT consulting firm operates?",
                  a: "Transdata operates by providing expert advice, guidance, and services related to information technology. We start with client needs assessment, followed by solution proposal, project planning, implementation, and ongoing monitoring and support.",
                },
                {
                  q: "How long do you need IT consulting services?",
                  a: "At Transdata-Solutions, we offer IT consulting services tailored to your needs. Whether you need assistance with a simple software installation or a complex IT networking project that takes over a year, our experts are here to help your business.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="accordion-item border-b border-black py-4"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleAccordion(i)}
                  >
                    <span className="text-lg font-bold">{faq.q}</span>
                    <span className="text-xl font-light">
                      {activeAccordion === i ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${activeAccordion === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="pt-4 text-gray-600 font-medium text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL HUB */}
      <section
        id="social-slider"
        className="bg-gray-50 py-24 overflow-hidden border-b border-gray-200"
      >
        <div className="container mx-auto px-6 md:px-20 mb-12 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
            Connect and <span className="text-td-yellow">follow us</span> on
            social media
          </h3>
        </div>

        <div className="relative container mx-auto px-6 md:px-20">
          <button
            onClick={() => slideSocial("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white text-gray-400 rounded-full shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-all z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => slideSocial("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white text-gray-400 rounded-full shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-all z-10"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={socialScrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory py-4"
          >
            {[
              {
                date: "November 25, 2024",
                text: "The world doesn’t need another security tool. It needs a smarter way to connect the ones that already exist. We are revolutionizing how enterprises handle data security...",
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
                likes: 40,
              },
              {
                date: "November 20, 2024",
                text: "Excited to showcase our latest innovations in Intelligent Mobility at GITEX Global this year. Visit our stand to see the future of urban transport...",
                img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600",
                likes: 128,
              },
              {
                date: "November 15, 2024",
                text: "We are expanding our Dubai team! Looking for Senior DevOps Engineers who are passionate about building scalable infrastructure. Apply now...",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
                likes: 76,
              },
              {
                date: "November 10, 2024",
                text: "At a time when cyber threats evolve faster than the systems meant to stop them, the banking sector's ability to stay resilient is paramount...",
                img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
                likes: 112,
              },
            ].map((post, i) => (
              <div
                key={i}
                className="flex-none w-[350px] bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden snap-center flex flex-col"
              >
                <div className="p-4 flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                      <img
                        src="/LOGO_1.png"
                        className="w-full h-full object-contain bg-black p-1"
                        alt="Logo"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="text-sm font-bold text-black">
                          TransData Solutions
                        </h4>
                        <CheckCircle2 size={12} className="text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <Linkedin
                    className="text-[#0077b5]"
                    size={24}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                </div>
                <div className="px-4 pb-2">
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                    {post.text}
                  </p>
                  <span className="text-xs font-bold text-gray-500 mt-1 cursor-pointer hover:underline">
                    Read more
                  </span>
                </div>
                <div className="mt-2 h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={post.img}
                    className="w-full h-full object-cover"
                    alt="Post"
                  />
                </div>
                <div className="p-3 border-t border-gray-100 flex justify-between text-gray-500 text-xs font-bold mt-auto">
                  <div className="flex items-center gap-1 hover:text-[#0077b5] cursor-pointer transition-colors">
                    <Heart size={16} /> {post.likes}
                  </div>
                  <div className="flex items-center gap-1 hover:text-[#0077b5] cursor-pointer transition-colors">
                    <MessageCircle size={16} /> Comment
                  </div>
                  <div className="flex items-center gap-1 hover:text-[#0077b5] cursor-pointer transition-colors">
                    <Share2 size={16} /> Share
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="bg-white py-24 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs font-bold text-black mb-6 uppercase tracking-widest flex items-center gap-3">
                <span class="w-8 h-[2px] bg-td-yellow"></span> 06 // Contact
              </h2>
              <h3 className="text-5xl font-black leading-tight mb-8 text-black">
                Start a<br />
                Conversation.
              </h3>
              <p className="text-gray-600 font-medium mb-12 max-w-md leading-relaxed">
                Interested in our solutions? Fill out the form or reach out to
                us directly. We are ready to build the future with you.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@transdata-solutions.com"
                    className="text-xl font-bold text-black hover:text-td-yellow transition-colors"
                  >
                    info@transdata-solutions.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+97143807338"
                    className="text-xl font-bold text-black hover:text-td-yellow transition-colors"
                  >
                    + 971 4 380 7338
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-sm border border-gray-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-gray-500">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-bold focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-gray-500">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-bold focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                      placeholder="Organization Inc."
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-bold focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="group">
                  <label className="text-xs font-bold uppercase tracking-widest mb-2 block text-gray-500">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    className="w-full bg-transparent border-b border-gray-300 py-3 text-black font-bold focus:outline-none focus:border-black transition-colors placeholder-gray-400"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-black text-white text-sm font-bold uppercase tracking-widest py-4 hover:bg-td-yellow hover:text-black transition-colors rounded-sm"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        id="location"
        className="bg-white py-24 border-t border-gray-200"
      >
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs font-bold text-black mb-6 uppercase tracking-widest flex items-center gap-3">
                <span class="w-8 h-[2px] bg-td-yellow"></span> 07 // Visit Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8">
                Our
                <br />
                Headquarters
              </h3>
              <p className="text-xl font-medium text-gray-800 mb-6 max-w-sm">
                Office No. F- 107
                <br />
                Mohammed Ahmed Al Wajdi Building,
                <br />
                Khalid Bin Waleed Street,
                <br />
                Dubai, UAE
              </p>
              <div className="flex gap-4">
                <a
                  href="https://maps.google.com/?q=Mohammed+Ahmed+Al+Wajdi+Building,+Khalid+Bin+Waleed+Street,+Dubai,+UAE"
                  target="_blank"
                  className="bg-black text-white text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-td-yellow hover:text-black transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="h-[400px] w-full rounded-sm overflow-hidden shadow-lg border border-gray-200 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Mohammed%20Ahmed%20Al%20Wajdi%20Building%2C%20Khalid%20Bin%20Waleed%20Street%2C%20Dubai%2C%20UAE&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
