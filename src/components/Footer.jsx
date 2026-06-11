import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-16 pb-8 border-t border-[#1f1f1f]">

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Side - Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            My<span className="text-[#7f77dd]">Portfolio</span>
          </h2>
          <p className="text-sm text-[#888] mt-2">
            Frontend Developer | React Enthusiast
          </p>
        </div>

        {/* Middle - Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-[#aaa]">
          <li><a href="#home" className="hover:text-[#7f77dd] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#7f77dd] transition">About</a></li>
          <li><a href="#skills" className="hover:text-[#7f77dd] transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#7f77dd] transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#7f77dd] transition">Contact</a></li>
        </ul>


      </div>

      {/* Bottom line */}
      <div className="text-center text-[#666] text-xs mt-10">
        © {new Date().getFullYear()} MyPortfolio. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;