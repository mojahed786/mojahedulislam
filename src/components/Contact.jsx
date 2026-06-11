import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#0f0f0f] text-white py-24">

      <div className="max-w-[700px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10 text-center">
          Contact <span className="text-[#7f77dd]">Me</span>
        </h2>

        {/* Form Card */}
        <div className="bg-[#151515] p-8 rounded-2xl shadow-lg border border-[#222]">

          <form className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-[#1e1e1e] border border-[#2a2a2a] focus:border-[#7f77dd] outline-none text-sm"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-[#1e1e1e] border border-[#2a2a2a] focus:border-[#7f77dd] outline-none text-sm"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              className="p-3 rounded-lg bg-[#1e1e1e] border border-[#2a2a2a] focus:border-[#7f77dd] outline-none text-sm resize-none"
            />

            <button
              type="submit"
              className="bg-[#7f77dd] hover:bg-[#5a52c9] transition py-3 rounded-lg uppercase tracking-widest text-sm font-medium"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>

    </section>
  );
};

export default Contact;