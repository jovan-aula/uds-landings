import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { contabilidadData } from "@/data/contabilidad"

export const metadata: Metadata = {
  title: "Licenciatura en Contabilidad Financiera en Línea | UDS Mi Universidad",
  description: "Estudia Contabilidad Financiera 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  keywords: ["licenciatura en contabilidad en línea", "carrera de contabilidad virtual", "contador online México"],
  openGraph: {
    title: "Licenciatura en Contabilidad Financiera en Línea | UDS Mi Universidad",
    description: "Estudia Contabilidad Financiera 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
    url: "https://demo.aulaconsultoria.mx/contabilidad-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Contabilidad Financiera en Línea | UDS Mi Universidad",
    description: "Estudia Contabilidad Financiera 100% en línea. Título con validez oficial en México. Sin dejar de trabajar.",
  },
}

export default function ContabilidadPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_CONTABILIDAD ?? ""
  return <LandingPage data={contabilidadData} webhookUrl={webhookUrl} />
}
