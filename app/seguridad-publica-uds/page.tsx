import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { seguridadPublicaData } from "@/data/seguridad-publica"

export const metadata: Metadata = {
  title: "Licenciatura en Seguridad Pública en Línea | UDS Mi Universidad",
  description: "Estudia Seguridad Pública 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  keywords: ["licenciatura en seguridad pública en línea", "carrera de seguridad virtual", "criminología online México"],
  openGraph: {
    title: "Licenciatura en Seguridad Pública en Línea | UDS Mi Universidad",
    description: "Estudia Seguridad Pública 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
    url: "https://demo.aulaconsultoria.mx/seguridad-publica-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Seguridad Pública en Línea | UDS Mi Universidad",
    description: "Estudia Seguridad Pública 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  },
}

export default function SeguridadPublicaPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_SEGURIDAD_PUBLICA ?? ""
  return <LandingPage data={seguridadPublicaData} webhookUrl={webhookUrl} />
}
