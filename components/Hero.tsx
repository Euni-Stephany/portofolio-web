"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-[var(--background)] px-6 py-20 transition-colors sm:py-24 md:py-32">
      
      {/* Decorative Background */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#f8dce8] opacity-60 blur-3xl dark:bg-[#4a303b]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 -right-24 -z-10 h-80 w-80 rounded-full bg-[#f3c6d8] opacity-50 blur-3xl dark:bg-[#38262e]"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-14 md:flex-row md:justify-between md:gap-20">

        {/* Hero Content */}
        <div className="max-w-2xl text-center md:text-left">

          {/* Small Introduction */}
          <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
            <span className="text-xl text-[var(--pink)]">✦</span>

            <p className="text-sm font-medium tracking-wide text-[var(--pink)]">
              Hello, I&apos;m
            </p>
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl">
            Unii<span className="text-[var(--pink)]">.</span>
          </h1>

          {/* Role */}
          <h2 className="mt-5 text-2xl font-semibold leading-snug text-[var(--pink)] sm:text-3xl">
            Software Developer
            <br className="sm:hidden" /> & Data Enthusiast
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg md:mx-0">
            I&apos;m an Informatics graduate interested in building
            meaningful web applications and exploring data-driven
            solutions using modern technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center md:justify-start">

            {/* Projects Button */}
            <a
              href="#projects"
              className="rounded-full bg-[var(--pink)] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-pink-200/50 transition duration-300 hover:-translate-y-1 hover:opacity-90 dark:shadow-none"
            >
              View My Projects
            </a>

            {/* CV Dropdown */}
            <div className="relative">

              <button
                onClick={() => setIsCvOpen(!isCvOpen)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#e7b8cb] px-7 py-3.5 text-sm font-semibold text-[var(--pink)] transition duration-300 hover:bg-[var(--pink-light)] sm:w-auto"
              >
                Download CV

                <span className="text-xs">
                  {isCvOpen ? "▲" : "▼"}
                </span>
              </button>

              {isCvOpen && (
                <div className="absolute left-1/2 top-full z-20 mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-[#f0dce4] bg-[var(--background)] text-left shadow-xl dark:border-[#4a303b]">
                  
                  <a
                    href="/cv/CV-Unii-Fullstack.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-4 text-sm transition hover:bg-[var(--pink-light)]"
                  >
                    <span className="font-medium">
                      Fullstack Developer
                    </span>

                    <span className="mt-1 block text-xs text-[var(--muted)]">
                      Fullstack-focused CV
                    </span>
                  </a>

                  <a
                    href="/cv/CV-Unii-Web-Developer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-t border-[#f0dce4] px-5 py-4 text-sm transition hover:bg-[var(--pink-light)] dark:border-[#4a303b]"
                  >
                    <span className="font-medium">
                      Web Developer
                    </span>

                    <span className="mt-1 block text-xs text-[var(--muted)]">
                      Web development-focused CV
                    </span>
                  </a>

                  <a
                    href="/cv/CV-Unii-Data.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-t border-[#f0dce4] px-5 py-4 text-sm transition hover:bg-[var(--pink-light)] dark:border-[#4a303b]"
                  >
                    <span className="font-medium">
                      Data / ML
                    </span>

                    <span className="mt-1 block text-xs text-[var(--muted)]">
                      Data and machine learning CV
                    </span>
                  </a>

                </div>
              )}

            </div>
          </div>

          {/* Small Tech Stack */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-[var(--muted)] md:justify-start">
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Node.js</span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>SQL</span>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative shrink-0">

          {/* Decorative Circle */}
          <div className="absolute -inset-5 rounded-full border border-[#f3c6d8] opacity-70 dark:border-[#4a303b]" />

          {/* Small Decorative Sparkles */}
          <span className="absolute -right-5 top-3 text-2xl text-[var(--pink)]">
            ✦
          </span>

          <span className="absolute -bottom-2 -left-6 text-xl text-[var(--pink)]">
            ✦
          </span>

          {/* Image Container */}
          <div className="relative h-64 w-64 overflow-hidden rounded-full">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
  />
</div>
        </div>

      </div>
    </section>
  );
}