"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Plan de estudios", href: "#plan" },
  { label: "Por qué UDS", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-[44px] left-0 right-0 z-50 bg-white border-b border-[#EAF1FB] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/logo-uds.svg"
            alt="UDS Mi Universidad"
            width={220}
            height={72}
            className="h-16 w-auto"
            priority
          />
        </a>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#173257] hover:text-[#26529C] font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#formulario"
          className="hidden md:flex shrink-0 bg-[#26529C] hover:bg-[#173257] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors items-center gap-1.5"
        >
          Solicita información
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#173257]"
          aria-label="Menú"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></> : <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#EAF1FB] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#173257] font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#formulario"
            onClick={() => setOpen(false)}
            className="bg-[#26529C] text-white text-sm font-medium px-5 py-3 rounded-full text-center"
          >
            Solicita información →
          </a>
        </div>
      )}
    </nav>
  );
}
