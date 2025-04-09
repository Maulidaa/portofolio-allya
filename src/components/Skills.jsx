import React from "react";
import {
  SiReact,
  SiPhp,
  SiLaravel,
  SiFigma,
  SiInkscape,
  SiFlask,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Web Development",
    skills: [
      { name: "PHP", icon: <SiPhp className="text-violet-400" size={30} />, color: "border-violet-400" },
      { name: "Laravel", icon: <SiLaravel className="text-red-500" size={30} />, color: "border-red-500" },
      { name: "React", icon: <SiReact className="text-sky-400" size={30} />, color: "border-sky-400" },
      { name: "Flask", icon: <SiFlask className="text-white" size={30} />, color: "border-white" },
    ],
  },
  {
    title: "UI/UX & Desain",
    skills: [
      { name: "Figma", icon: <SiFigma className="text-pink-400" size={30} />, color: "border-pink-400" },
    ],
  },
  {
    title: "Desain",
    skills: [
      { name: "CorelDRAW", icon: <SiInkscape className="text-gray-300" size={30} />, color: "border-gray-300" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#000000] text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-green-400">Hard Skills</h2>
        <div className="space-y-10">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold mb-4 text-center">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`w-[250px] h-[120px] bg-[#2a2a2a] p-5 rounded-xl flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform border-2 ${skill.color}`}
                  >
                    <div>{skill.icon}</div>
                    <p className="mt-3 font-semibold">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
