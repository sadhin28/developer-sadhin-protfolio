
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, ChevronRight } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/myskills" },
  { name: "My Repositories", path: "/repositories" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu after route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-[1000] border-b transition-all duration-300 ease-in-out ${
          scrolled
            ? "border-white/10 bg-gray-950/45 shadow-lg shadow-black/10 backdrop-blur-md"
            : "border-transparent bg-transparent shadow-none backdrop-blur-0"
        }`}
      >
        {/* Navbar Container */}
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "h-[64px]" : "h-[72px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Taosif Bin Sadhin - Home"
            onClick={() => setMenuOpen(false)}
            className="group flex min-w-0 shrink items-center gap-2"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500/20 sm:h-10 sm:w-10">
              <Code2 size={22} />
            </span>

            <span className="truncate text-base font-extrabold tracking-wide sm:text-xl lg:text-2xl">
              <span className="text-white">TAOSIF</span>{" "}
              <span className="text-blue-500">SADHIN</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-4 lg:flex xl:gap-7">
            {links.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative block whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-300 xl:text-base ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-200 hover:text-blue-400"
                    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-blue-500 after:transition-transform after:duration-300 ${
                      isActive
                        ? "after:scale-x-100"
                        : "after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/15 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile / Tablet Navigation */}
        <div
          id="mobile-navigation"
          inert={!menuOpen}
          className={`absolute left-0 top-full w-full overflow-hidden border-b border-white/10 bg-gray-950/95 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-[max-height,opacity,visibility] duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "visible max-h-[420px] opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
            <p className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Navigation
            </p>

            <ul className="flex flex-col gap-1.5">
              {links.map((link, index) => {
                const isActive = pathname === link.path;

                return (
                  <li
                    key={link.path}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 35}ms`
                        : "0ms",
                    }}
                    className={`transition-all duration-300 ${
                      menuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-3 opacity-0"
                    }`}
                  >
                    <Link
                      href={link.path}
                      tabIndex={menuOpen ? 0 : -1}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 sm:text-base ${
                        isActive
                          ? "border border-blue-500/20 bg-blue-500/10 text-blue-400"
                          : "border border-transparent text-gray-300 hover:border-white/5 hover:bg-white/5 hover:text-blue-400"
                      }`}
                    >
                      <span>{link.name}</span>

                      <ChevronRight
                        size={18}
                        className={`transition-transform duration-200 ${
                          isActive
                            ? "translate-x-0 text-blue-400"
                            : "-translate-x-1 text-gray-600 group-hover:translate-x-0 group-hover:text-blue-400"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Footer */}
            <div className="mt-4 border-t border-white/10 px-3 pt-4">
              <p className="text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Taosif Bin Sadhin. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[999] bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
    </header>
  );
}
