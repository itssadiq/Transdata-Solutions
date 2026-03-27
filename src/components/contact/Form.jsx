import React, { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const ContactForm = ({ title = "Send us a message" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/mlgwqllb`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        e.target.reset();
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#fcfcfc] p-8 md:p-12 border border-gray-100 rounded-sm shadow-sm h-full flex flex-col justify-center items-center text-center animate-fade-in">
        <CheckCircle size={64} className="text-td-yellow mb-6" />
        <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
        <p className="text-gray-500 mb-8">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:text-td-yellow hover:border-td-yellow transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfc] p-8 md:p-12 border border-gray-100 rounded-sm shadow-sm">
      <h3 className="text-xl font-bold mb-10 text-black uppercase tracking-tight flex items-center gap-3">
        {title}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Name */}
          <div className="relative group">
            <input
              type="text"
              id="name"
              name="name" // Added name attribute
              required
              disabled={isSubmitting}
              className="peer w-full bg-transparent border-b border-gray-200 py-3 text-black font-semibold focus:outline-none focus:border-black transition-colors placeholder-transparent disabled:opacity-50"
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
              name="email" // Added name attribute
              required
              disabled={isSubmitting}
              className="peer w-full bg-transparent border-b border-gray-200 py-3 text-black font-semibold focus:outline-none focus:border-black transition-colors placeholder-transparent disabled:opacity-50"
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
            name="subject" // Added name attribute
            required
            disabled={isSubmitting}
            className="peer w-full bg-transparent border-b border-gray-200 py-3 text-black font-semibold focus:outline-none focus:border-black transition-colors placeholder-transparent disabled:opacity-50"
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
            name="message" // Added name attribute
            rows="3"
            required
            disabled={isSubmitting}
            className="peer w-full bg-transparent border-b border-gray-200 py-3 text-black font-semibold focus:outline-none focus:border-black transition-colors placeholder-transparent resize-none disabled:opacity-50"
            placeholder="Message"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-td-yellow"
          >
            Project Details
          </label>
        </div>

        {/* Error Message Display */}
        {errorMessage && (
          <p className="text-red-500 text-xs font-bold uppercase tracking-wide">
            {errorMessage}
          </p>
        )}

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto flex items-center justify-center gap-6 bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-td-yellow hover:text-black transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
            {isSubmitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <ArrowRight size={16} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
