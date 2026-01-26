import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCTA = () => {
  return (
    <section className="py-24 bg-td-yellow">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-4xl font-black text-black mb-2">
            Ready to Upgrade?
          </h3>
          <p className="text-black/80 font-medium">
            Let's build a solution tailored to your specific needs.
          </p>
        </div>
        <Link
          to="/contact"
          className="group bg-black text-white px-8 py-4 font-bold uppercase tracking-widest flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          Get in Touch{" "}
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default ServiceCTA;
