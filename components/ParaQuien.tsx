"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { ParaQuienData } from "@/types/landing";

interface Props {
  data: ParaQuienData
}

export default function ParaQuien({ data }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:text-left"
        >
          <span className="text-[#A2C049] text-sm font-bold uppercase tracking-widest">Para quién es</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#173257] mt-2">
            {data.titulo ?? "Esta carrera es para ti si…"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.perfiles.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F6F8FB] rounded-2xl p-7 border border-[#EAF1FB] hover:border-[#26529C] transition-colors"
            >
              <div className="w-10 h-1 bg-[#A2C049] rounded-full mb-5" />
              <h3 className="font-bold text-[#173257] text-lg mb-3">{p.titulo}</h3>
              <p className="text-[#222B3A] text-sm leading-relaxed">{p.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
