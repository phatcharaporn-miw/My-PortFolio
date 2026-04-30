"use client";
import { useEffect, useState } from "react";
import "../../../css/header.css";
import { ArrowRight, Download, MapPin, Menu, X } from "lucide-react";

export default function Header() {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setActive(hash);
    };
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  useEffect(() => {
    const sections = ["about", "skills", "projects", "experience", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px 0px 0px", // offset ความสูง navbar
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className={loaded ? "loaded" : ""}>
      {/* Navbar */}
      <nav className="bg-tertiary/90 px-6 md:px-16 lg:px-24 fade-down fixed top-0 left-0 right-0 w-full z-50 border-b border-white/10 backdrop-blur-xl">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-quaternary text-tertiary grid place-items-center font-bold text-sm flex-shrink-0">
              PN
            </span>
            <span className="text-primary font-bold text-base md:text-xl tracking-wide hidden sm:inline">
              Phatcharaporn
            </span>
          </a>

          {/* links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.href.slice(1))}
                className={`px-3 lg:px-4 py-2 rounded-full text-sm transition-colors ${
                  active === link.href.slice(1)
                    ? "bg-quaternary/20 text-quaternary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 bg-quaternary text-tertiary py-2 px-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Hire me <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* menu button */}
            <button
              className="md:hidden text-primary p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 py-3 space-y-1 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActive(link.href.slice(1));
                  setOpen(false);
                }}
                className={`flex items-center px-3 py-2.5 rounded-xl text-sm transition-colors ${
                  active === link.href.slice(1)
                    ? "bg-quaternary/20 text-quaternary"
                    : "text-secondary hover:text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-quaternary text-tertiary py-2.5 px-4 rounded-full text-sm font-medium w-full hover:opacity-90 transition-opacity"
              >
                Hire me <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="bg-tertiary px-8 md:px-16 lg:px-24 pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

        <div
          className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(circle, #FF9B51 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-10"
          style={{
            background: "radial-gradient(circle, #FF9B51 0%, transparent 70%)",
          }}
        />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 relative z-10">
          {/* Left */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="fade-left delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-quaternary/40 bg-quaternary/10 w-fit">
              <span className="text-quaternary text-sm font-medium">
                Available for new opportunities
              </span>
            </div>

            {/* Name */}
            <div className="fade-left delay-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-primary">Hi, I'm </span>
                <span className="text-quaternary">Phatcharaporn</span>
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight gradient-text">
                Nilphong.
              </h1>
              <div className="flex items-center gap-3 mt-3">
                <div className="h-px w-8 bg-quaternary" />
                <p className="text-secondary text-xl md:text-2xl font-medium">
                  Web Developer · Frontend-focused
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="fade-left delay-3 text-secondary text-base md:text-md leading-relaxed max-w-md">
              A Web Developer graduate with real-world experience through a
              Co-op internship. Open-minded, growth-driven, and always ready to
              learn whatever it takes to deliver great work.
            </p>

            {/* Buttons */}
            <div className="fade-left delay-4 flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-quaternary text-primary py-3 px-7 rounded-full text-base font-medium hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/Resume_Phatcharaporn_Nilphong.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-outline border border-secondary text-primary py-3 px-7 rounded-full text-base font-medium"
              >
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>

            <div className="fade-left delay-5 flex flex-wrap items-center gap-6 pt-2 text-sm text-secondary/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-quaternary" />
                Khon Kaen, Thailand
              </div>
            </div>
          </div>

          <div className="fade-right delay-2 flex-shrink-0 relative">
            <div
              className="absolute -top-6 -right-6 w-28 h-28 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #B9E5E8 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-28 h-28 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #B9E5E8 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />

            <div className="absolute inset-0 rounded-3xl bg-quaternary/20 translate-x-4 translate-y-4" />

            {/* Image */}
            <div className="w-60 md:w-64 lg:w-72 relative z-10">
              <img
                src="/img/Miw.jpg"
                alt="profile"
                className="w-full h-full object-cover rounded-3xl"
                style={{ aspectRatio: "3/4" }}
              />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-20 border-y border-white/10 py-5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 text-xl md:text-2xl font-bold text-secondary/30">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-12 shrink-0">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Node.js",
                  "MySQL",
                  "MongoDB",
                ].map((w) => (
                  <span key={w} className="flex items-center gap-12">
                    {w} <span className="text-quaternary">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
