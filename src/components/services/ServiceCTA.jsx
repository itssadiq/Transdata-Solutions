import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCTA = () => {
  return (
    <section className="py-20 bg-td-yellow">
      <div className="container mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="text-center lg:text-left">
          <h3 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Ready to Upgrade Your <br className="hidden md:block" />{" "}
            Infrastructure?
          </h3>
          <p className="text-black/80 font-bold text-lg md:text-xl max-w-2xl">
            Partner with Transdata Solutions for secure, scalable, and
            high-performance IT environments.
          </p>
        </div>

        <Link
          to="/contact"
          className="group bg-black text-white px-10 py-5 font-bold uppercase tracking-widest flex items-center gap-4 hover:bg-white hover:text-black transition-all duration-300 shadow-2xl"
        >
          Start a Consultation
          <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default ServiceCTA;
