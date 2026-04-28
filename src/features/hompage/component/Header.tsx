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
        {/* Hero */}
<section
  id="about"
  className="bg-tertiary px-8 md:px-16 lg:px-24 py-16 md:py-24 relative overflow-hidden"
>
  {/* Background decorations */}
  <div
    className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
    style={{
      background: "radial-gradient(circle, #7AB2D3 0%, transparent 70%)",
    }}
  />
  <div
    className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none"
    style={{
      background: "radial-gradient(circle, #B9E5E8 0%, transparent 70%)",
    }}
  />

  <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 relative z-10">
    
    {/* Left */}
    <div className="flex flex-col gap-6 flex-1">
      {/* <div className="fade-left delay-1 flex items-center">
        <span className="text-primary text-sm bg-quaternary md:text-base font-medium rounded-full px-3 py-1">
          Available for work
        </span>
      </div> */}

      <div className="fade-left delay-2">
        <p className="text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          Phatcharaporn
        </p>
        <p className="text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          Nilphong
        </p>
        <div className="flex items-center gap-3 mt-3">
          <div className="h-px w-8 bg-quaternary" />
          <p className="text-quaternary text-xl md:text-2xl font-medium">
            Web Developer
          </p>
        </div>
      </div>

      <p className="fade-left delay-3 text-secondary text-base md:text-lg leading-relaxed max-w-md">
        A Web Developer graduate with real-world experience through a Co-op internship. 
        Open-minded, growth-driven, and always ready to learn whatever it takes to deliver great work.
      </p>

      <div className="fade-left delay-4 flex gap-4 flex-wrap">
        <a
          href="#contact"
          className="bg-quaternary text-primary py-3 px-7 rounded-xl text-base md:text-lg font-medium cursor-pointer hover:opacity-90 transition-opacity"
        >
          Contact Me
        </a>
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
    <div className="fade-right delay-2 flex-shrink-0 relative">
      
      <div
        className="absolute -top-6 -right-6 w-28 h-28 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #B9E5E8 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div
        className="absolute -bottom-6 -left-6 w-28 h-28 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #B9E5E8 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* Accent box behind image */}
      <div className="absolute inset-0 rounded-3xl bg-quaternary/20 translate-x-4 translate-y-4" />

      {/* Image */}
      <div className="w-60 md:w-64 lg:w-80 relative z-10">
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
