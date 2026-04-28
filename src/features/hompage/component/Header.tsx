"use client";
import { useEffect, useState } from "react";
import "../../../css/header.css";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className={loaded ? "loaded" : ""}>
        {/* Navbar */}
        <nav className="bg-tertiary px-8 md:px-16 lg:px-24 fade-down">
          <div className="flex flex-row justify-between items-center py-5">
            <span className="text-primary font-bold text-2xl md:text-3xl tracking-wide">
              PN
            </span>
            <div className="flex items-center gap-6 md:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-secondary text-base md:text-lg cursor-pointer hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section
          id="about"
          className="bg-tertiary px-8 md:px-16 lg:px-24 py-16 md:py-24"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
            {/* Left */}
            <div className="flex flex-col gap-6 flex-1">
              <div className="fade-left delay-1">
                <span className="bg-quaternary text-primary text-sm md:text-base py-2 px-5 rounded-full w-fit inline-block">
                  Available for work
                </span>
              </div>

              <div className="fade-left delay-2">
                <p className="text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Phatcharaporn
                </p>
                <p className="text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Nilphong
                </p>
                <p className="text-quaternary text-xl md:text-2xl font-medium mt-2">
                  Web Developer
                </p>
              </div>

              <p className="fade-left delay-3 text-secondary text-base md:text-lg leading-relaxed max-w-lg">
                A recent Web Developer graduate from the College of Computing,
                Khon Kaen University, with hands-on experience building web
                applications through a Co-op internship using React.js, Next.js,
                and TypeScript — covering both Frontend and Full-stack
                development.
              </p>

              <div className="fade-left delay-4 flex gap-4 flex-wrap">
                <a
                  href="/Resume_Phatcharaporn_Nilphong.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border border-secondary text-primary py-3 px-7 rounded-xl text-base md:text-lg font-medium cursor-pointer"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="fade-right delay-3 flex-shrink-0 relative">
              <div className="glow-ring absolute inset-0 rounded-3xl border-2 border-quaternary/40 scale-105" />
              <div
                className="absolute -top-4 -right-4 w-20 h-20 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #7AB2D3 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #7AB2D3 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 8px",
                }}
              />

              <div className="img-float w-56 md:w-64 lg:w-72 relative z-10">
                <img
                  src="/img/Miw.jpg"
                  alt="profile"
                  className="w-full h-full object-cover rounded-3xl"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
