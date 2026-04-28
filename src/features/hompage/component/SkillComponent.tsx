"use client";
import { useEffect, useRef } from "react";

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
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const mainSkills = ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML / CSS", "Node.js"];
  const otherSkills = [ "MySQL", "MongoDB", "Java (Basic)", "Python (Basic)", "Kotlin (Basic)"];

  const projects = [
    {
      year: "2026 · Co-op Internship",
      name: "Skllr.",
      desc: "Web-based Learning Platform with Gamification system, Learning Path, Progress Tracking, Quiz and Checkpoints",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query"],
    },
    {
      year: "2025",
      name: "Alumni Web App",
      desc: "Full-stack web application featuring Alumni Management, Donation system, Souvenir purchasing and Webboard",
      tags: ["React.js", "Node.js", "MySQL"],
    },
    {
      year: "2023",
      name: "Menu Kuru",
      desc: "Thai food recipe web app allowing users to search for dishes and learn how to cook",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const experiences = [
    {
      year: "2026",
      title: "Frontend Developer · Woxa Sandbox",
      sub: "Co-op Internship",
      desc: "Developed Skllr. Learning Platform using Next.js, TypeScript and Tailwind CSS. Built gamification systems and integrated APIs with the backend team.",
    },
    {
      year: "2022 – 2026",
      title: "Bachelor of Information Technology",
      sub: "College of Computing, Khon Kaen University",
      desc: "",
    },
  ];

  return (
    <>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
      `}</style>

      <div className="bg-primary">

        {/* Skills */}
        <div id="skills" className="px-8 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="fade-up">
            <span className="text-quaternary text-sm md:text-base font-semibold uppercase tracking-widest">
              Skills
            </span>
            <h2 className="text-tertiary text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-10">
              What I work with
            </h2>
          </div>

          <div className="fade-up stagger-1 mb-4">
            <p className="text-secondary text-sm md:text-base mb-4 font-medium">Core Stack</p>
            <div className="flex flex-wrap gap-3">
              {mainSkills.map((s) => (
                <span key={s} className="skill-badge bg-quaternary text-primary text-sm md:text-base lg:text-lg py-2 px-5 md:py-3 md:px-6 rounded-full cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-up stagger-2 mt-6">
            <p className="text-secondary text-sm md:text-base mb-4 font-medium">Also familiar with</p>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((s) => (
                <span key={s} className="skill-badge border border-secondary text-tertiary text-sm md:text-base lg:text-lg py-2 px-5 md:py-3 md:px-6 rounded-full bg-white cursor-default">
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
            <h2 className="text-tertiary text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-10">
              What I've built
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={p.name}
                className={`project-card fade-up stagger-${i + 1} bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-secondary`}
              >
                <span className="text-xs md:text-sm text-secondary font-medium">{p.year}</span>
                <h3 className="text-tertiary text-2xl md:text-3xl lg:text-4xl font-semibold">{p.name}</h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-primary text-tertiary text-xs md:text-sm py-1 px-3 border border-secondary rounded-full">
                      {t}
                    </span>
                  ))}
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

          <div className="flex flex-col gap-8">
            {experiences.map((e, i) => (
              <div key={i} className={`fade-up stagger-${i + 1} flex gap-5 md:gap-8 items-start`}>
                <div className="flex flex-col items-center pt-2">
                  <div className="w-4 h-4 rounded-full bg-quaternary flex-shrink-0" />
                  {i < experiences.length - 1 && (
                    <div className="w-px h-16 md:h-20 bg-secondary mt-2" />
                  )}
                </div>
                <div className="flex-1">
                  <span className="text-xs md:text-sm text-secondary font-medium">{e.year}</span>
                  <p className="text-tertiary font-semibold text-lg md:text-xl lg:text-2xl mt-1">{e.title}</p>
                  <p className="text-quaternary text-sm md:text-base mt-0.5">{e.sub}</p>
                  {e.desc && (
                    <p className="text-gray-500 text-sm md:text-base mt-2 leading-relaxed max-w-2xl">{e.desc}</p>
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