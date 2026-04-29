"use client";
import { useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Code2, Database, GitBranch, Mail, Phone,
  Menu, X, Copy, Check, MapPin, Download, Briefcase, GraduationCap,
} from "lucide-react";



export default function Footer() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    {
      label: "Email",
      value: "Phatcharaporn.nilp@gmail.com",
      display: "Phatcharaporn.nilp@gmail.com",
      icon: Mail,
      copyable: true,
    },
    {
      label: "Phone",
      value: "0652484327",
      display: "065 248 4327",
      icon: Phone,
      copyable: true,
    },
    {
      label: "GitHub",
      value: "https://github.com/phatcharaporn-miw/",
      display: "github.com/phatcharaporn-miw",
      icon: GitBranch,
      copyable: false,
      link: true,
    },
  ];

  const copy = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopied(label);
    setTimeout(() => setCopied(null), 1800);
  };

  // Cursor follower for contact
  const contactRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const onContactMove = (e: React.MouseEvent) => {
    const rect = contactRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  return (
    <>
     <section
  id="contact"
  ref={contactRef}
  onMouseMove={onContactMove}
  className="relative px-8 md:px-16 lg:px-24 py-20 md:py-28 border-t overflow-hidden bg-tertiary"
>
  <div
    className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
    style={{
      background: `radial-gradient(600px circle at ${cursor.x}% ${cursor.y}%, hsl(24 100% 66% / 0.18), transparent 40%)`,
    }}
  />
  <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

  <div className="max-w-5xl mx-auto relative z-10">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 reveal">
      <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-quaternary mb-4 font-semibold">
        — Contact —
      </p>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5 md:mb-6 text-primary">
        Ready to<br />
        start <span className="gradient-text italic">something.</span>
      </h2>
      <p className="text-base md:text-lg text-secondary max-w-xl mx-auto leading-relaxed">
        Fresh graduate, real experience, and eager to grow.
        Feel free to reach out — I'd love to hear from you.
      </p>
    </div>

    {/* Contact Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 reveal">
      {contacts.map((c) => (
        <button
          key={c.label}
          onClick={() => c.link ? window.open(c.value, "_blank") : copy(c.value, c.label)}
          className="group text-left p-5 md:p-6 rounded-2xl border border-secondary/50 bg-card/60 backdrop-blur hover:border-quaternary hover:bg-card transition-all hover:-translate-y-1"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-primary/10 text-quaternary grid place-items-center group-hover:bg-quaternary group-hover:text-tertiary transition-colors">
              <c.icon className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-secondary/50 grid place-items-center text-secondary group-hover:text-quaternary group-hover:border-quaternary transition-colors">
              {copied === c.label
                ? <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-quaternary" />
                : c.link
                ? <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                : <Copy className="w-3.5 h-3.5 md:w-4 md:h-4" />}
            </div>
          </div>
          <p className="text-xs uppercase tracking-widest text-secondary mb-1.5">{c.label}</p>
          <p className="font-semibold text-primary text-sm md:text-base break-all">{c.display}</p>
          <p className="text-xs text-secondary/70 mt-3">
            {copied === c.label
              ? "✓ Copied to clipboard"
              : c.link
              ? "Click to open →"
              : "Click to copy"}
          </p>
        </button>
      ))}
    </div>

    {/* Footer bar */}
    <div className="mt-16 md:mt-20 pt-6 md:pt-8 border-t border-secondary/50 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm">
      <div className="flex items-center gap-3">
        <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-quaternary grid place-items-center font-bold text-xs text-tertiary">
          PN
        </span>
        <span className="text-secondary">© 2026 Phatcharaporn Nilphong</span>
      </div>
      <p className="text-secondary">Created with Next.js + Tailwind CSS</p>
    </div>

  </div>
</section>
    </>
  );
}