import React from "react";
import { Check } from "lucide-react";

const ServiceInfoSection = ({ title, content, listTitle, items, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`py-20 ${isEven ? "bg-white" : "bg-gray-50"} border-b border-gray-100`}
    >
      <div className="container mx-auto px-6 md:px-20">
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16`}
        >
          <div className="lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
              {title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {content}
            </p>
          </div>
          <div className="lg:w-1/2 bg-white p-8 md:p-10 border border-gray-200 shadow-sm rounded-sm">
            <h4 className="text-td-yellow font-bold uppercase tracking-widest text-sm mb-6">
              {listTitle}
            </h4>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-td-yellow mt-1 shrink-0" />
                  <span className="text-black font-medium text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfoSection;
