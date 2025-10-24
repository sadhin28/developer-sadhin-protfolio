"use client";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";

export default function SkillsMarque() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  ];

  // Duplicate for seamless scroll
  const marqueeSkills = [...skills, ...skills];

  return (
    <section className="relative py-10 overflow-hidden">
      <div className="flex w-max whitespace-nowrap">
        <div className="flex animate-marquee gap-6">
          {marqueeSkills.map((skill, i) => (
            <div
              key={i}
              className="flex hover:shadow-blue-500 duration-300 items-center gap-2 text-xl font-semibold px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          gap: 1.5rem;
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
