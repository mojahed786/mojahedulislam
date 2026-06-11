import React from "react";
const Hero = () => {
  return (
<section id="home" className="w-full min-h-screen bg-[#0f0f0f] text-white flex items-center">      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-10 w-full">

        {/* Left Content */}
        <div className="flex-1">

          <p className="text-[#7f77dd] uppercase tracking-[4px] text-sm mb-4">
            Frontend Developer
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-[#7f77dd]"><br/>Mojahedul Islam</span>
            <br />
            I build modern web apps
          </h1>

          <p className="text-[#aaa] mt-5 text-sm sm:text-base max-w-lg">
            I am a React developer passionate about building responsive,
            interactive and user-friendly web applications using modern tools
            like React, Tailwind CSS and JavaScript.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="#projects"
              className="bg-[#7f77dd] hover:bg-[#534ab7] transition px-6 py-3 rounded text-sm uppercase tracking-widest"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#7f77dd] text-[#7f77dd] hover:bg-[#7f77dd] hover:text-white transition px-6 py-3 rounded text-sm uppercase tracking-widest"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Right Content (Image / Avatar) */}
      <div className="flex-1 flex justify-center items-center">
  <div className="w-[250px] sm:w-[300px] md:w-[330px] h-[250px] sm:h-[300px] md:h-[330px] rounded-full overflow-hidden border-2 border-sky-400 shadow-[0_0_25px_6px_rgba(56,189,248,0.6)]">
    <img
    src="src/assets/hero.png"
    alt="Hero Image"
    className="w-[112%] h-[113%] object-contain"
  />

</div>
</div>

      </div>
    </section>
  );
};

export default Hero;