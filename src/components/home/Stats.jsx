import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-line", {
        x: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const statsData = [
    {
      highlight: "13+ Years",
      text: "in the IT Industry",
    },
    {
      highlight: "Mission-Critical",
      text: "Infrastructure Management",
    },
    {
      highlight: "Security-First",
      text: "Cybersecurity Approach",
    },
    {
      highlight: "High-Availability",
      text: "Enterprise IT Systems",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-24 border-y border-gray-100"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Using a flex layout that allows items to expand naturally */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-8 lg:gap-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="stat-line flex items-center gap-6 group w-full lg:w-auto"
            >
              {/* Vertical Accent Line (The "Professional" Touch) */}
              <div className="h-12 w-[2px] bg-td-yellow hidden md:block"></div>

              <div className="flex flex-col">
                {/* 1. Highlight - Using whitespace-nowrap to force one line */}
                <h4 className="text-2xl md:text-3xl font-black text-black tracking-tighter whitespace-nowrap uppercase">
                  {stat.highlight}
                </h4>

                {/* 2. Text - Simple, clean, and no max-width */}
                <p className="text-gray-500 text-sm md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  {stat.text}
                </p>
              </div>

              {/* Decorative Divider for Desktop (Except last item) */}
              {index !== statsData.length - 1 && (
                <div className="ml-auto hidden xl:block w-px h-4 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
