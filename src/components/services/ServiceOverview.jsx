import React from "react";
import { CheckCircle2 } from "lucide-react";

const ServiceOverview = ({ text, benefits }) => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl font-bold mb-6 text-black">
            The Foundation of Success
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">{text}</p>
        </div>
        <div className="bg-gray-50 p-10 rounded-sm border border-gray-200">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">
            Key Benefits
          </h4>
          <ul className="space-y-4">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-td-yellow mt-1 shrink-0"
                  size={20}
                />
                <span className="text-black font-bold text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
