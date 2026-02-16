import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Industries = () => {
  const [showAll, setShowAll] = useState(false);

  const industriesList = [
    {
      title: "Hospitality",
      desc: "Guest Wi-Fi, property management systems, and secure hotel infrastructure.",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    },
    {
      title: "Aviation",
      desc: "Mission-critical communication networks and secure ground data transmission.",
      img: "https://images.pexels.com/photos/36095512/pexels-photo-36095512.jpeg",
    },
    {
      title: "Insurance",
      desc: "Robust security frameworks and cloud-based document management systems.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
    },
    {
      title: "Restaurants",
      desc: "Smart POS systems, kitchen displays, and cloud inventory management.",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
    },
    {
      title: "Construction",
      desc: "Remote site connectivity, BIM infrastructure, and rugged networking.",
      img: "https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg",
    },
    {
      title: "Banking",
      desc: "Enterprise-grade security, redundant data centers, and zero-trust architectures.",
      img: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=800",
    },
    {
      title: "Retail",
      desc: "Omnichannel tracking, secure gateways, and high-availability retail networks.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
    },
    {
      title: "Healthcare",
      desc: "HIPAA-compliant protection and electronic records digitization.",
      img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800",
    },
    {
      title: "Real Estate",
      desc: "Smart building automation and secure virtual tour infrastructure.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
    },
    {
      title: "Oil & Gas",
      desc: "IoT sensors and rugged communication systems for harsh environments.",
      img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800",
    },
    {
      title: "Logistics",
      desc: "Real-time supply chain visibility and automated warehousing systems.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
    },
    {
      title: "Education",
      desc: "Campus-wide high-speed Wi-Fi and digital collaboration tools.",
      img: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=800",
    },
  ];

  return (
    <section
      id="industries"
      className="bg-white py-20 md:py-24 border-t border-gray-100"
    >
      {/* 1. Main Site Wrapper (Locked to 1400px Symmetry) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-xs font-bold text-td-yellow mb-4 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-0.5 bg-td-yellow"></span> // Sectors
          </h2>
          <div className="max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-tight">
              Experience Across <br className="hidden md:block" /> Multiple
              Industries
            </h3>
            <p className="text-black/70 text-lg md:text-lg font-medium leading-relaxed max-w-3xl">
              Over the years, we’ve worked with organizations across
              construction, hospitality, healthcare, and other industries. Each
              sector has different operational and IT challenges, and our
              experience helps us understand what actually works on the
              ground—not just in theory.
            </p>
          </div>
        </div>

        {/* 2. Industry Grid (4 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {industriesList.map((ind, i) => (
            <div
              key={i}
              className={`group flex flex-col gap-5 transition-all duration-500 ${
                i >= 6 && !showAll ? "hidden md:flex" : "flex"
              }`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-md aspect-[4/3] w-full bg-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-500">
                <img
                  src={ind.img}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  alt={ind.title}
                />
              </div>

              {/* Text Content */}
              <div>
                <h4 className="text-xl font-bold text-black mb-2 group-hover:text-td-yellow transition-colors">
                  {ind.title}
                </h4>
                <div className="w-10 h-0.5 bg-gray-200 mb-3 group-hover:w-full group-hover:bg-black transition-all duration-500"></div>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. See More Button (Only visible on mobile phones) */}
        <div className="mt-12 md:hidden flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-td-yellow hover:text-black transition-all duration-300 rounded-sm"
          >
            {showAll ? "Show Less" : "See More Industries"}
            {showAll ? <Minus size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
