import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { cienciasEducacionData } from "@/data/ciencias-educacion"

export const metadata: Metadata = {
  title: "Licenciatura en Ciencias de la Educación en Línea | UDS Mi Universidad",
  description: "Estudia Ciencias de la Educación 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  keywords: ["licenciatura en ciencias de la educación en línea", "carrera de educación virtual", "pedagogía online México"],
  openGraph: {
    title: "Licenciatura en Ciencias de la Educación en Línea | UDS Mi Universidad",
    description: "Estudia Ciencias de la Educación 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
    url: "https://demo.aulaconsultoria.mx/ciencias-educacion-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Ciencias de la Educación en Línea | UDS Mi Universidad",
    description: "Estudia Ciencias de la Educación 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  },
}

export default function CienciasEducacionPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_CIENCIAS_EDUCACION ?? ""
  return <LandingPage data={cienciasEducacionData} webhookUrl={webhookUrl} />
}
