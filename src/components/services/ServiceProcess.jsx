import React from "react";

const ServiceProcess = ({
  steps,
  title = "Our Proven Methodology",
  subtitle,
}) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-td-black text-white overflow-hidden">
      {/* Container updated for 1400px symmetry */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-td-yellow mb-4 uppercase tracking-[0.3em] flex items-center gap-3">
            Lifecycle
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
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
