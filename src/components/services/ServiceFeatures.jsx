import React from "react";
import { Layers } from "lucide-react";

const ServiceFeatures = ({ features }) => {
  if (!features) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-black mb-4 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-8 h-[2px] bg-td-yellow"></span> 01 //
            Capabilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-black">
            What We Deliver
          </h3>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-td-yellow hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-sm mb-8 group-hover:bg-td-yellow group-hover:text-black transition-colors duration-300">
                <Layers size={28} />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-black group-hover:text-td-yellow transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-base leading-relaxed">
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
