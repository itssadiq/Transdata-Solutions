import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";

const DesktopMenu = ({ scrolled, solutionsData, linkClass }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("managed-it");
  const location = useLocation();

  const activeCategoryData = solutionsData.find((c) => c.id === activeCategory);

  // Prevent main page scroll when mega menu is open
  useEffect(() => {
    if (isServicesOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isServicesOpen]);

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
            `font-bold text-[0.75rem] uppercase tracking-widest transition-all duration-500 hover:text-td-yellow flex items-center gap-1 cursor-pointer ${
              scrolled ? "py-2" : "py-4"
            } ${
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

        {/* MEGA DROPDOWN PANEL - Increased to 1200px and removed scrolls */}
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 w-[1200px] bg-white shadow-2xl border-t-4 border-td-yellow transition-all duration-300 origin-top flex rounded-b-sm ${
            isServicesOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-95 invisible pointer-events-none"
          }`}
        >
          {/* LEFT SIDEBAR - Content driven height */}
          <div className="w-[20%] bg-gray-50 border-r border-gray-100 py-6">
            {solutionsData.map((cat) => (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                className={`px-8 py-4 cursor-pointer text-[13px] font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "text-black bg-white shadow-sm"
                    : "text-gray-400 hover:text-black"
                }`}
              >
                {cat.title}
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT - 3 Column Grid */}
          <div className="w-[80%] p-10 bg-white">
            <div
              key={activeCategory}
              className="grid grid-cols-3 gap-5 animate-pulse-once"
            >
              {activeCategoryData?.items.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.link}
                  className="group block rounded-sm overflow-hidden border border-gray-100 hover:border-td-yellow hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {/* Image Area - Slightly smaller to fit 3 in a row */}
                  <div className="h-28 w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  </div>

                  {/* Text Area */}
                  <div className="p-3 flex justify-between items-center bg-white">
                    <p className="font-bold text-[12px] text-gray-700 group-hover:text-black transition-colors leading-tight">
                      {item.name}
                    </p>
                    <ArrowRight
                      size={14}
                      className="text-gray-300 group-hover:text-td-yellow transition-all duration-300 group-hover:translate-x-1 shrink-0"
                    />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
      <NavLink to="/contact" className={linkClass}>
        Contact
      </NavLink>
    </div>
  );
};

export default DesktopMenu;
