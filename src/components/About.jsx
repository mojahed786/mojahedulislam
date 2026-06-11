import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full bg-[#0f0f0f] text-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-10">
          About <span className="text-[#7f77dd]">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Developer & React Enthusiast
            </h3>

            <p className="text-[#aaa] leading-7 mb-6">
              I am Mojahed, a passionate Frontend Developer skilled in React,
              JavaScript, HTML, and CSS. I love building modern, responsive,
              and user-friendly web applications. I focus on writing clean code,
              reusable components, and creating smooth UI experiences.
            </p>

            <p className="text-[#aaa] leading-7">
              Currently, I am improving my skills in full-stack development,
              data structures & algorithms, and preparing for real-world
              software engineering roles.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#projects"
                className="px-5 py-2 bg-[#7f77dd] hover:bg-[#6a63d6] rounded-lg transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-5 py-2 border border-[#7f77dd] text-[#7f77dd] hover:bg-[#7f77dd] hover:text-white rounded-lg transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Stats Box */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-[#1a1a1a] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
              <h4 className="text-3xl font-bold text-[#7f77dd]">2+</h4>
              <p className="text-[#aaa] mt-2">Projects</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
              <h4 className="text-3xl font-bold text-[#7f77dd]">7+</h4>
              <p className="text-[#aaa] mt-2">Months Learning React</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
              <h4 className="text-3xl font-bold text-[#7f77dd]">2+</h4>
              <p className="text-[#aaa] mt-2">Mini Apps Built</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition">
              <h4 className="text-3xl font-bold text-[#7f77dd]">100%</h4>
              <p className="text-[#aaa] mt-2">Dedication</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;