import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { contabilidadData } from "@/data/contabilidad"

export const metadata: Metadata = {
  title: "Licenciatura en Contabilidad Financiera en Línea | UDS Mi Universidad",
  description: "Estudia Contabilidad Financiera en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
  keywords: ["licenciatura en contabilidad en línea", "carrera de contabilidad virtual", "contador online México"],
  openGraph: {
    title: "Licenciatura en Contabilidad Financiera en Línea | UDS Mi Universidad",
    description: "Estudia Contabilidad Financiera en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
    url: "https://demo.aulaconsultoria.mx/contabilidad-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Contabilidad Financiera en Línea | UDS Mi Universidad",
    description: "Estudia Contabilidad Financiera en línea sin dejar de trabajar. RVOE Federal SEP. Beca del 50%. Título y cédula con validez nacional.",
  },
}

export default function ContabilidadPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_CONTABILIDAD ?? ""
  return <LandingPage data={contabilidadData} webhookUrl={webhookUrl} />
}
