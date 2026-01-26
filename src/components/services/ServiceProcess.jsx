import React from "react";

const ServiceProcess = () => {
  const steps = [
    { num: "01", title: "Audit", desc: "We analyze your current setup." },
    { num: "02", title: "Strategy", desc: "We design a tailored roadmap." },
    { num: "03", title: "Deploy", desc: "Seamless implementation." },
    {
      num: "04",
      title: "Optimize",
      desc: "Continuous monitoring & improvement.",
    },
  ];

  return (
    <section className="py-24 bg-td-black text-white">
      <div className="container mx-auto px-6 md:px-20">
        <h3 className="text-3xl font-bold mb-16 text-center">
          Our Methodology
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector Line (Desktop only) */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-[1px] bg-white/20"></div>
              )}

              <div className="relative z-10 w-12 h-12 bg-td-yellow text-black font-bold flex items-center justify-center rounded-full mb-6 mx-auto border-4 border-td-black">
                {step.num}
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
