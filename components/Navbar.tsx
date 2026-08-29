"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
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
            <>
              {darkMode ? "☀️" : "🌙"}
            </>
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
            <>
              {darkMode ? "☀️" : "🌙"}
            </>
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => {
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
