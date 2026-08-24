"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GHL_WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_WEBHOOK_DERECHO ?? "";

export default function PopupBeca() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok">("idle");

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("enviando");
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, programa: "Licenciatura en Derecho", fuente: "popup-beca" }),
      });
    } catch {
      // silencioso
    }
    setEstado("ok");
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVisible(false)}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />

          {/* Modal — scrollable si pantalla es pequeña */}
          <div className="fixed inset-0 z-[70] overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden max-h-[90dvh] flex flex-col"
            >
              {/* Header navy */}
              <div className="bg-[#173257] px-5 py-4 sm:px-7 sm:py-6 relative shrink-0">
                <button
                  onClick={() => setVisible(false)}
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                  aria-label="Cerrar"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <div className="inline-flex items-center gap-2 bg-[#A2C049] text-[#173257] text-xs font-black px-3 py-1.5 rounded-full mb-4">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  BECAS DISPONIBLES · CICLO 2026
                </div>

                <h2 className="text-white font-black text-lg sm:text-xl leading-tight">
                  Estudia Derecho con hasta{" "}
                  <span className="text-[#A2C049]">50% de beca</span>
                </h2>
                <p className="text-white/70 text-sm mt-1.5">
                  Colegiaturas desde <strong className="text-white">$1,250 al mes</strong> · Título con validez nacional
                </p>

                <div className="flex items-center gap-2 mt-3 bg-white/10 rounded-lg px-3 py-2">
                  <span className="w-2 h-2 rounded-full bg-[#A2C049] animate-pulse shrink-0" />
                  <span className="text-white/90 text-xs font-medium">
                    Cerramos inscripciones el <strong className="text-[#A2C049]">21 de septiembre</strong>
                  </span>
                </div>
              </div>

              {/* Formulario */}
              <div className="px-5 py-4 sm:px-7 sm:py-5 overflow-y-auto">
                {estado === "ok" ? (
                  <div className="text-center py-4">
                    <div className="w-12 h-12 rounded-full bg-[#A2C049] flex items-center justify-center mx-auto mb-3">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <p className="font-black text-[#173257] text-lg">¡Listo!</p>
                    <p className="text-[#222B3A] text-sm mt-1">Un asesor te contactará muy pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-3">
                    <p className="text-[#173257] font-semibold text-sm mb-3">
                      Déjanos tus datos y un asesor te explica cómo aplicar tu beca:
                    </p>

                    <input
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={onChange}
                      placeholder="Tu nombre completo"
                      className="w-full border border-[#EAF1FB] bg-[#F6F8FB] rounded-lg px-4 py-3 text-sm text-[#222B3A] focus:outline-none focus:border-[#26529C] transition-colors"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      placeholder="Tu correo electrónico"
                      className="w-full border border-[#EAF1FB] bg-[#F6F8FB] rounded-lg px-4 py-3 text-sm text-[#222B3A] focus:outline-none focus:border-[#26529C] transition-colors"
                    />
                    <input
                      name="telefono"
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={onChange}
                      placeholder="Tu WhatsApp"
                      className="w-full border border-[#EAF1FB] bg-[#F6F8FB] rounded-lg px-4 py-3 text-sm text-[#222B3A] focus:outline-none focus:border-[#26529C] transition-colors"
                    />

                    <button
                      type="submit"
                      disabled={estado === "enviando"}
                      className="w-full bg-[#A2C049] hover:opacity-90 text-[#173257] font-black py-3.5 rounded-full transition-opacity flex items-center justify-center gap-2"
                    >
                      {estado === "enviando" ? "Enviando..." : "Quiero conocer mi beca →"}
                    </button>

                    <button
                      type="button"
                      onClick={() => setVisible(false)}
                      className="w-full text-[#222B3A]/40 text-xs hover:text-[#222B3A]/70 transition-colors py-1"
                    >
                      No me interesa la beca
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
