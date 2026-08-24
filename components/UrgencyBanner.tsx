"use client";

export default function UrgencyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#173257] text-white text-center text-sm py-2.5 px-4 flex items-center justify-center gap-3 flex-wrap">
      <span className="w-2 h-2 rounded-full bg-[#A2C049] animate-pulse shrink-0" />
      <span>
        Cerramos inscripciones el{" "}
        <strong className="text-[#A2C049]">21 de septiembre</strong>
        <span className="hidden sm:inline"> · Aún estás a tiempo de estudiar en línea, a tu ritmo</span>
      </span>
      <a
        href="#formulario"
        className="shrink-0 bg-[#A2C049] text-[#173257] font-bold text-xs px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
      >
        Me interesa
      </a>
    </div>
  );
}
