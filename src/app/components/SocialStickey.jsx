"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function SocialSticky() {
  const links = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/sadhin28",
      color: "from-gray-800 to-gray-700",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/taosif-bin-sadhin-527899368",
      color: "from-blue-700 to-blue-500",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com/taosifsadhin",
      color: "from-blue-800 to-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/sadhincse",
      color: "from-gray-600 to-gray-400",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:taosifbin.sadhin@gmail.com",
      color: "from-orange-600 to-orange-400",
    },
    {
      name: "Call",
      icon: <FaPhoneAlt />,
      url: "tel:+8801707986054",
      color: "from-green-700 to-green-500",
    },
  ];

  const [pos, setPos] = useState({ x: 20, y: 250 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [collapsed, setCollapsed] = useState(true);
  const [isLeftSide, setIsLeftSide] = useState(true);
  const ref = useRef(null);

  // Keep inside screen & detect which side
  useEffect(() => {
    const handleResize = () => {
      setPos((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 80),
        y: Math.min(prev.y, window.innerHeight - 80),
      }));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startDrag = (clientX, clientY) => {
    setDragging(true);
    setOffset({ x: clientX - pos.x, y: clientY - pos.y });
  };

  const moveDrag = (clientX, clientY) => {
    if (!dragging) return;
    const newX = Math.max(0, Math.min(clientX - offset.x, window.innerWidth - 60));
    const newY = Math.max(0, Math.min(clientY - offset.y, window.innerHeight - 60));
    setPos({ x: newX, y: newY });
    setIsLeftSide(newX < window.innerWidth / 2);
  };

  const stopDrag = () => setDragging(false);

  return (
    <div
      ref={ref}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
      onMouseMove={(e) => moveDrag(e.clientX, e.clientY)}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => moveDrag(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={stopDrag}
      className="fixed z-50 select-none cursor-grab active:cursor-grabbing"
    >
      {/* Floating Toggle Button */}
      <div className="relative">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-12 md:hidden visible h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg hover:scale-110 transition-transform duration-300"
        >
          {collapsed ? (
            <HiMenuAlt3 className="text-2xl" />
          ) : (
            <HiX className="text-2xl" />
          )}
        </button>

        {/* Collapsible Icon List */}
        <ul
          className={`absolute ${
            isLeftSide ? "left-[65px]" : "right-[65px]"
          } top-1/2 -translate-y-1/2 flex flex-col gap-2 transition-all duration-500 ${
            collapsed
              ? "opacity-0 translate-x-[-10px] pointer-events-none"
              : "opacity-100 translate-x-0"
          }`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 bg-gradient-to-r ${link.color} text-white rounded-full shadow-md hover:scale-110 transition-all duration-300`}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Hover Sidebar */}
      <ul
        className={`hidden md:flex flex-col gap-2 ${
          isLeftSide ? "items-start" : "items-end"
        }`}
      >
        {links.map((link) => (
          <li key={link.name} className="group relative">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${
                isLeftSide ? "flex-row" : "flex-row-reverse"
              } w-12 hover:w-44 bg-gradient-to-r ${link.color} px-3 py-1.5 rounded-2xl shadow-lg hover:shadow-blue-500/40 transition-all duration-500 overflow-hidden`}
            >
              <span className="text-lg text-gray-200 group-hover:text-white transition-all duration-300">
                {link.icon}
              </span>
              <span
                className={`whitespace-nowrap opacity-0 group-hover:opacity-100 text-xs transition-all duration-500 ${
                  isLeftSide ? "" : "text-right"
                }`}
              >
                {link.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
