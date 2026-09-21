"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

type Course = {
  name: string;
  description: string;
  image: string;
  certif?: string;
};

type Experience = {
  title: string;
  description: string;
  courses?: Course[];
  certificate?: string;
};

const experiences: Experience[] = [
  {
    title: "Practicum Assistant 2023-2025",
    description:
      "Served as a practicum assistant for three courses, mentoring students in programming, data structures and algorithms, and database systems. Guided students through practical sessions, problem-solving, and technical assignments.",
    courses: [
      {
        name: "Algorithm and Programming",
        description:
          "Guided students in algorithm design, programming concepts, problem-solving techniques, and code review.",
        image: "/experience/asprak-alprog.jpg",
        certif:
          "https://www.forumasisten.or.id/sertifikat/45011989424903856d/show",
      },
      {
        name: "Data Structure and Algorithm",
        description:
          "Helped students understand data structures and algorithms and provided support during practical sessions.",
        image: "/experience/asprak-dsa.jpg",
        certif:
          "https://www.forumasisten.or.id/sertifikat/551140310cdbb2a91de/show",
      },
      {
        name: "Database System",
        description:
          "Guided students in database design, SQL queries, and database-related practical exercises.",
        image: "/experience/asprak-dbs.jpg",
        certif:
          "https://www.forumasisten.or.id/sertifikat/81015101183b7d40251de/show",
      },
    ],
  },
  {
    title: "Machine Learning Intern at PT. GIT Solution",
    description:
      "A three-month internship program focused on learning machine learning concepts, culminating in a final project and a presentation of the project results.",
    certificate:
      "https://drive.google.com/file/d/1OlA3chUq27msrq2UDL5nRrY7gRm14VuZ/view?usp=sharing",
  },
];

export default function ExperienceCards() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  // Prevent background from scrolling while modal is open
  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedExperience]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedExperience(null);
      }
    };

    if (selectedExperience) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedExperience]);

  return (
    <>
      <section
        id="experiences"
        className="bg-[var(--section-background)] px-6 py-20 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-10">
            <h2 className="inline-block text-3xl font-semibold text-[var(--foreground)]">
              Experiences
            </h2>

            <div className="mt-2 h-1 w-20 rounded-full bg-[var(--pink)]" />
          </div>

          {/* Experience Cards */}
          <div className="flex flex-col gap-6">
            {experiences.map((experience) => (
              <article
                key={experience.title}
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
                {/* Content */}
                <div className="flex flex-1 flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                    {experience.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--foreground)]/70">
                    {experience.description}
                  </p>

                  {/* Actions */}
                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                    {/* Popup */}
                    <button
                      onClick={() => setSelectedExperience(experience)}
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

                    {/* Certif */}
                    {experience.certificate && (
                      <a
                        href={experience.certificate}
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
                        Certificate
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
      {selectedExperience && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/50
            px-5 py-8
            backdrop-blur-sm
          "
          onClick={() => setSelectedExperience(null)}
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
              onClick={() => setSelectedExperience(null)}
              aria-label="Close experience details"
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

            {/* Modal Content */}
            <h3 className="mt-1 text-3xl font-semibold text-[var(--foreground)]">
              {selectedExperience.title}
            </h3>

            <p className="mt-5 text-base leading-7 text-[var(--foreground)]/75">
              {selectedExperience.description}
            </p>
            {/* Courses */}
            {selectedExperience.courses && (
              <div className="mt-8 space-y-6">
                {selectedExperience.courses.map((course) => (
                  <div key={course.name}
                       className="
                        rounded-2xl
                        border border-[var(--pink)]/20
                        bg-[var(--section-background)]
                        p-5"
                  >
                    <div className="relative mb-4 aspect-[16/8] overflow-hidden rounded-2xl">
                      <Image
                        src={course.image}
                        alt={course.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-[var(--foreground)]">
                      {course.name}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[var(--foreground)]/70">
                      {course.description}
                    </p>
                    {course.certif && (
                      <a
                        href={course.certif}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-4
                          inline-flex
                          w-fit
                          rounded-full
                          bg-[var(--foreground)]
                          px-4 py-2
                          text-sm font-medium
                          text-[var(--background)]
                          transition
                          hover:oppacity-80">
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
            {/* Certificate */}
            {selectedExperience.certificate && (
              <a
                href = {selectedExperience.certificate}
                target = "_blank"
                rel="noopener noreferrer"
                className="
                  mt-6
                  inline-flex
                  w-fit
                  rounded-full
                  bg-[var(--foreground)]
                  px-5 py-2.5
                  text-sm font-medium
                  text-[var(--background)]
                  transition
                  hover:oppacity-80
                "
              >
                View Certificate
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
