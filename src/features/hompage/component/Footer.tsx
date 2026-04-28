"use client";
import { useState } from "react";

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
      copyable: true,
    },
    {
      label: "Phone",
      value: "0652484327",
      display: "065 248 4327",
      copyable: true,
    },
    {
      label: "GitHub",
      value: "https://github.com/phatcharaporn-miew/",
      display: "github.com/phatcharaporn-miew",
      copyable: false,
      link: true,
    },
  ];

  return (
    <>
      <style>{`
        .contact-item {
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .contact-item:hover {
          transform: translateY(-3px);
        }
      `}</style>

      <div id="contact" className="bg-tertiary">
        <div className="px-8 md:px-16 lg:px-24 py-16 md:py-24">

          {/* Heading */}
          <span className="text-quaternary text-sm md:text-base font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 mb-4">
            Let's work together
          </h2>
          <p className="text-secondary text-sm md:text-base lg:text-lg max-w-lg mb-12 leading-relaxed">
            I'm currently open to new opportunities. Feel free to reach out — 
            I'll get back to you as soon as possible!
          </p>

          {/* Contact Items */}
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="contact-item flex-1 bg-white/10 border border-white/20 rounded-2xl p-5 md:p-6 cursor-pointer"
                onClick={() =>
                  c.link
                    ? window.open(c.value, "_blank")
                    : handleCopy(c.value, c.label)
                }
              >
                <span className="text-quaternary text-xs md:text-sm font-semibold uppercase tracking-widest block mb-2">
                  {c.label}
                </span>
                <p className="text-primary text-sm md:text-base lg:text-lg font-medium break-all">
                  {c.display}
                </p>
                <p className="text-secondary text-xs md:text-sm mt-2">
                  {copied === c.label
                    ? "✓ Copied!"
                    : c.link
                    ? "Click to open →"
                    : "Click to copy"}
                </p>
              </div>
            ))}
          </div>

          <hr className="border-white/20 mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-primary text-xl md:text-2xl font-semibold">PN</span>
            <p className="text-secondary text-xs md:text-sm text-center">
              © 2026 Phatcharaporn Nilphong · Web Developer
            </p>
            <p className="text-secondary text-xs md:text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>

        </div>
      </div>
    </>
  );
}