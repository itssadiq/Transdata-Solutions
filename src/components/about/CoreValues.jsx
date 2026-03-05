import React from "react";
import { Handshake, Lightbulb, ShieldCheck } from "lucide-react";

const CoreValues = () => {
  return (
    <section className="py-24 bg-black border-b border-white/10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="mb-16 reveal-up">
          {/* Label text changed to brand yellow */}
          <h2 className="text-xs font-bold text-td-yellow mb-6 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-0.5 bg-td-yellow"></span> Core Values
          </h2>
          {/* Main heading changed to white */}
          <h3 className="text-4xl font-bold text-white">
            The Pillars of Our Success
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group p-8 border border-white/10 hover:border-td-yellow hover:shadow-lg transition-all duration-300 rounded-sm bg-white/5 reveal-up">
            <Handshake
              size={40}
              className="text-td-yellow mb-6 transition-colors"
            />
            <h4 className="text-xl font-bold mb-3 text-white">
              Client-Centricity
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              We don't just sell products; we build relationships. Every
              solution is configured to meet your specific budget and goals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 border border-white/10 hover:border-td-yellow hover:shadow-lg transition-all duration-300 rounded-sm bg-white/5 reveal-up">
            <Lightbulb
              size={40}
              className="text-td-yellow mb-6 transition-colors"
            />
            <h4 className="text-xl font-bold mb-3 text-white">Innovation</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              We stay ahead of the curve, constantly exploring emerging
              technologies like AI, IoT, and Blockchain to give you a
              competitive edge.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 border border-white/10 hover:border-td-yellow hover:shadow-lg transition-all duration-300 rounded-sm bg-white/5 reveal-up">
            <ShieldCheck
              size={40}
              className="text-td-yellow mb-6 transition-colors"
            />
            <h4 className="text-xl font-bold mb-3 text-white">Integrity</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Transparency is key. From consultation to implementation, we
              ensure clear communication and honest pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
