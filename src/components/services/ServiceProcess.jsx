import React from "react";

const ServiceProcess = ({
  steps,
  title = "Our Proven Methodology",
  subtitle,
}) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 bg-td-black text-white overflow-hidden">
      {/* Container updated to match site-wide hierarchy */}
      <div className="container mx-auto px-6 md:px-20">
        {/* Header - Updated to match 2-column OurStory format */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 reveal-up">
          <div>
            <h2 className="text-xs font-bold text-td-yellow mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-0.5 bg-td-yellow"></span> Lifecycle
            </h2>
            <h3 className="text-4xl font-bold leading-tight">{title}</h3>
          </div>
          <div className="flex items-end">
            {subtitle && (
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Dynamic Grid - Handles 4, 6, or 8 steps automatically */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Large Aesthetic Background Number */}
              <div className="absolute -top-8 -left-2 text-8xl font-black text-white/[0.03] select-none group-hover:text-td-yellow/[0.05] transition-colors duration-500">
                {step.num}
              </div>

              {/* Step Number Badge */}
              <div className="relative z-10 w-14 h-14 bg-td-yellow text-black font-black text-xl flex items-center justify-center rounded-sm mb-8 border-2 border-td-yellow group-hover:bg-transparent group-hover:text-td-yellow transition-all duration-300">
                {step.num}
              </div>

              {/* Step Content */}
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 group-hover:text-td-yellow transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
