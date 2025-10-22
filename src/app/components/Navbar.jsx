"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
     { name: "Skills", path: "/myskills" },
    { name: "My Repositories", path: "/repositories" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md  shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          TAOSIF SADHIN
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path} className="relative">
                <Link
                  href={link.path}
                  className={`relative  font-bold pb-1 transition-colors duration-300 ${
                    isActive
                      ? "text-blue-600 "
                      : "text-white hover:text-blue-600"
                  } 
                  before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-blue-600 
                  before:transition-all before:duration-300 hover:before:w-full`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer text-2xl text-blue-700 "
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white/10 backdrop-blur-md  shadow-2xl text-center font-medium text-white py-4 space-y-3 transition-all duration-300">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1 ${
                    isActive
                      ? "text-blue-500  font-semibold"
                      : "hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
