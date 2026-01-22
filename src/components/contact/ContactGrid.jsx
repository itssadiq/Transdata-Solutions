import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactGrid = () => {
  return (
    <section className="contact-grid py-24 container mx-auto px-6 md:px-20">
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

        {/* RIGHT: Contact Form */}
        <div className="lg:col-span-7 bg-gray-50 p-10 md:p-14 rounded-sm border border-gray-100 contact-card">
          <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <input
                  type="text"
                  id="name"
                  required
                  className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-black font-bold focus:outline-none focus:border-td-yellow transition-colors placeholder-transparent"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-td-yellow font-mono uppercase tracking-wider"
                >
                  Name
                </label>
              </div>
              <div className="group relative">
                <input
                  type="text"
                  id="company"
                  className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-black font-bold focus:outline-none focus:border-td-yellow transition-colors placeholder-transparent"
                  placeholder="Company"
                />
                <label
                  htmlFor="company"
                  className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-td-yellow font-mono uppercase tracking-wider"
                >
                  Company
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <input
                  type="email"
                  id="email"
                  required
                  className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-black font-bold focus:outline-none focus:border-td-yellow transition-colors placeholder-transparent"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-td-yellow font-mono uppercase tracking-wider"
                >
                  Email
                </label>
              </div>
              <div className="group relative">
                <input
                  type="tel"
                  id="phone"
                  className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-black font-bold focus:outline-none focus:border-td-yellow transition-colors placeholder-transparent"
                  placeholder="Phone"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-td-yellow font-mono uppercase tracking-wider"
                >
                  Phone
                </label>
              </div>
            </div>

            <div className="group relative">
              <textarea
                id="message"
                rows="4"
                required
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-black font-bold focus:outline-none focus:border-td-yellow transition-colors placeholder-transparent resize-none"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-td-yellow font-mono uppercase tracking-wider"
              >
                Message
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="group flex items-center gap-4 bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-td-yellow hover:text-black transition-all duration-300"
              >
                Send Message
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactGrid;
