import React from "react";

const Partners = () => {
  return (
    <section
      id="partner-marquee"
      className="container mx-auto px-6 md:px-20 bg-white border-b border-gray-100 overflow-hidden"
    >
      <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">
        Trusted by Global Leaders
      </p>
      <div className="flex overflow-hidden">
        {/* Loop 1 */}
        <div className="flex shrink-0 items-center gap-24 px-10 animate-marquee min-w-full justify-around gpu-accelerate">
          {[
            "Microsoft",
            "Amazon_Web_Services",
            "IBM",
            "Cisco",
            "Oracle",
            "SAP",
            "Lenovo",
          ].map((brand, i) => (
            <img
              key={i}
              src={`https://upload.wikimedia.org/wikipedia/commons/${
                brand === "Microsoft"
                  ? "9/96/Microsoft_logo_%282012%29"
                  : brand === "Amazon_Web_Services"
                    ? "9/93/Amazon_Web_Services_Logo"
                    : brand === "IBM"
                      ? "5/51/IBM_logo"
                      : brand === "Cisco"
                        ? "0/08/Cisco_logo_blue_2016"
                        : brand === "Oracle"
                          ? "5/50/Oracle_logo"
                          : brand === "SAP"
                            ? "5/59/SAP_2011_logo"
                            : brand === "Intel"
                              ? "c/c9/Intel-logo"
                              : "b/b8/Lenovo_logo_2015"
              }.svg`}
              loading="lazy"
              className={`h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${brand === "Lenovo" || brand === "Oracle" ? "h-6" : ""}`}
              alt={brand}
            />
          ))}
        </div>
        {/* Loop 2 */}
        <div className="flex shrink-0 items-center gap-24 px-10 animate-marquee min-w-full justify-around gpu-accelerate">
          {[
            "Microsoft",
            "Amazon_Web_Services",
            "IBM",
            "Cisco",
            "Oracle",
            "SAP",

            "Lenovo",
          ].map((brand, i) => (
            <img
              key={i}
              src={`https://upload.wikimedia.org/wikipedia/commons/${
                brand === "Microsoft"
                  ? "9/96/Microsoft_logo_%282012%29"
                  : brand === "Amazon_Web_Services"
                    ? "9/93/Amazon_Web_Services_Logo"
                    : brand === "IBM"
                      ? "5/51/IBM_logo"
                      : brand === "Cisco"
                        ? "0/08/Cisco_logo_blue_2016"
                        : brand === "Oracle"
                          ? "5/50/Oracle_logo"
                          : brand === "SAP"
                            ? "5/59/SAP_2011_logo"
                            : "b/b8/Lenovo_logo_2015"
              }.svg`}
              loading="lazy"
              className={`h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${brand === "Lenovo" || brand === "Oracle" ? "h-6" : ""}`}
              alt={brand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
