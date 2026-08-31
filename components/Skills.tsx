const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "PHP", "Python", "C++"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Database",
    skills: ["SQL"],
  },
  {
    title: "Data & AI",
    skills: ["Pandas", "NumPy", "Machine Learning", "NLP", "Apache Spark "],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    
    <section
      id="skills"
      className="bg-[var(--section-background)] px-6 py-20 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--pink)]">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            What I Work With
          </h2>
        </div>

        {/*Skills Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-[var(--pink-light)] bg-[var(--background)] p-6 transition-all duration-300"
            >
              <h3 className="mb-5 text-lg font-semibold text[var(--pink)]">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--pink-light)] px-3 py-1.5 text-sm text-[var(--foreground)] transition-colors duration-200]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
