"use client";
import { useEffect, useRef, useState } from "react";
import "../../../css/skill.css";
import {
 Briefcase, GraduationCap,
} from "lucide-react";

export default function Skill() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  const otherSkills = [
    "MySQL",
    "MongoDB",
    "Python (Basic)",
    "Java (Basic)",
    "Kotlin (Basic)",
  ];

  const projects = [
    {
      year: "2026 · Co-op Internship",
      name: "Skllr.",
      image: "/img/skllr.png",
      desc: "Web-based Learning Platform built for real business use. Features Learning Path, Progress Tracking, Quiz, Checkpoints and a Gamification system to boost user engagement.",
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
        "Designed Learning Path & Progress Tracking",
      ],
      badge: "Co-op Internship",
    },
    {
      year: "2024 — 2025",
      name: "Alumni Web Application",
      image: "/img/alumni.png",
      desc: "Full-stack web app for the College of Computing alumni. Supports alumni management, donations, souvenir purchasing and a community webboard.",
      tags: ["React.js", "Node.js", "MySQL"],
      highlights: [
        "Developed full-stack with React.js and Node.js",
        "Built alumni management & donation system",
        "Designed webboard for community interaction",
      ],
      badge: "Full-stack",
    },
    {
      year: "2023",
      name: "Menu Kuru",
      image: "/img/menu-kuru.png",
      desc: "Thai food recipe web app allowing users to search for dishes and learn how to cook authentic Thai cuisine step by step.",
      tags: ["HTML", "CSS"],
      highlights: [
        "Developed responsive UI with HTML & CSS",
        "Implemented search and filtering",
      ],
      badge: "Frontend",
    },
  ];
  
const experiences = [
  {
    year: "Nov 2025 — Mar 2026",
    title: "Frontend Developer",
    org: "Woxa Corporation Limited",
    sub: "Co-op Internship",
    desc: "Developed Skllr Learning Platform using Next.js, TypeScript and Tailwind CSS. Built gamification systems and integrated APIs with the backend team.",
    icon: Briefcase,
  },
  {
    year: "2022 — 2026",
    title: "B.S. Information Technology",
    org: "College of Computing, Khon Kaen University",
    sub: "Bachelor's Degree",
    desc: "",
    icon: GraduationCap,
  },
];

  return (
    <>
      <div className="bg-primary">
        {/* Skills */}
        <div id="skills" className="px-8 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="fade-up mb-14">
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
              - Core Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {mainSkills.map((s) => (
                <span
                  key={s.name}
                  className="skill-badge bg-quaternary text-primary text-sm md:text-base lg:text-md py-2 px-5 md:py-3 md:px-6 rounded-full cursor-default"
                >
                  {s.name}
                  <span className="skill-tooltip">Used in: {s.used}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="fade-up stagger-2 mt-6">
            <p className="text-secondary text-sm md:text-base mb-4 font-medium">
              - Also familiar with
            </p>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((s) => (
                <span
                  key={s}
                  className="skill-badge border border-secondary text-tertiary text-sm md:text-base lg:text-md py-2 px-5 md:py-3 md:px-6 rounded-full bg-white cursor-default"
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
          <div className="reveal flex items-end justify-between flex-wrap gap-4 mb-16">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-quaternary mb-3 font-semibold">
                Projects
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                What I've built
              </h2>
            </div>
            <p className="text-gray-500 text-sm">
              {projects.length} featured projects
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`reveal grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >

                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-card">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      // Fallback ถ้าไม่มีรูป
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, hsl(24 100% 66% / ${0.5 - i * 0.12}), hsl(205 24% 22%) 70%)`,
                        }}
                      />
                    )}

                    {/* Badge */}
                    <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full backdrop-blur text-xs uppercase tracking-wider border border-secondary text-tertiary bg-white font-medium">
                      {p.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-5">
                  <p className="text-sm text-secondary font-medium">{p.year}</p>
                  <h3 className="text-3xl md:text-5xl font-bold text-tertiary tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-base md:text-lg text-tertiary/80 leading-relaxed">
                    {p.desc}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm md:text-base"
                      >
                        <span className="text-quaternary shrink-0">▹</span>
                        <span className="text-tertiary/80">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs md:text-sm border border-secondary bg-white text-tertiary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <hr className="border-secondary mx-8 md:mx-16 lg:mx-24" />

        {/* Experience */}
        <section id="experience" className="py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="reveal mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-quaternary mb-3 font-semibold">Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-tertiary">Where I've been.</h2>
          </div>
          <div className="relative pl-8 md:pl-12 border-secondary space-y-12">
            {experiences.map((e) => (
              <div key={e.title} className="reveal relative group">
                <div className="absolute -left-[2.6rem] md:-left-[3.6rem] top-1 w-12 h-12 rounded-full border-2 border-quaternary grid place-items-center group-hover:bg-quaternary group-hover:text-quaternary transition-colors">
                  <e.icon className="w-5 h-5 text-quaternary group-hover:text-tertiary" />
                </div>
                <div className="rounded-2xl border border-secondary bg-white p-6 hover:border-quaternary transition-colors">
                  <p className="text-xs uppercase tracking-widest text-quaternary mb-2 font-semibold">{e.year}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-tertiary">{e.title}</h3>
                  <p className="text-tertiary/80 mt-1">{e.org} · <span className="text-quaternary">{e.sub}</span></p>
                  {e.desc && <p className="text-tertiary/80 text-sm md:text-base mt-3 leading-relaxed">{e.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
