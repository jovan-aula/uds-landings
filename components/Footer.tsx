"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#173257] pt-10 pb-20 lg:pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo blanco */}
          <a href="/">
            <Image
              src="/logo-uds-white.svg"
              alt="UDS Mi Universidad"
              width={200}
              height={68}
              className="h-16 w-auto brightness-0 invert"
            />
          </a>

          {/* Contacto */}
          <div className="flex flex-col gap-2 text-sm text-white/60">
            <a href="tel:9631207866" className="hover:text-white transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              963 120 78 66
            </a>
            <a href="mailto:udscontacto@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              udscontacto@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              Lun–Sáb · 8:00 am – 3:00 pm
            </span>
          </div>

          {/* Redes */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/udsmiuniversidad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#26529C] flex items-center justify-center transition-colors"
              aria-label="Facebook UDS"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/udsmiuniversidad/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#833ab4] hover:to-[#fd1d1d] flex items-center justify-center transition-colors"
              aria-label="Instagram UDS"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© {new Date().getFullYear()} UDS · Universidad del Sureste. Todos los derechos reservados.</span>
          <span className="flex items-center gap-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            Tu información está segura con nosotros
          </span>
        </div>
      </div>
    </footer>
  );
}
