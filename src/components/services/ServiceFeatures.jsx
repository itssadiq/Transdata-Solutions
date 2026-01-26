import React from "react";
import { Box, Layers, Shield } from "lucide-react"; // Example icons

const ServiceFeatures = ({ features }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-16">
          <h2 className="text-xs font-bold text-black mb-4 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-[2px] bg-td-yellow"></span> Capabilities
          </h2>
          <h3 className="text-4xl font-bold">What We Deliver</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-200 hover:border-black transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-6 group-hover:bg-td-yellow group-hover:text-black transition-colors">
                <Layers size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
