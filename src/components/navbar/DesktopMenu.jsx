import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";

const DesktopMenu = ({ scrolled, solutionsData, linkClass }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Updated default state to match new ID structure
  const [activeCategory, setActiveCategory] = useState("managed-it");
  const location = useLocation();

  const activeCategoryData = solutionsData.find((c) => c.id === activeCategory);

  return (
    <div
      className="hidden md:flex items-center gap-8 h-full"
      onMouseLeave={() => setIsServicesOpen(false)}
    >
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>

      {/* SOLUTIONS MEGA MENU */}
      <div
        className="relative h-full flex items-center"
        onMouseEnter={() => setIsServicesOpen(true)}
      >
        <NavLink
          to="/solutions"
          className={({ isActive }) =>
            `font-bold text-[0.75rem] uppercase tracking-widest transition-colors duration-300 hover:text-td-yellow flex items-center gap-1 cursor-pointer py-4 ${
              isActive || location.pathname.includes("/services")
                ? "text-td-yellow"
                : scrolled
                  ? "text-black"
                  : "text-white"
            }`
          }
          onClick={() => setIsServicesOpen(false)}
        >
          Solutions <ChevronDown size={12} />
        </NavLink>

        {/* MEGA DROPDOWN PANEL */}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 w-[900px] max-h-[85vh] bg-white shadow-2xl border-t-4 border-td-yellow transition-all duration-300 origin-top overflow-hidden rounded-b-sm flex ${
            isServicesOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-95 invisible"
          }`}
        >
          {/* LEFT SIDEBAR (Scrollable Categories) */}
          <div className="w-1/4 bg-gray-50 border-r border-gray-200 py-4 overflow-y-auto custom-scrollbar">
            {solutionsData.map((cat) => (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                className={`px-6 py-4 cursor-pointer text-sm font-bold flex justify-between items-center transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "text-black bg-white border-l-4 border-td-yellow shadow-sm"
                    : "text-gray-500 hover:text-black border-l-4 border-transparent"
                }`}
              >
                {cat.title}
                {activeCategory === cat.id && (
                  <ArrowRight size={14} className="text-td-yellow" />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT (Scrollable Items) */}
          <div className="w-3/4 p-8 bg-white overflow-y-auto custom-scrollbar">
            <h4 className="text-2xl font-bold mb-6 text-black border-b border-gray-100 pb-4 sticky top-0 bg-white z-10">
              {activeCategoryData?.title}
            </h4>

            {/* Grid Container */}
            <div
              key={activeCategory}
              className="grid grid-cols-2 gap-6 pb-10 animate-pulse-once"
            >
              {activeCategoryData?.items.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.link}
                  className="group block rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {/* Image Area */}
                  <div className="h-32 w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

                  {/* Text Area */}
                  <div className="p-4 flex justify-between items-center bg-white">
                    <p className="font-bold text-sm text-gray-700 group-hover:text-black transition-colors">
                      {item.name}
                    </p>
                    <ArrowRight
                      size={16}
                      className="text-gray-300 group-hover:text-td-yellow transition-all duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavLink to="/about" className={linkClass}>
        About Us
      </NavLink>
    </div>
  );
};

export default DesktopMenu;
