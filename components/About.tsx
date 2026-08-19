export default function About() {
  return (
    <section id="about"className="bg-[var(--section-background)] px-6 py-20 transition-colors sm:py-24 md:py-32">
        
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium tracking-wide text-[var(--pink)]">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-[var(--foreground)]">
              Building with code, learning through data.
            </h3>

            <p className="mt-5 leading-7 text-[var(--muted)]">
              I&apos;m an Informatics graduate with an interest in
              software development and data-driven technologies.
              I enjoy building web applications, working with
              databases, and exploring machine learning to solve
              practical problems.
            </p>

            <p className="mt-4 leading-7 text-[var(--muted)]">
              My experience includes developing web applications,
              working with frontend and backend technologies, and
              conducting research in natural language processing.
              I&apos;m always eager to learn new technologies and
              improve my skills through hands-on projects.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-[#f0dce4] bg-[var(--background)] p-6 shadow-sm transition hover:-translate-y-1 dark:border-[#4a303b]">
              <p className="text-3xl font-bold text-[var(--pink)]">
                3+
              </p>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Areas of Interest
              </p>
            </div>

            <div className="rounded-2xl border border-[#f0dce4] bg-[var(--background)] p-6 shadow-sm transition hover:-translate-y-1 dark:border-[#4a303b]">
              <p className="text-3xl font-bold text-[var(--pink)]">
                3+
              </p>

              <p className="mt-2 text-sm text-[var(--muted)]">
                years learning & building
              </p>
            </div>

            <div className="rounded-2xl border border-[#f0dce4] bg-[var(--background)] p-6 shadow-sm transition hover:-translate-y-1 dark:border-[#4a303b]">
              <p className="text-3xl font-bold text-[var(--pink)]">
                ∞
              </p>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Curiosity to Learn
              </p>
            </div>

            <div className="rounded-2xl border border-[#f0dce4] bg-[var(--background)] p-6 shadow-sm transition hover:-translate-y-1 dark:border-[#4a303b]">
              <p className="text-3xl font-bold text-[var(--pink)]">
                ♥
              </p>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Passion for Technology
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}