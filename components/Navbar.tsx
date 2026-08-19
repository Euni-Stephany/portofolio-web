"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

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
    <nav className="border-b border-[#f0dce4] bg-[var(--background)] transition-colors dark:border-[#4a303b]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold text-[var(--pink)]"
        >
          Unii
        </a>

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

          {/* Dark Mode Button */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-full bg-[var(--pink-light)] px-3 py-2 transition-transform hover:scale-105"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="rounded-full bg-[var(--pink-light)] px-3 py-2"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            aria-label="Open menu"
            className="text-xl"
          >
            ☰
          </button>
        </div>

      </div>
    </nav>
  );
}