"use client";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[#EAF1FB] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3">
      <a
        href="#formulario"
        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#26529C] to-[#173257] text-white font-bold py-3.5 rounded-full shadow-md shadow-[#26529C]/20"
      >
        Hablar con un asesor
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
