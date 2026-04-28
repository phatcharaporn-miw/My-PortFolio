"use client";
import { useEffect, useRef, useState } from "react";
import "../../../css/skill.css";

export default function Skill() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const mainSkills = [
    { name: "React.js", used: "Skllr. · Alumni App" },
    { name: "Next.js", used: "Skllr." },
    { name: "TypeScript", used: "Skllr." },
    { name: "JavaScript", used: "Menu Kuru · BabyCare" },
    { name: "Tailwind CSS", used: "Skllr." },
    { name: "HTML / CSS", used: "All Projects" },
    { name: "Node.js", used: "Alumni App" },
  ];

  const otherSkills = ["MySQL", "MongoDB", "Python (Basic)", "Java (Basic)", "Kotlin (Basic)"];

  const projects = [
    {
      year: "2026 · Co-op Internship",
      name: "Skllr.",
      desc: "Web-based Learning Platform built for real business use. Features Learning Path, Progress Tracking, Quiz, Checkpoints and a Gamification system (XP, Rewards, Streaks) to boost user engagement.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "TanStack Query",
      ],
      highlights: [
        "Built gamification system with XP, rewards and streaks",
        "Integrated REST APIs with backend team",
        "Designed Learning Path and Progress Tracking features",
      ],
      image: "/img/skllr2.png",
      highlight: "Co-op Internship",
    },
    {
      year: "2024 - 2025",
      name: "College of Computing Alumni Web Application",
      desc: "Full-stack web application for the College of Computing alumni. Supports alumni management, donation system, souvenir purchasing and a webboard for community interaction.",
      tags: ["React.js", "Node.js", "MySQL"],
      highlights: [
        "Developed full-stack with React.js and Node.js",
        "Built alumni management and donation system",
        "Designed webboard for community interaction",
      ],
      image: "/img/alumni.png",
      github: "",
      demo: "",
      highlight: "Full-stack",
    },
    {
      year: "2023",
      name: "Menu Kuru",
      desc: "Thai food recipe web app allowing users to search for dishes and learn how to cook",
      tags: ["HTML", "CSS"],
      highlights: [
        "Developed responsive UI with HTML and CSS",
        "Implemented search and filtering functionality",
      ],
      image: "/img/menu-kuru.png",
      github: "",
      demo: "",
      highlight: "Frontend",
    },
  ];
  const experiences = [
    {
      year: "November 2025 - March 2026",
      title: "Frontend Developer · Woxa corporation limited",
      sub: "Co-op Internship",
      desc: "Developed Skllr. Learning Platform using Next.js, TypeScript and Tailwind CSS. Built gamification systems and integrated APIs with the backend team.",
      // icon: "💼",
    },
    {
      year: "2022 – 2026",
      title: "Bachelor of Information Technology",
      sub: "College of Computing, Khon Kaen University",
      desc: "",
      // icon: "🎓",
    },
  ];

  return (
    <>
      <div className="bg-primary">
        {/* Skills */}
        <div id="skills" className="px-8 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="fade-up">
            <span className="text-quaternary text-sm md:text-base font-semibold uppercase tracking-widest">
              Skills
            </span>
            <h2 className="text-tertiary text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-2">
              What I work with
            </h2>
            {/* <p className="text-secondary text-sm md:text-base mb-10">Hover over a skill to see where I've used it</p> */}
          </div>

          <div className="fade-up stagger-1 mb-4">
            <p className="text-secondary text-sm md:text-base mb-4 font-medium">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {mainSkills.map((s) => (
                <span
                  key={s.name}
                  className="skill-badge bg-quaternary text-primary text-sm md:text-base lg:text-lg py-2 px-5 md:py-3 md:px-6 rounded-full cursor-default"
                >
                  {s.name}
                  <span className="skill-tooltip">Used in: {s.used}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="fade-up stagger-2 mt-6">
            <p className="text-secondary text-sm md:text-base mb-4 font-medium">
              Also familiar with
            </p>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((s) => (
                <span
                  key={s}
                  className="skill-badge border border-secondary text-tertiary text-sm md:text-base lg:text-lg py-2 px-5 md:py-3 md:px-6 rounded-full bg-white cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-secondary mx-8 md:mx-16 lg:mx-24" />

        {/* Projects */}
        <div id="projects" className="px-8 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="fade-up">
            <span className="text-quaternary text-sm md:text-base font-semibold uppercase tracking-widest">
              Projects
            </span>
            <h2 className="text-tertiary text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-16">
              What I've built
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            {projects.map((p, i) => (
              <div
                key={p.name}
                className={`fade-up stagger-${i + 1} flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex-shrink-0 relative group">
                  <div className="absolute inset-0 bg-quaternary rounded-2xl translate-x-3 translate-y-3 opacity-20" />
                  <div className="relative overflow-hidden rounded-2xl border border-secondary">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full object-fit h-60 md:h-80 lg:h-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5 lg:w-1/2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs md:text-sm text-secondary font-medium">
                      {p.year}
                    </span>
                    <span className="text-xs bg-quaternary text-primary py-1 px-3 rounded-full">
                      {p.highlight}
                    </span>
                  </div>

                  <h3 className="text-tertiary text-4xl md:text-5xl font-bold">
                    {p.name}
                  </h3>

                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2">
                    {p.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm md:text-base text-tertiary"
                      >
                        <span className="text-quaternary mt-1 flex-shrink-0">
                          ▹
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-white text-tertiary text-xs md:text-sm py-1.5 px-4 border border-secondary rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-secondary mx-8 md:mx-16 lg:mx-24" />

        {/* Experience */}
        <div id="experience" className="px-8 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="fade-up">
            <span className="text-quaternary text-sm md:text-base font-semibold uppercase tracking-widest">
              Experience
            </span>
            <h2 className="text-tertiary text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-10">
              Where I've been
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {experiences.map((e, i) => (
              <div
                key={i}
                className={`fade-up stagger-${i + 1} flex gap-5 md:gap-8 items-start`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-quaternary flex items-center justify-center text-lg flex-shrink-0">
                    {/* {e.icon} */}
                  </div>
                  {i < experiences.length - 1 && (
                    <div className="w-0.5 h-16 md:h-35 bg-secondary mt-1" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <span className="text-xs md:text-sm text-secondary font-medium">
                    {e.year}
                  </span>
                  <p className="text-tertiary font-semibold text-lg md:text-xl lg:text-2xl mt-1">
                    {e.title}
                  </p>
                  <p className="text-quaternary text-sm md:text-base mt-0.5 font-medium">
                    {e.sub}
                  </p>
                  {e.desc && (
                    <p className="text-gray-500 text-sm md:text-base mt-2 leading-relaxed max-w-2xl">
                      {e.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
