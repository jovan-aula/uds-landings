"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import type { PlanEstudiosData } from "@/types/landing";

interface Props {
  data: PlanEstudiosData
}

export default function PlanEstudios({ data }: Props) {
  const [abierto, setAbierto] = useState<number | null>(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="plan" ref={ref} className="py-20 bg-[#F6F8FB]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center lg:text-left"
        >
          <span className="text-[#A2C049] text-sm font-bold uppercase tracking-widest">Plan de estudios</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#173257] mt-2">
            {data.titulo}
          </h2>
          <p className="text-[#222B3A]/60 mt-2 text-sm">{data.descripcion}</p>

          {/* RVOE destacado */}
          <div className="mt-4 inline-flex items-center gap-2.5 bg-[#173257] text-white text-xs font-bold px-4 py-2.5 rounded-full">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A2C049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            {data.rvoeLabel}
            <span className="ml-1 bg-[#A2C049] text-[#173257] px-2 py-0.5 rounded-full text-[10px] font-black">OFICIAL</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-2">
          {data.cuatrimestres.map((c, i) => {
            const isOpen = abierto === c.num;
            const isLast = c.num === data.cuatrimestres.length;
            return (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                  isLast ? "lg:col-span-2 lg:max-w-[calc(50%-4px)]" : ""
                } ${
                  isOpen
                    ? "border-[#26529C]/30 bg-white shadow-md shadow-[#26529C]/5"
                    : "border-[#EAF1FB] bg-white hover:border-[#26529C]/20"
                }`}
              >
                <button
                  onClick={() => setAbierto(isOpen ? null : c.num)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Número con gradiente */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-all ${
                      isOpen
                        ? "bg-gradient-to-br from-[#26529C] to-[#173257] text-white shadow-md shadow-[#26529C]/30"
                        : "bg-[#EAF1FB] text-[#26529C]"
                    }`}>
                      {c.num}°
                    </div>
                    <div>
                      <span className={`font-bold text-sm transition-colors ${isOpen ? "text-[#26529C]" : "text-[#173257]"}`}>
                        {data.periodoLabel ?? "Cuatrimestre"} {c.num}
                      </span>
                      {!isOpen && (
                        <p className="text-[#222B3A]/40 text-xs mt-0.5">{c.materias.length} materias</p>
                      )}
                    </div>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#26529C" : "#A2C049"} strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {/* Línea divisora azul */}
                      <div className="mx-5 h-px bg-gradient-to-r from-[#26529C]/20 to-transparent mb-4" />
                      <ul className="px-5 pb-5 grid sm:grid-cols-2 gap-2">
                        {c.materias.map((m, idx) => (
                          <li
                            key={m}
                            className={`flex items-start gap-2.5 text-sm text-[#222B3A] ${
                              c.materias.length % 2 !== 0 && idx === c.materias.length - 1
                                ? "sm:col-span-2 sm:max-w-[50%]"
                                : ""
                            }`}
                          >
                            <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#A2C049] shrink-0" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
