"use client";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiVercel } from "react-icons/si";
import SkillsMarque from "../components/SkillMarque";
import { FaComputer } from "react-icons/fa6";

export default function Myskills() {
  return (
    <div className=" text-white py-16 ">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10 flex items-center justify-center gap-4 text-blue-500"><FaComputer/><span className="text-white"> My Skills & Expertise</span></h1>

      {/*  Skills Marquee Section */}
      <SkillsMarque />

      {/* Technical Skills */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">🧠 Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition  border-blue-300 border duration-300 hover:shadow-blue-300">
            <h3 className="text-2xl font-semibold mb-4 text-sky-400">Frontend</h3>
            <ul className="space-y-2 text-lg">
              <li>HTML, CSS, JavaScript (ES6+)</li>
              <li>React.js, Next.js</li>
              <li>Tailwind CSS, DaisyUI</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition  border-green-300 border duration-300 hover:shadow-green-300">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Backend</h3>
            <ul className="space-y-2 text-lg">
              <li>Node.js, Express.js</li>
              <li>MongoDB, Firebase</li>
              <li>REST API, Authentication</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition border-amber-300 border duration-300 hover:shadow-yellow-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Tools & Others</h3>
            <ul className="space-y-2 text-lg">
              <li>Git & GitHub</li>
              <li>VS Code, Postman</li>
              <li>Figma, Vercel Deployment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3️⃣ Professional Expertise */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">🚀 Professional Expertise</h2>
        <p className="max-w-7xl mx-auto text-gray-300 text-lg leading-relaxed">
           building modern, responsive web applications using the MERN stack and Next.js.
          My focus is on creating efficient, scalable, and user-friendly solutions.
          I also hav UI/UX design and cloud deployment.
        </p>
      </section>

      {/* 4️⃣ Tools & Technologies Icons */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">🧰 Tools & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-10 text-5xl">
          <FaReact className="text-cyan-400 hover:shadow-2xl hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer" />
          <SiNextdotjs className="text-white hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer" />
          <SiTailwindcss className="text-sky-400 hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer" />
          <FaNodeJs className="text-green-500 hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer" />
          <SiExpress className="text-gray-400 hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer" />
          <SiMongodb className="text-green-600 hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer" />
          <SiFirebase className="text-yellow-500 hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer" />
          <FaGitAlt className="text-orange-400 hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer" />
          <SiVercel className="text-gray-300 hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer" />
          <FaFigma className="text-pink-400 hover:shadow-green-400 transform-3d hover:rotate-360 duration-1000 cursor-pointer "/>
        </div>
      </section>

      {/* 5️⃣ Soft Skills */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">💬 Soft Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <span className="bg-white/10 px-6 py-2 rounded-full">Teamwork</span>
          <span className="bg-white/10 px-6 py-2 rounded-full">Communication</span>
          <span className="bg-white/10 px-6 py-2 rounded-full">Problem Solving</span>
          <span className="bg-white/10 px-6 py-2 rounded-full">Creativity</span>
          <span className="bg-white/10 px-6 py-2 rounded-full">Time Management</span>
        </div>
      </section>
    </div>
  );
}
