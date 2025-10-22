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

  return (
    <section className="relative py-10  from-gray-900 to-gray-800 text-white overflow-hidden">
     
      {/* Marquee Container */}
      <div className="flex space-x-12 animate-marquee">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-xl font-semibold px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
        
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 18s linear  infinite;
        }

        .animate-marquee2 {
          display: flex;
          white-space: nowrap;
          animation: marquee2 40s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee2 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-200%);
          }
        }
      `}</style>
    </section>
  );
}
