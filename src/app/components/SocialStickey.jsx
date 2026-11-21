
"use client";

import { useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  MessageCircle,
  Plus,
  X,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/sadhin28",
    color: "hover:bg-gray-700",
    mobileColor: "bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/wixexpertsadhin/",
    color: "hover:bg-blue-600",
    mobileColor: "bg-blue-700",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/8801764245789",
    color: "hover:bg-green-600",
    mobileColor: "bg-green-600",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:sadhincse113@gmail.com",
    color: "hover:bg-red-500",
    mobileColor: "bg-red-600",
  },
];

export default function SocialStickey() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({
    x: 16,
    y: 180,
  });

  const dragging = useRef(false);
  const moved = useRef(false);
  const pointerOffset = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    if (e.button !== 0) return;

    dragging.current = true;
    moved.current = false;

    pointerOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging.current) return;

    const size = 56;

    const newX = Math.max(
      8,
      Math.min(
        window.innerWidth - size - 8,
        e.clientX - pointerOffset.current.x
      )
    );

    const newY = Math.max(
      80,
      Math.min(
        window.innerHeight - size - 8,
        e.clientY - pointerOffset.current.y
      )
    );

    if (
      Math.abs(newX - position.x) > 3 ||
      Math.abs(newY - position.y) > 3
    ) {
      moved.current = true;
    }

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    dragging.current = false;

    if (!moved.current) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <>
      {/* Desktop Social Sticky */}
      <aside
        aria-label="Social media links"
        className="fixed right-0 top-1/2 z-[999] hidden -translate-y-1/2 flex-col gap-2 sm:flex"
      >
        {socialLinks.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.url}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={
                social.name === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={social.name}
              title={social.name}
              className={`group relative flex h-11 w-11 translate-x-2 items-center justify-center rounded-l-xl border border-white/10 bg-gray-900/90 text-gray-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:translate-x-0 ${social.color}`}
            >
              <Icon size={20} />

              <span className="pointer-events-none absolute right-14 translate-x-2 whitespace-nowrap rounded-lg border border-white/10 bg-gray-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                {social.name}
              </span>
            </a>
          );
        })}
      </aside>

      {/* Mobile Draggable Quick Ball */}
      <div
        className="fixed z-[9999] sm:hidden"
        style={{
          left: position.x,
          top: position.y,
          touchAction: "none",
        }}
      >
        {/* Social Icons */}
        <div
          className={`absolute bottom-[68px] left-1/2 flex -translate-x-1/2 flex-col-reverse items-center gap-3 transition-all duration-300 ${
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-5 opacity-0"
          }`}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                target={social.name === "Email" ? undefined : "_blank"}
                rel={
                  social.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.name}
                title={social.name}
                style={{
                  transitionDelay: open ? `${index * 45}ms` : "0ms",
                }}
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white shadow-xl transition-all duration-300 hover:scale-110 ${social.mobileColor}`}
              >
                <Icon size={21} />
              </a>
            );
          })}
        </div>

        {/* Main Quick Ball */}
        <button
          type="button"
          aria-label={open ? "Close social links" : "Open social links"}
          aria-expanded={open}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            dragging.current = false;
          }}
          className="relative flex h-14 w-14 cursor-grab touch-none items-center justify-center rounded-full border border-blue-300/40 bg-gradient-to-br from-blue-500 to-indigo-700 text-white shadow-[0_0_25px_rgba(59,130,246,0.6)] active:cursor-grabbing"
        >
          <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-blue-400/20" />

          <span className="relative">
            {open ? <X size={26} /> : <Plus size={29} />}
          </span>
        </button>
      </div>
    </>
  );
}
