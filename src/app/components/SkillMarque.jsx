
"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
];

export default function SkillsMarque() {
  return (
    <section
      aria-label="Technical skills"
      className="relative w-full overflow-hidden py-10"
    >
      {/* Left and right fade effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-gray-950 to-transparent sm:w-24" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-gray-950 to-transparent sm:w-24" />

      <div className="skills-marquee flex w-max">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="skills-marquee-group flex shrink-0 items-center gap-4 px-2 sm:gap-6 sm:px-3"
            aria-hidden={group === 1}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="flex shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:shadow-blue-500/20 sm:gap-3 sm:px-5 sm:py-3.5 sm:text-base"
                >
                  <Icon
                    className={`${skill.color} text-xl sm:text-2xl`}
                    aria-hidden="true"
                  />

                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <style jsx>{`
        .skills-marquee {
          animation: skills-scroll 30s linear infinite;
          will-change: transform;
        }

        .skills-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes skills-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-marquee {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
