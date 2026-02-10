import React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./Form";

const ContactGrid = () => {
  return (
    <section
      className="contact-grid py-24 container mx-auto px-6 md:px-20"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT: Contact Information */}
        <div className="lg:col-span-5 space-y-12">
          {/* Info Card 1 */}
          <div className="contact-card group border-b border-gray-200 pb-8 hover:border-black transition-colors duration-500">
            <div className="flex items-center gap-4 mb-4 text-gray-400 group-hover:text-td-yellow transition-colors">
              <Mail size={24} />
              <span className="font-mono text-xs uppercase tracking-widest text-black">
                Email Us
              </span>
            </div>
            <a
              href="mailto:info@transdata-solutions.com"
              className="text-2xl md:text-3xl font-bold text-black hover:opacity-70 transition-opacity"
            >
              info@transdata-solutions.com
            </a>
          </div>

          {/* Info Card 2 */}
          <div className="contact-card group border-b border-gray-200 pb-8 hover:border-black transition-colors duration-500">
            <div className="flex items-center gap-4 mb-4 text-gray-400 group-hover:text-td-yellow transition-colors">
              <Phone size={24} />
              <span className="font-mono text-xs uppercase tracking-widest text-black">
                Call Us
              </span>
            </div>
            <a
              href="tel:+97143807338"
              className="text-2xl md:text-3xl font-bold text-black hover:opacity-70 transition-opacity"
            >
              + 971 4 380 7338
            </a>
          </div>

          {/* Info Card 3 */}
          <div className="contact-card group border-b border-gray-200 pb-8 hover:border-black transition-colors duration-500">
            <div className="flex items-center gap-4 mb-4 text-gray-400 group-hover:text-td-yellow transition-colors">
              <Clock size={24} />
              <span className="font-mono text-xs uppercase tracking-widest text-black">
                Working Hours
              </span>
            </div>
            <p className="text-xl font-bold text-black">
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Saturday - Sunday: Closed
            </p>
          </div>

          {/* Location Text */}
          <div className="contact-card pt-4">
            <div className="flex items-center gap-4 mb-4 text-td-yellow">
              <MapPin size={24} />
              <span className="font-mono text-xs uppercase tracking-widest text-black">
                Headquarters
              </span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Office No. F- 107
              <br />
              Mohammed Ahmed Al Wajdi Building,
              <br />
              Khalid Bin Waleed Street,
              <br />
              Dubai, UAE
            </p>
          </div>
        </div>

        {/* RIGHT: Reusable Contact Form */}
        <div className="lg:col-span-7 contact-card">
          <ContactForm title="Send us a message" />
        </div>
      </div>
    </section>
  );
};

export default ContactGrid;
