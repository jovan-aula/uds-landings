"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { BeneficiosData } from "@/types/landing";

interface Props {
  data: BeneficiosData
}

export default function Beneficios({ data }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="beneficios" ref={ref} className="py-20 bg-[#173257]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-[#A2C049] text-sm font-bold uppercase tracking-widest">Por qué UDS</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white mt-2">
            {data.titulo}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((b, i) => (
            <motion.div
              key={b.titulo}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="mb-4">
                <span className="text-4xl font-black text-[#A2C049]">{b.num}</span>
                {b.unidad && (
                  <span className="text-[#A2C049] font-medium ml-1 text-lg">{b.unidad}</span>
                )}
              </div>
              <h3 className="text-white font-bold mb-2">{b.titulo}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{b.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
