"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonios = [
  {
    nombre: "Gabriela Torres",
    rol: "Egresada · Licenciatura en Derecho",
    cita: "Estudiar en línea me permitió combinar el trabajo con mi carrera. Hoy tengo mi cédula y ejerzo con orgullo.",
    inicial: "G",
    color: "bg-[#26529C]",
  },
  {
    nombre: "Marco Ramírez",
    rol: "Estudiante · 7° cuatrimestre",
    cita: "La atención de los asesores es excelente. Siempre tuve acompañamiento en cada duda y cada trámite.",
    inicial: "M",
    color: "bg-[#173257]",
  },
  {
    nombre: "Sofía Mendoza",
    rol: "Egresada · Licenciatura en Derecho",
    cita: "Lo mejor fue estudiar a mi ritmo sin descuidar mi trabajo. La plataforma es muy fácil de usar.",
    inicial: "S",
    color: "bg-[#A2C049]",
  },
];

export default function Testimonios() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonios" ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:text-left"
        >
          <span className="text-[#A2C049] text-sm font-bold uppercase tracking-widest">Testimonios</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#173257] mt-2">
            Lo que dicen nuestros estudiantes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F6F8FB] rounded-2xl p-7 border border-[#EAF1FB] flex flex-col"
            >
              <svg className="mb-5 text-[#26529C] opacity-20" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[#222B3A] text-sm leading-relaxed flex-1 mb-6">"{t.cita}"</p>
              <div>
                <p className="font-bold text-[#173257] text-sm">{t.nombre}</p>
                <p className="text-[#222B3A]/60 text-xs">{t.rol}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
