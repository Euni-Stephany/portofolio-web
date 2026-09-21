"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Emotion Classification",
    category: "Machine Learning",
    description:
      "A text classification project for detecting emotions from Twitter data. The project compares several BERT models with different splitting dataset methods and evaluates their performance using accuracy, precision, recall, F1-score.",
    tags: ["Python", "HuggingFace", "NLP", "BERT"],
    image: "/projects/emotion-classification.png",
    github: "https://github.com/Euni-Stephany/emotion-classifier.git",
  },

  {
    title: "Lux Photography",
    category: "Web Development",
    description:
      "A photography website designed to showcase photography services and collections through a clean and elegant interface.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "/projects/luxphotografy.png",
    github: "https://github.com/devjeje/luxphotografy.git",
    demo: "https://luxphotografy.my.id",
  },

  {
    title: "Uptown Cafe & Space Wordpress",
    category: "Web Development",
    description: "A WordPress-based website for UpTown Cafe and Space featuring information on products, events, and the menu, as well as a reservation function.", 
    tags: ["WordPress", "Elementor", "MySQL", "PHP"],
    image: "/projects/uptownwordpress.png",
    github: "https://github.com/Thomasaja/Website-Uptown-Cafe-and-Space.git",
  },

  {
    title: "Kinaras E-Commerce",
    category: "Web Development",
    description:
      "An e-commerce website concept designed to provide users with a simple shopping experience, including product browsing and product information.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "/projects/kinaras.png",
    github: "https://github.com/Euni-Stephany/Kinaras-Web.git",
  },
];

export default function ProjectCards() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background from scrolling while modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="projects"
        className="bg-[var(--section)] px-6 py-20 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-10">
            <h2 className="inline-block text-3xl font-semibold text-[var(--foreground)]">
              Projects
            </h2>

            <div className="mt-2 h-1 w-20 rounded-full bg-[var(--pink)]" />
          </div>

          {/* Project Cards */}
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="
                  group
                  flex flex-col gap-6
                  rounded-3xl
                  border border-[var(--pink)]/30
                  bg-[var(--background)]
                  p-5
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  md:flex-row
                  md:p-6
                "
              >
                {/* Image */}
                <div
                  className="
                    relative
                    aspect-[4/3]
                    w-full
                    shrink-0
                    overflow-hidden
                    rounded-2xl
                    bg-[var(--pink-light)]
                    md:w-[280px]
                    lg:w-[320px]
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  {/* Category */}
                  <p className="mb-2 text-sm font-medium text-[var(--pink)]">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--foreground)]/70">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          bg-[var(--pink-light)]
                          px-3 py-1
                          text-xs font-medium
                          text-[var(--foreground)]
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                    {/* Popup */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="
                        text-sm font-medium
                        text-[var(--pink)]
                        underline-offset-4
                        transition
                        hover:underline
                      "
                    >
                      View details
                    </button>

                    {/* GitHub */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          text-sm font-medium
                          text-[var(--foreground)]
                          transition
                          hover:text-[var(--pink)]
                        "
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {/* Demo */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          text-sm font-medium
                          text-[var(--foreground)]
                          transition
                          hover:text-[var(--pink)]
                        "
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/50
            px-5 py-8
            backdrop-blur-sm
          "
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full max-w-3xl
              overflow-y-auto
              rounded-3xl
              bg-[var(--background)]
              p-6 pt-16 
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="
                absolute right-5 top-5 z-20
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-[var(--pink-light)]
                text-[var(--foreground)]
                transition
                hover:bg-[var(--pink)]
                hover:text-white
              "
            >
              <FaTimes />
            </button>

            {/* Modal Image */}
            <div
              className="
                relative
                mb-6
                aspect-video
                w-full
                overflow-hidden
                rounded-2xl
                bg-[var(--pink-light)]
              "
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Modal Content */}
            <p className="text-sm font-medium text-[var(--pink)]">
              {selectedProject.category}
            </p>

            <h3 className="mt-1 text-3xl font-semibold text-[var(--foreground)]">
              {selectedProject.title}
            </h3>

            <p className="mt-5 text-base leading-7 text-[var(--foreground)]/75">
              {selectedProject.description}
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    bg-[var(--pink-light)]
                    px-4 py-2
                    text-sm
                    text-[var(--foreground)]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Modal Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-[var(--foreground)]
                    px-5 py-2.5
                    text-sm font-medium
                    text-[var(--background)]
                    transition
                    hover:opacity-80
                  "
                >
                  <FaGithub />
                  View GitHub
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-[var(--pink)]
                    px-5 py-2.5
                    text-sm font-medium
                    text-white
                    transition
                    hover:opacity-80
                  "
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}