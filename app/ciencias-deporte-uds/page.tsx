import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { cienciasDeporteData } from "@/data/ciencias-deporte"

export const metadata: Metadata = {
  title: "Licenciatura en Ciencias del Deporte y Alto Rendimiento | UDS Mi Universidad",
  description: "Estudia Ciencias del Deporte 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  keywords: ["licenciatura en ciencias del deporte en línea", "carrera de deporte virtual", "entrenamiento deportivo online México"],
  openGraph: {
    title: "Licenciatura en Ciencias del Deporte y Alto Rendimiento | UDS Mi Universidad",
    description: "Estudia Ciencias del Deporte 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
    url: "https://demo.aulaconsultoria.mx/ciencias-deporte-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Ciencias del Deporte y Alto Rendimiento | UDS Mi Universidad",
    description: "Estudia Ciencias del Deporte 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  },
}

export default function CienciasDeportePage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_CIENCIAS_DEPORTE ?? ""
  return <LandingPage data={cienciasDeporteData} webhookUrl={webhookUrl} />
}
