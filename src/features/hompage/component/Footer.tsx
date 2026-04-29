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
        className="relative py-24 md:py-25 border-t overflow-hidden bg-tertiary"
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${cursor.x}% ${cursor.y}%, hsl(24 100% 66% / 0.18), transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <p className="text-sm uppercase tracking-[0.2em] text-quaternary mb-4 font-semibold">— Contact —</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1] mb-6 text-primary">
              Let's build<br />
              something <span className="gradient-text italic">good.</span>
            </h2>
            <p className="text-lg text-secondary max-w-xl mx-auto">
              Currently open to new opportunities. Reach out — I'll get back to you as soon as I can.
            </p>
            
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto reveal">
            {contacts.map((c) => (
              <button
                key={c.label}
                onClick={() => c.link ? window.open(c.value, "_blank") : copy(c.value, c.label)}
                className="group text-left p-6 rounded-2xl border border-secondary/50 bg-card/60 backdrop-blur hover:border-quaternary hover:bg-card transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-quaternary grid place-items-center group-hover:bg-quaternary group-hover:text-tertiary transition-colors">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="w-9 h-9 rounded-full border border-border grid place-items-center text-secondary group-hover:text-quaternary group-hover:border-quaternary transition-colors">
                    {copied === c.label ? <Check className="w-4 h-4 text-quaternary" /> : c.link ? <ArrowUpRight className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </div>
                </div>
                <p className="text-xs uppercase tracking-widest text-secondary mb-1.5">{c.label}</p>
                <p className="font-semibold text-primary break-all">{c.display}</p>
                <p className="text-xs text-secondary/70 mt-3">
                  {copied === c.label ? "✓ Copied to clipboard" : c.link ? "Click to open →" : "Click to copy"}
                </p>
              </button>
            ))}
          </div>

          {/* Footer bar */}
          <div className="mt-20 pt-8 border-t border-secondary/50 max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-quaternary  grid place-items-center font-bold text-xs">PN</span>
              <span className="text-secondary">© 2026 Phatcharaporn Nilphong</span>
            </div>
            <p className="text-secondary">Created with Next.js + Tailwind CSS</p>
          </div>
        </div>
      </section>
    </>
  );
}