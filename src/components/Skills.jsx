import React from "react";

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "80%" },
  { name: "React", level: "75%" },
  { name: "Tailwind", level: "85%" },
  { name: "Git", level: "70%" },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#0f0f0f] text-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-[#7f77dd]">Skills</span>
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition"
            >

              {/* Skill name + percent */}
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-[#7f77dd]">{skill.level}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-[#333] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#7f77dd] rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;  