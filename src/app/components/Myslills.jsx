
"use client";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiVercel,
} from "react-icons/si";

import {
  Code2,
  Database,
  Wrench,
  Rocket,
  Users,
  Globe,
} from "lucide-react";

import SkillsMarque from "../components/SkillMarque";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "text-sky-400",
    border: "hover:border-sky-400/50",
    shadow: "hover:shadow-sky-500/10",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-green-400",
    border: "hover:border-green-400/50",
    shadow: "hover:shadow-green-500/10",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "REST APIs",
      "Authentication",
      "Database Design",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    color: "text-amber-400",
    border: "hover:border-amber-400/50",
    shadow: "hover:shadow-amber-500/10",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Vercel",
      "Wix Studio",
      "Velo Development",
      "Wix CMS",
    ],
  },
];

const technologies = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Figma", icon: FaFigma, color: "text-pink-400" },
];

const softSkills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Creativity",
  "Time Management",
  "Adaptability",
  "Project Management",
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-10 text-center sm:mb-12">
      <span className="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
        {label}
      </span>

      <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function MySkills() {
  return (
    <main
      id="skills"
      className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" />

      {/* Main Heading */}
      <SectionHeading
        label="What I Can Do"
        title={
          <>
            My Skills <span className="text-blue-500">& Expertise</span>
          </>
        }
        description="A combination of technical knowledge, practical experience, and modern development tools to build effective digital solutions."
      />

      {/* Skills Marquee */}
      <div className="mb-16 sm:mb-20">
        <SkillsMarque />
      </div>

      {/* Technical Skills */}
      <section className="mb-16 sm:mb-20">
        <SectionHeading
          label="Technical Knowledge"
          title={
            <>
              Technical <span className="text-blue-500">Expertise</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-2xl ${category.border} ${category.shadow}`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Icon size={25} className={category.color} />
                  </div>

                  <h3 className={`text-lg font-bold ${category.color}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-gray-900/60 px-3 py-2 text-xs font-medium text-gray-300 transition-colors duration-200 hover:border-blue-500/40 hover:text-blue-300 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Professional Expertise */}
      <section className="mb-16 sm:mb-20">
        <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-gray-900/50 to-transparent p-6 sm:p-9 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-400">
              <Rocket size={30} />
            </div>

            <h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
              Professional <span className="text-blue-500">Expertise</span>
            </h2>

            <p className="text-sm leading-8 text-gray-300 sm:text-base">
              I specialize in developing modern and responsive web
              applications using the MERN Stack and Next.js. I also build
              professional websites and custom business solutions using
              Wix Studio, Velo, and CMS. My focus is on writing clean code
              and delivering scalable, efficient, and user-friendly
              digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Icons */}
      <section className="mb-16 sm:mb-20">
        <SectionHeading
          label="My Development Stack"
          title={
            <>
              Tools & <span className="text-blue-500">Technologies</span>
            </>
          }
          description="Technologies and platforms I use in my development workflow."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                title={tech.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Icon
                  aria-hidden="true"
                  className={`text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl ${tech.color}`}
                />

                <span className="text-xs font-medium text-gray-400 transition-colors group-hover:text-white sm:text-sm">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Soft Skills */}
      <section>
        <SectionHeading
          label="Beyond Technical Skills"
          title={
            <>
              <Users className="mr-2 inline-block text-blue-500" size={30} />
              Soft <span className="text-blue-500">Skills</span>
            </>
          }
          description="Professional qualities that help me collaborate, communicate, and deliver successful projects."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
