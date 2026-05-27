"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#faf8f5]/95 backdrop-blur border-b border-stone-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-stone-900 font-semibold tracking-tight">
          Gianluca DeRossi
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden p-2 text-stone-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l12 12M4 16L16 4" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-stone-700 hover:text-stone-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
