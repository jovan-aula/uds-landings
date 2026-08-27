import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { seguridadPublicaData } from "@/data/seguridad-publica"

export const metadata: Metadata = {
  title: "Licenciatura en Seguridad Pública en Línea | UDS Mi Universidad",
  description: "Estudia Seguridad Pública en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
  keywords: ["licenciatura en seguridad pública en línea", "carrera de seguridad virtual", "criminología online México"],
  openGraph: {
    title: "Licenciatura en Seguridad Pública en Línea | UDS Mi Universidad",
    description: "Estudia Seguridad Pública en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
    url: "https://demo.aulaconsultoria.mx/seguridad-publica-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Seguridad Pública en Línea | UDS Mi Universidad",
    description: "Estudia Seguridad Pública en línea sin dejar de trabajar. RVOE Federal SEP. Beca del 50%. Título y cédula con validez nacional.",
  },
}

export default function SeguridadPublicaPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_SEGURIDAD_PUBLICA ?? ""
  return <LandingPage data={seguridadPublicaData} webhookUrl={webhookUrl} />
}
