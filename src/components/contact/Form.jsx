import React from "react";
import { ArrowRight } from "lucide-react";

const ContactForm = ({ title = "Send us a message" }) => {
  return (
    <div className="bg-gray-50 p-10 md:p-14 rounded-sm border border-gray-100 h-full">
      <h3 className="text-2xl font-bold mb-8 text-black">{title}</h3>
      <form className="space-y-8">
        {/* Name & Email Row */}
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
        </div>

        {/* Subject Field */}
        <div className="group relative">
          <input
            type="text"
            id="subject"
            required
            className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-black font-bold focus:outline-none focus:border-td-yellow transition-colors placeholder-transparent"
            placeholder="Subject"
          />
          <label
            htmlFor="subject"
            className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-td-yellow font-mono uppercase tracking-wider"
          >
            Subject
          </label>
        </div>

        {/* Message Field */}
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

        {/* Submit Button */}
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
  );
};

export default ContactForm;
