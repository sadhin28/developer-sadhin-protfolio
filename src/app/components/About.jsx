
"use client";

import {
  Code,
  Database,
  Globe,
  Server,
  ArrowUpRight,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Creating responsive, interactive, and user-friendly interfaces using React, Next.js, JavaScript, and modern CSS.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building scalable backend applications, REST APIs, and server-side solutions using Node.js and Express.js.",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Designing and managing efficient databases with MongoDB, SQL, and optimized data structures.",
    },
    {
      icon: Globe,
      title: "Full-Stack & Wix Solutions",
      description:
        "Developing complete web solutions with MERN Stack, Wix Studio, Velo, CMS, and third-party integrations.",
    },
  ];

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Wix Studio",
    "Velo",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <span className="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
          Get To Know Me
        </span>

        <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          About <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
          Passionate Web Developer specializing in MERN Stack and Wix
          Development, focused on creating modern, responsive, and
          functional digital experiences.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">

        {/* Left Content */}
        <div className="space-y-6 text-gray-400">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              My Journey
            </h3>

            <div className="space-y-4 text-justify text-sm leading-7 sm:text-base sm:leading-8">
              <p>
                I'm a dedicated Web Developer with a passion for creating
                seamless digital experiences. My journey in web development
                started with curiosity about how websites and web applications
                work, which inspired me to explore modern web technologies.
              </p>

              <p>
                I specialize in building full-stack applications using
                MongoDB, Express.js, React, and Node.js. I also work with
                Next.js and Wix Studio to create responsive websites,
                dynamic CMS solutions, custom functionalities, and
                business-focused digital experiences.
              </p>

              <p>
                My goal is to transform ideas into reliable, scalable,
                and visually engaging web solutions while continuously
                improving my development skills.
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="pt-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Technologies I Work With
            </h4>

            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-300 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/20 sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-3">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Let's Work Together
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Right Content - Highlights */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-white/10 bg-gray-600/10 p-5 shadow-lg shadow-black/10 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 sm:p-6"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-5 inline-flex rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                  <Icon size={28} strokeWidth={1.7} />
                </div>

                <h4 className="mb-3 text-lg font-semibold text-white">
                  {item.title}
                </h4>

                <p className="text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
