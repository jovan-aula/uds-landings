import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { cienciasEducacionData } from "@/data/ciencias-educacion"

export const metadata: Metadata = {
  title: "Licenciatura en Ciencias de la Educación en Línea | UDS Mi Universidad",
  description: "Estudia Ciencias de la Educación en línea sin dejar de trabajar · 4 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
  keywords: ["licenciatura en ciencias de la educación en línea", "carrera de educación virtual", "pedagogía online México"],
  openGraph: {
    title: "Licenciatura en Ciencias de la Educación en Línea | UDS Mi Universidad",
    description: "Estudia Ciencias de la Educación en línea sin dejar de trabajar · 4 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
    url: "https://demo.aulaconsultoria.mx/ciencias-educacion-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Ciencias de la Educación en Línea | UDS Mi Universidad",
    description: "Estudia Ciencias de la Educación en línea sin dejar de trabajar. RVOE Federal SEP. Beca del 50%. Título y cédula con validez nacional.",
  },
}

export default function CienciasEducacionPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_CIENCIAS_EDUCACION ?? ""
  return <LandingPage data={cienciasEducacionData} webhookUrl={webhookUrl} />
}
