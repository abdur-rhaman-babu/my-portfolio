const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: 95, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-500" },
    { name: "JavaScript", level: 75, color: "bg-yellow-500" },
    { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
    { name: "React JS", level: 82, color: "bg-cyan-500" },
    { name: "Next JS", level: 30, color: "bg-purple-500" },
  ];

  const backendSkills = [
    { name: "MongoDB", level: 30, color: "bg-green-500" },
    { name: "Express Js", level: 25, color: "bg-blue-700" },
    { name: "Node Js", level: 28, color: "bg-[#57a745]" },
  ];

  const versionControlSkills = [
    { name: "Git & GitHub", level: 68, color: "bg-gray-700" },
  ];

  const SkillSection = ({ title, skills }) => (
    <div className="flex-1 p-6 rounded-xl shadow-sm bg-white">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {title}
      </h3>
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
    </div>
  );

  return (
    <section id="skills" className="max-w-5xl mx-auto md:p-5 lg:p-8 rounded-xl">
      <div className="text-center">
        <h1 className="font-bold text-4xl border-[#058789] border-t-4 border-b-4 p-2 my-5 inline-block">
          My <span className="text-[#058789]">Skills</span>
        </h1>
      </div>
      <div className="mb-6">
        <SkillSection title="Frontend Development" skills={frontendSkills} />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <SkillSection title="Backend Development" skills={backendSkills} />
        <SkillSection title="Version Control" skills={versionControlSkills} />
      </div>
    </section>
  );
};

export default Skills;
