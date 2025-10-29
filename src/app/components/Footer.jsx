"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-3"><span className="text-white">TAOSIF </span>SADHIN</h2>
          <p className="text-sm leading-6">
            I’m a passionate Frontend & MERN-Stack Developer who loves creating
            modern, responsive, and high-quality web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-500 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-3">
            Connect with Me
          </h3>
          <div className="flex space-x-5 text-lg">
            <Link
              href="https://github.com/sadhin28"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/taosif-bin-sadhin"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:sadhincse113@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-500 font-semibold">Shadin</span>. All rights reserved.
      </div>
    </footer>
  );
}
