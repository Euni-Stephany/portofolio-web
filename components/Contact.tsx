"use client";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-(--section-background)">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div
          className="
        rounded-3xl
        border border-(--pink)
        bg-(--background)
        p-8 md:p-12
      "
        >
          <div className="mb-6">
            <h2 className="text-3xl font-semibold text-(--foreground)">
              Let&apos;s Connect
            </h2>

            <div className="mt-2 h-1 w-50 rounded-full bg-(--pink)" />

            <p className="mt-3 max-w-2xl text-base leading-7 text-(--foreground)/70">
              Thanks for visiting my portfolio. I&apos;m open to new
              opportunities, collaboration, and interesting projects.
            </p>
            <div className= "mt-4 flex flex-wrap gap-4">
                <a
                 href="mailto:eulydiastephany@gmail.com"
                 className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border border-(--pink)
                    px-5 py-2.5
                    text-sm
                    font-medium
                    text-(--foreground)
                    transition
                    hover:bg-(--pink)
                    hover:text-white">
                    <FaEnvelope size={18} />
                    Email
                </a>
                <a
                 href="https://www.linkedin.com/in/eunique-lydia-stephany-2075822b6/"
                 className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border border-(--pink)
                    px-5 py-2.5
                    text-sm
                    font-medium
                    text-(--foreground)
                    transition
                    hover:bg-(--pink)
                    hover:text-white">
                    <FaLinkedin size={18} />
                    LinkedIn
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
