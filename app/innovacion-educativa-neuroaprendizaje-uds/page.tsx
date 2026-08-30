import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { innovacionEducativaNeuroaprendizajeData } from "@/data/innovacion-educativa-neuroaprendizaje"

export const metadata: Metadata = {
  title: "Doctorado en Innovación Educativa y Neuroaprendizaje | UDS Mi Universidad",
  description: "Doctorado en Innovación Educativa y Neuroaprendizaje en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Cédula con validez nacional.",
  keywords: ["doctorado en innovación educativa", "neuroaprendizaje en línea", "doctorado educación virtual México"],
  robots: { index: false, follow: false },
  openGraph: {
    title: "Doctorado en Innovación Educativa y Neuroaprendizaje | UDS Mi Universidad",
    description: "Doctorado en Innovación Educativa y Neuroaprendizaje en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Cédula con validez nacional.",
    url: "https://demo.aulaconsultoria.mx/innovacion-educativa-neuroaprendizaje-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctorado en Innovación Educativa y Neuroaprendizaje | UDS Mi Universidad",
    description: "Doctorado en Innovación Educativa y Neuroaprendizaje en línea sin dejar de trabajar. RVOE Federal SEP. Beca del 50%. Cédula con validez nacional.",
  },
}

export default function InnovacionEducativaNeuroaprendizajePage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_INNOVACION_EDUCATIVA ?? ""
  return <LandingPage data={innovacionEducativaNeuroaprendizajeData} webhookUrl={webhookUrl} />
}
