import React from "react";

const Industries = () => {
  return (
    <section
      id="industries"
      className="bg-white py-24 border-t border-gray-100"
    >
      <div className="container mx-auto px-6 md:px-20 mb-20">
        <h2 className="text-xs font-bold text-td-yellow mb-6 uppercase tracking-widest flex items-center gap-3">
          <span className="w-8 h-0.5 bg-black"></span> 03 // Sectors
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <h3 className="text-5xl md:text-6xl font-black text-black leading-tight">
            Industries
            <br />
            We Empower
          </h3>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed mb-2">
            Leveraging deep domain expertise to engineer solutions that address
            the specific challenges of your sector.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Education",
              desc: "Secure digital learning environments and campus-wide high-speed infrastructure for modern universities.",
              img: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Retail",
              desc: "Integrated POS systems, real-time inventory tracking, and data-driven customer loyalty analytics.",
              img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
            },
            {
              title: "Restaurants",
              desc: "Streamlining operations with smart kitchen display systems and robust reservation management platforms.",
              img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
            },
            {
              title: "Oil & Gas",
              desc: "Ensuring safety and efficiency with remote monitoring IoT sensors and ruggedized communication networks.",
              img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              title: "Logistics",
              desc: "Revolutionizing logistics with automated warehousing solutions and real-time supply chain visibility.",
              img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
            },
            {
              title: "Healthcare",
              desc: "Protecting patient data with HIPAA-compliant security and digitizing electronic health records.",
              img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800",
            },
          ].map((ind, i) => (
            <div key={i} className="group flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-md aspect-4/3 w-full bg-gray-100">
                <img
                  src={ind.img}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  alt={ind.title}
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-black mb-2 group-hover:text-td-yellow transition-colors">
                  {ind.title}
                </h4>
                <div className="w-12 h-0.5 bg-gray-200 mb-4 group-hover:w-full group-hover:bg-black transition-all duration-500"></div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
