"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const getInitialTheme = () => {
    if(typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem("theme") === "dark";
  };
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="relative border-b border-[#f0dce4] bg-[var(--background)] transition-colors dark:border-[#4a303b]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="text-xl font-bold text-[var(--pink)]">Unii</span>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="transition-colors hover:text-[var(--pink)]"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-[var(--pink)]"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-[var(--pink)]"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="transition-colors hover:text-[var(--pink)]"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-[var(--pink)]"
          >
            Contact
          </a>

          {/* Desktop Dark Mode */}
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-full bg-[var(--pink-light)] px-3 py-2 transition-transform hover:scale-105"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Dark Mode */}
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-full bg-[var(--pink-light)] px-3 py-2"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => {
              console.log("HAMBURGER DIKLIK");
              setIsMenuOpen((prev) => !prev);
            }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="rounded-lg bg-pink-200 px-4 py-2 text-2xl"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute left-0 top-full z-50 w-full border-t border-[#f0dce4] bg-[var(--background)] shadow-lg transition-all duration-300 ease-out dark:border-[#4a303b] ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5">
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition-colors hover:text-(--pink)"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition-colors hover:text-(--pink)"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition-colors hover:text-(--pink)"
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition-colors hover:text-(--pink)"
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 transition-colors hover:text-(--pink)"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
