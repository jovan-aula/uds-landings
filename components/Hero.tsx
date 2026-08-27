"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { HeroData } from "@/types/landing";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

interface Props {
  data: HeroData
}

export default function Hero({ data }: Props) {
  return (
    <section className="relative bg-[#EAF1FB] pt-44 overflow-hidden">
      {/* Blob decorativo fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#26529C] opacity-[0.06] translate-x-1/4 -translate-y-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 items-end lg:min-h-[560px]">

          {/* Copy — izquierda */}
          <div className="pb-16 lg:pb-20 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

            {/* Badges superiores */}
            <motion.div {...fade(0)} className="flex items-center gap-2 mb-5 flex-wrap justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 bg-[#173257] text-white text-xs font-bold px-4 py-2 rounded-full">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A2C049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                {data.badge1}
              </span>
              <span className="inline-block bg-[#A2C049] text-[#173257] text-xs font-bold px-3 py-2 rounded-full">
                {data.badge2}
              </span>
            </motion.div>

            {/* H1 — jerarquía editorial: eyebrow → programa → gancho */}
            <motion.h1 {...fade(0.1)} className="mb-4 w-full">
              {(() => {
                if (data.h1Line1.startsWith("Estudia ") && data.h1Line1.endsWith(" en línea")) {
                  const tipo = data.badge2.split("·")[0].trim();
                  const programa = data.h1Line1.slice(8, -9);
                  return (
                    <>
                      <span className="block text-sm font-semibold text-[#173257]/50 uppercase tracking-widest mb-1">
                        {tipo} · en línea
                      </span>
                      <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#173257] leading-[1.05] mb-2">
                        {programa}
                      </span>
                    </>
                  );
                }
                if (data.h1Line1.startsWith("Especialízate en ")) {
                  const tipo = data.badge2.split("·")[0].trim();
                  const programa = data.h1Line1.slice(17);
                  return (
                    <>
                      <span className="block text-sm font-semibold text-[#173257]/50 uppercase tracking-widest mb-1">
                        {tipo} · en línea
                      </span>
                      <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#173257] leading-[1.05] mb-2">
                        {programa}
                      </span>
                    </>
                  );
                }
                return (
                  <span className="block text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#173257] leading-[1.05] mb-2">
                    {data.h1Line1}
                  </span>
                );
              })()}
              <span className="block text-lg sm:text-xl font-bold text-[#26529C] leading-snug">
                {data.h1Line2}
              </span>
            </motion.h1>

            <motion.p {...fade(0.2)} className="text-base text-[#222B3A]/80 mb-2 leading-relaxed max-w-md">
              {data.subtitulo}{" "}
              <strong className="text-[#173257]">{data.subtituloStrong}</strong> con atención personalizada en cada paso.
            </motion.p>

            <motion.p {...fade(0.25)} className="text-sm font-bold text-[#26529C] mb-8">
              {data.tagline}
            </motion.p>

            <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-3">
              <a
                href="#formulario"
                className="bg-gradient-to-r from-[#26529C] to-[#173257] hover:opacity-90 text-white font-bold px-7 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#26529C]/30"
              >
                {data.cta1}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#plan"
                className="border-2 border-[#26529C] text-[#26529C] hover:bg-[#26529C] hover:text-white font-medium px-7 py-4 rounded-full transition-colors flex items-center justify-center"
              >
                {data.cta2}
              </a>
            </motion.div>

          </div>

          {/* Imagen — derecha, pegada abajo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-end justify-center lg:justify-end h-[340px] lg:h-full"
          >
            {/* Círculo grande azul de fondo */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#26529C] opacity-[0.07] translate-x-1/3 translate-y-1/3 pointer-events-none z-0" />
            {/* Círculo verde */}
            <div className="absolute bottom-20 right-20 w-[280px] h-[280px] rounded-full bg-[#A2C049] opacity-[0.07] pointer-events-none z-0" />

            {/* Badge flotante beca */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute top-4 right-2 sm:top-12 sm:right-4 lg:right-0 z-10"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
                className="bg-white rounded-2xl shadow-xl px-4 py-3 border border-[#EAF1FB]"
              >
                <p className="text-xs text-[#222B3A]/60 font-medium">Beca disponible</p>
                <p className="text-2xl font-black text-[#A2C049]">{data.becaPorcentaje}</p>
                <p className="text-xs text-[#173257] font-semibold">en colegiatura</p>
              </motion.div>
            </motion.div>

            {/* Estudiante sin fondo */}
            <div className="relative w-[280px] sm:w-[340px] lg:w-[420px] h-[320px] sm:h-[420px] lg:h-[560px] z-[2]">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                className="object-contain object-bottom mix-blend-multiply"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Trust badges — abajo del hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 py-6 border-t border-[#26529C]/10"
        >
          {data.trustBadges.map((b) => (
            <div
              key={b.label}
              className={`rounded-xl px-4 py-3.5 flex items-center gap-2.5 ${
                b.highlight ? "bg-[#173257]" : "bg-white shadow-sm"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-[#A2C049] shrink-0" />
              <span className={`text-sm font-semibold leading-tight ${b.highlight ? "text-white" : "text-[#173257]"}`}>
                {b.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
