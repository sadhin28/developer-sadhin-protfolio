
"use client";

import Typewriter from "typewriter-effect";
import protfolioImg from "../../public/protfolioImg.png";
import Link from "next/link";
import Image from "next/image";
import Myskills from "./components/Myslills";
import GitHubContributions from "./components/GitHubContributions";
import Projects from "./components/Repositories";
import useTitle from "@/hook/useTitle";
import About from "./components/About";
import ContactForm from "./components/Contact";

export default function Home() {
  useTitle("HOME");

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/11hrBZZ02ObbiHoXgi1BkmUsAZL47yCrW/view",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-2xl py-8 md:grid-cols-2 md:gap-8 lg:py-14">

          {/* Introduction */}
          <div className="flex min-h-[180px] w-full flex-col justify-center text-center md:items-start md:text-left">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-base">
              Welcome to my portfolio
            </p>

            <div className="min-h-[100px] text-xl font-bold leading-relaxed text-white sm:text-2xl md:text-3xl lg:text-4xl">

              <Typewriter
                options={{
                  strings: [
                    "Hi, I Am Taosif Bin Sadhin",
                    "I Am A MERN Stack Web Developer",
                    "CMS Expert With Wix and Velo",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 50,
                }}
              />

            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base md:leading-8">
              I build responsive websites and modern web applications
              using React, Next.js, Node.js, MongoDB, Wix Studio and Velo.
            </p>

          </div>

          {/* Profile Image */}
          <div className="flex w-full justify-center md:justify-end">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl" />

              <Image
                src={protfolioImg}
                alt="Taosif Bin Sadhin - Web Developer"
                priority
                width={320}
                height={320}
                sizes="(max-width: 768px) 256px, 320px"
                className="relative h-64 w-64 rounded-full border-8 border-blue-600/20 object-cover shadow-2xl shadow-blue-700/30 transition-all duration-500 hover:scale-105 hover:border-blue-600 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />

            </div>

          </div>

        </div>

        {/* Hero Buttons */}
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 py-6 sm:gap-6 md:justify-start">

          <button
            type="button"
            onClick={handleDownloadCV}
            className="rounded-lg border border-blue-500 px-6 py-3 text-sm font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 sm:px-7 sm:text-base"
          >
            DOWNLOAD CV
          </button>

          <Link
            href="/contact"
            className="rounded-lg border border-green-500 px-6 py-3 text-sm font-semibold text-green-400 transition-all duration-300 hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-500/30 sm:px-7 sm:text-base"
          >
            HIRE ME
          </Link>

        </div>

      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* My Skills */}
      <section id="skills">
        <Myskills />
      </section>

      {/* GitHub Contributions */}
      <section id="github-contributions">
        <GitHubContributions />
      </section>

      {/* GitHub Repositories */}
      <section id="repositories">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactForm />
      </section>

     

    </div>
  );
}
