import React from "react";
import { Search, PenTool, Cpu, Activity, GraduationCap } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "Discover & Understand",
      items: [
        "Dive deep into your business needs and challenges",
        "Map existing IT systems and uncover gaps",
      ],
    },
    {
      icon: <PenTool size={28} />,
      title: "Strategize & Architect",
      items: [
        "Craft a tailored IT roadmap",
        "Design scalable, secure, and future-ready infrastructure",
      ],
    },
    {
      icon: <Cpu size={28} />,
      title: "Bring to Life",
      items: [
        "Deploy solutions that actually work in your environment",
        "Hardware, software, networks — all synchronized",
      ],
    },
    {
      icon: <Activity size={28} />,
      title: "Validate & Perfect",
      items: [
        "Test systems rigorously, optimize performance",
        "Ensure zero surprises and peak uptime",
      ],
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Empower & Elevate",
      items: [
        "Handover with training, support, and guidance",
        "Enable IT teams and business users to thrive",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header - Styled like Services/Industries */}
        <div className="mb-20 reveal-up">
          <h2 className="text-xs font-bold text-black mb-4 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-0.5 bg-td-yellow"></span> 02 // Our Approach
          </h2>
          <div className="max-w-4xl">
            <h3 className="text-3xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
              From Insight to Impact
            </h3>
            <p className="text-black/70 text-lg md:text-xl font-medium leading-relaxed">
              We turn IT challenges into seamless solutions — every step,
              guided, optimized, and delivered.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group reveal-up">
              {/* Step Number Background */}
              <div className="absolute -top-6 -left-2 text-7xl font-black text-black/[0.03] select-none">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-sm flex items-center justify-center mb-6 text-td-yellow group-hover:bg-td-yellow group-hover:text-black transition-all duration-300 relative z-10">
                {step.icon}
              </div>

              {/* Content */}
              <h4 className="text-lg font-bold mb-4 text-black">
                {step.title}
              </h4>
              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-500 leading-relaxed flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-td-yellow shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Connecting Line (Desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[80%] w-full h-[1px] bg-gray-200 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
