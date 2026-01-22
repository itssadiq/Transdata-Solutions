import React from "react";

const Location = () => {
  return (
    <section id="location" className="bg-white py-24 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs font-bold text-black mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-0.5 bg-td-yellow"></span> 07 // Visit Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-black leading-tight mb-8">
              Our
              <br />
              Headquarters
            </h3>
            <p className="text-xl font-medium text-gray-800 mb-6 max-w-sm">
              Office No. F- 107
              <br />
              Mohammed Ahmed Al Wajdi Building,
              <br />
              Khalid Bin Waleed Street,
              <br />
              Dubai, UAE
            </p>
            <div className="flex gap-4">
              <a
                href="https://maps.google.com/?q=Mohammed+Ahmed+Al+Wajdi+Building,+Khalid+Bin+Waleed+Street,+Dubai,+UAE"
                target="_blank"
                className="bg-black text-white text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-td-yellow hover:text-black transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="h-100 w-full rounded-sm overflow-hidden shadow-lg border border-gray-200 grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Mohammed%20Ahmed%20Al%20Wajdi%20Building%2C%20Khalid%20Bin%20Waleed%20Street%2C%20Dubai%2C%20UAE&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
