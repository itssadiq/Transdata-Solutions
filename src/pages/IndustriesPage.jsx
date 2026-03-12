import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Import Data
import { industriesData } from "../data/industriesData";

gsap.registerPlugin(ScrollTrigger);

const IndustriesPage = () => {
  const pageRef = useRef(null);
  const { header, industries, cta } = industriesData;

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Animation
      gsap.from(".hero-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      // 2. Industry Sections Animation
      const sections = gsap.utils.toArray(".industry-section");
      sections.forEach((section) => {
        // Animate Image
        gsap.fromTo(
          section.querySelector(".industry-img"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          },
        );

        // Animate Text
        gsap.fromTo(
          section.querySelector(".industry-text"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.2, // Text comes slightly after image
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          },
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Smooth Scroll to Section Handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={pageRef} className="bg-white min-h-screen font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen flex items-center bg-black text-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={
              header.bgImage ||
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            }
            alt="Industries Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full hero-content">
          <div className="w-20 h-1 bg-td-yellow mb-8"></div>
          <h1 className="text-4xl md:text-4xl font-black mb-6 leading-tight max-w-4xl tracking-tight">
            {header.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
            {header.description}
          </p>
        </div>
      </section>

      {/* ================= QUICK NAV BAR (Sticky) ================= */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 py-4 hidden md:block">
        <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-8 whitespace-nowrap">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => scrollToSection(ind.id)}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black hover:text-td-yellow transition-colors"
              >
                {ind.title.replace(" Industry", "")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= INDUSTRY LIST (Alternating Layout) ================= */}
      <div className="w-full overflow-hidden">
        {industries.map((industry, index) => {
          // Determine layout direction (Even = Text Left, Odd = Text Right)
          const isEven = index % 2 === 0;

          return (
            <section
              key={industry.id}
              id={industry.id}
              className={`industry-section py-20 md:py-32 border-b border-gray-100 ${isEven ? "bg-white" : "bg-[#f9fafb]"}`}
            >
              <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div
                  className={`flex flex-col lg:flex-row gap-16 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* TEXT CONTENT SIDE */}
                  <div className="w-full lg:w-1/2 industry-text">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-black text-gray-200 select-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="h-[1px] flex-1 bg-gray-200"></div>
                      <span className="text-xs font-bold uppercase tracking-widest text-td-yellow">
                        Sector
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-black mb-8 leading-tight">
                      {industry.title}
                    </h2>

                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                      {industry.content.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* IMAGE SIDE */}
                  <div className="w-full lg:w-1/2 industry-img">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200 shadow-xl group">
                      {/* Image */}
                      <img
                        src={
                          industry.image ||
                          "https://placehold.co/800x600?text=Industry+Image"
                        } // Fallback
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Decorative Border Frame */}
                      <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none"></div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ================= CTA FOOTER ================= */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
            {cta.title}
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            {cta.description}
          </p>

          <Link
            to={cta.link}
            className="inline-flex items-center gap-4 bg-td-yellow text-black px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white transition-all duration-300 group"
          >
            {cta.buttonText}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
