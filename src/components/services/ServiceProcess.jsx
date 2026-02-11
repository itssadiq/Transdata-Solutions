import React from "react";

const ServiceProcess = ({ steps, title = "Our Proven Methodology" }) => {
  if (!steps) return null;

  return (
    <section className="py-24 bg-td-black text-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-16">
          <h2 className="text-xs font-bold text-td-yellow mb-4 uppercase tracking-widest">
            Process
          </h2>
          <h3 className="text-4xl font-bold">{title}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="w-12 h-12 bg-td-yellow text-black font-bold flex items-center justify-center rounded-sm mb-6">
                {step.num}
              </div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
