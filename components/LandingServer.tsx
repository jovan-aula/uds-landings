import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import { landings } from "@/data/landings";
import { getValoresCRM } from "@/lib/ghl";

/**
 * Carga la landing y le aplica los datos que la UDS edita en el CRM
 * (Configuración → Valores personalizados). Nombres esperados:
 *   UDS · WhatsApp general                       → 529631207866
 *   UDS · Cierre de inscripciones                → 15 de enero   (aplica a todas)
 *   UDS · <Programa> · Cierre de inscripciones   → 15 de enero   (solo ese programa)
 *   UDS · <Programa> · Beca                      → 50%
 *   UDS · <Programa> · Colegiatura desde         → $1,250 al mes
 */
export default async function LandingServer({ slug }: { slug: string }) {
  const base = landings[slug];
  if (!base) notFound();

  const v = await getValoresCRM();
  const p = `UDS · ${base.crm.nombreCRM} · `;
  const cierre = v[`${p}Cierre de inscripciones`] ?? v["UDS · Cierre de inscripciones"] ?? base.urgency.fechaCierre;
  const beca = v[`${p}Beca`] ?? base.hero.becaPorcentaje;
  const precio = v[`${p}Colegiatura desde`] ?? base.popup.precioDesde;
  const whatsapp = (v["UDS · WhatsApp general"] ?? base.whatsapp.number).replace(/\D/g, "");

  const data = {
    ...base,
    urgency: { fechaCierre: cierre },
    hero: { ...base.hero, becaPorcentaje: beca },
    formulario: {
      ...base.formulario,
      urgenciaTexto: cierre ? `Cerramos inscripciones el ${cierre}` : "Inscripciones abiertas",
    },
    popup: { ...base.popup, urgenciaFecha: cierre, precioDesde: precio },
    whatsapp: { ...base.whatsapp, number: whatsapp },
  };

  return <LandingPage data={data} slug={slug} />;
}
