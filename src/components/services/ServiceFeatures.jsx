import React from "react";
import { Layers } from "lucide-react";

const ServiceFeatures = ({ features }) => {
  // Prevent rendering if no feature data is passed
  if (!features || features.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      {/* Container updated to match site-wide hierarchy */}
      <div className="container mx-auto px-6 md:px-20">
        {/* Header - Updated to match 2-column OurStory format */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 reveal-up">
          <div>
            <h2 className="text-xs font-bold text-black mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-0.5 bg-td-yellow"></span> 01 //
              Capabilities
            </h2>
            <h3 className="text-4xl font-bold leading-tight">
              What We Deliver
            </h3>
          </div>
          <div className="flex items-end">
            <p className="text-gray-600 leading-relaxed font-medium">
              We provide end-to-end IT solutions designed to optimize your
              infrastructure, strengthen security, and ensure your business
              operations remain uninterrupted and scalable.
            </p>
          </div>
        </div>

        {/* Feature Grid - Responsive 1, 2, or 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 border border-gray-100 bg-gray-50/30 hover:bg-white hover:border-td-yellow hover:shadow-xl transition-all duration-500 rounded-sm"
            >
              {/* Feature Icon Container */}
              <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-sm mb-8 group-hover:bg-td-yellow group-hover:text-black transition-colors duration-300">
                <Layers size={28} />
              </div>

              {/* Feature Title */}
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-black group-hover:text-td-yellow transition-colors">
                {feature.title}
              </h4>

              {/* Feature Description */}
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
