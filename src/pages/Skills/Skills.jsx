import { useEffect, useState } from "react";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: 95, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-500" },
    { name: "JavaScript", level: 75, color: "bg-yellow-500" },
    { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
    { name: "React JS", level: 82, color: "bg-cyan-500" },
    { name: "Next JS", level: 45, color: "bg-purple-500" },
  ];

  const backendSkills = [
    { name: "MongoDB", level: 30, color: "text-green-500" },
    { name: "Express Js", level: 25, color: "text-blue-700" },
    { name: "Node Js", level: 28, color: "text-[#57a745]" },
  ];

  const versionControlSkills = [
    { name: "Git & GitHub", level: 68, color: "text-gray-700" },
  ];

  // Circular Progress Component
  const CircularProgress = ({ skill }) => {
    const radius = 50; // Increased size
    const strokeWidth = 10; // Thicker stroke for better visibility
    const circumference = 2 * Math.PI * radius;
    const progress = (skill.level / 100) * circumference;
  
    return (
      <div className="flex flex-col items-center">
        <svg className="w-32 h-32 transform rotate-360"> {/* Rotated for left-to-right animation */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth={strokeWidth}
            className="text-gray-300 stroke-current"
            fill="transparent"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference} // Start hidden
            className={`${skill.color} stroke-current transition-all duration-1000`}
            fill="transparent"
            style={{
              strokeDashoffset: circumference - progress, // Animates the fill
              transition: "stroke-dashoffset 1.5s ease-out",
            }}
          />
        </svg>
        <span className="mt-2 font-semibold text-lg">{skill.name}</span>
        <span className="text-sm text-gray-600">{skill.level}%</span>
      </div>
    );
  };
  

  // Skill Section Component
  const SkillSection = ({ title, skills, isCircular }) => (
    <div className="flex-1 p-6 rounded-xl shadow-sm bg-white text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      {isCircular ? (
        <div className="flex justify-center gap-6 flex-wrap">
          {skills.map((skill, index) => (
            <CircularProgress key={index} skill={skill} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </span>
                <span className="text-lg font-semibold text-gray-600">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id="skills" className="max-w-5xl mx-auto md:p-5 rounded-xl mb-12">
      <div data-aos="fade-down" className="text-center">
        <h1 className="font-bold text-4xl border-[#058789] border-t-4 border-b-4 p-2 my-5 inline-block">
          My <span className="text-[#058789]">Skills</span>
        </h1>
      </div>
      <div data-aos="fade-down" className="mb-6">
        <SkillSection title="Frontend Development" skills={frontendSkills} />
      </div>

      <div data-aos="fade-up" className="flex flex-col md:flex-row gap-6">
        <SkillSection title="Backend Development" skills={backendSkills} isCircular />
        <SkillSection title="Version Control" skills={versionControlSkills} isCircular />
      </div>
    </section>
  );
};

export default Skills;
