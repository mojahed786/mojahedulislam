import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal responsive portfolio using React & Tailwind.",
    },
    {
      title: "Quote Generator",
      desc: "Random quote generator using React API handling.",
    },
    {
      title: "Todo App",
      desc: "Simple CRUD app using React state management.",
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#111] text-white py-20">

      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10">
          My <span className="text-[#7f77dd]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2a2a2a] hover:border-[#7f77dd] transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-[#aaa] text-sm">{p.desc}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;