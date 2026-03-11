import React from "react";
import { ArrowRight } from "lucide-react";

const ContactForm = ({ title = "Send us a message" }) => {
  return (
    <div className="bg-[#fcfcfc] p-8 md:p-12 border border-gray-100 rounded-sm shadow-sm">
      <h3 className="text-xl font-bold mb-10 text-black uppercase tracking-tight flex items-center gap-3">
        {title}
      </h3>

      <form className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Name */}
          <div className="relative group">
            <input
              type="text"
              id="name"
              required
              className="peer w-full bg-transparent border-b border-gray-200 py-3 text-black font-semibold focus:outline-none focus:border-black transition-colors placeholder-transparent"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-td-yellow"
            >
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              id="email"
              required
              className="peer w-full bg-transparent border-b border-gray-200 py-3 text-black font-semibold focus:outline-none focus:border-black transition-colors placeholder-transparent"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-td-yellow"
            >
              Email Address
            </label>
          </div>
        </div>

        {/* Subject */}
        <div className="relative group">
          <input
            type="text"
            id="subject"
            required
            className="peer w-full bg-transparent border-b border-gray-200 py-3 text-black font-semibold focus:outline-none focus:border-black transition-colors placeholder-transparent"
            placeholder="Subject"
          />
          <label
            htmlFor="subject"
            className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-td-yellow"
          >
            Subject
          </label>
        </div>

        {/* Message */}
        <div className="relative group">
          <textarea
            id="message"
            rows="3"
            required
            className="peer w-full bg-transparent border-b border-gray-200 py-3 text-black font-semibold focus:outline-none focus:border-black transition-colors placeholder-transparent resize-none"
            placeholder="Message"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-td-yellow"
          >
            Project Details
          </label>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto flex items-center justify-center gap-6 bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-td-yellow hover:text-black transition-all duration-300"
          >
            Submit Inquiry
            <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
