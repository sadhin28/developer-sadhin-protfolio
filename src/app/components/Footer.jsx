
"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/myskills" },
    { name: "Repositories", href: "/repositories" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sadhin28",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/taosif-bin-sadhin",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:sadhincse113@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/10 bg-gray-950 text-gray-300">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-12 sm:px-6 sm:pt-14 lg:px-8 lg:pt-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-16">
          {/* About Section */}
          <div className="min-w-0 text-left">
            <Link
              href="/"
              className="inline-block text-2xl font-extrabold tracking-wide"
            >
              <span className="text-white">TAOSIF</span>{" "}
              <span className="text-blue-500">SADHIN</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              I'm a passionate Web Developer specializing in Full Stack
              and Wix Development. I love creating modern, responsive,
              and high-quality digital experiences.
            </p>

            <p className="mt-4 text-sm font-medium text-blue-400">
              Turning Ideas Into Digital Solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0 text-left">
            <h3 className="mb-5 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-blue-400"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="min-w-0 text-left">
            <h3 className="mb-5 text-lg font-bold text-white">
              Connect With Me
            </h3>

            <p className="mb-5 max-w-sm text-sm leading-6 text-gray-400">
              Have a project in mind? Let's connect and build something
              amazing together.
            </p>

            <div className="flex items-center justify-start gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith("https://");

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    title={social.name}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <a
              href="mailto:sadhincse113@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              <Mail size={16} />
              Let's Talk
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10 sm:my-9" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-start justify-between gap-4 text-left sm:flex-row sm:items-center">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-400">
              Taosif Bin Sadhin
            </span>
            . All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
            Made with
            <Heart size={14} className="fill-red-500 text-red-500" />
            by
            <span className="font-semibold text-white">Sadhin</span>
          </p>

          {/* Back To Top */}
          <button
            type="button"
            aria-label="Back to top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500 hover:text-white"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
