"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_DERECHO ?? "";

export default function FormularioGHL() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("enviando");
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, programa: "Licenciatura en Derecho" }),
      });
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  };

  return (
    <section id="formulario" ref={ref} className="py-20 bg-[#EAF1FB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Copy lateral */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <span className="text-[#A2C049] text-sm font-bold uppercase tracking-widest">Da el siguiente paso</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#173257] mt-2 mb-5">
              Un asesor te contactará en menos de 24 horas
            </h2>
            <ul className="space-y-4 mb-8 text-left">
              {[
                "Sin compromiso de inscripción",
                "Te explicamos costo y cómo aplicar tu beca del 50%",
                "Proceso de admisión 100% en línea",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#A2C049] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#173257" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#222B3A]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Urgencia */}
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-[#EAF1FB] shadow-sm w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#A2C049] animate-pulse shrink-0" />
              <span className="text-xs font-semibold text-[#173257]">
                Cerramos inscripciones el 21 de septiembre
              </span>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {estado === "ok" ? (
              <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-[#A2C049] flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-[#173257] mb-2">¡Listo!</h3>
                <p className="text-[#222B3A] text-sm">Un asesor de UDS te contactará muy pronto por WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
                <div>
                  <h3 className="text-lg font-black text-[#173257]">Solicita información</h3>
                  <p className="text-xs text-[#222B3A]/50 mt-1">Tu información está segura con nosotros.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173257] mb-1.5">Nombre completo *</label>
                  <input
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={onChange}
                    placeholder="Ana García"
                    className="w-full border border-[#EAF1FB] bg-[#F6F8FB] rounded-lg px-4 py-3 text-sm text-[#222B3A] focus:outline-none focus:border-[#26529C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173257] mb-1.5">Correo electrónico *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="ana@email.com"
                    className="w-full border border-[#EAF1FB] bg-[#F6F8FB] rounded-lg px-4 py-3 text-sm text-[#222B3A] focus:outline-none focus:border-[#26529C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#173257] mb-1.5">WhatsApp *</label>
                  <input
                    name="telefono"
                    type="tel"
                    required
                    value={form.telefono}
                    onChange={onChange}
                    placeholder="963 000 0000"
                    className="w-full border border-[#EAF1FB] bg-[#F6F8FB] rounded-lg px-4 py-3 text-sm text-[#222B3A] focus:outline-none focus:border-[#26529C] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={estado === "enviando"}
                  className="w-full bg-[#26529C] hover:bg-[#173257] disabled:opacity-60 text-white font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#26529C]/20"
                >
                  {estado === "enviando" ? "Enviando..." : "Hablar con un asesor →"}
                </button>

                {estado === "error" && (
                  <p className="text-red-500 text-xs text-center">Hubo un error. Intenta de nuevo.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
