import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { administracionNegociosData } from "@/data/administracion-negocios"

export const metadata: Metadata = {
  title: "Licenciatura en Administración y Negocios en Línea | UDS Mi Universidad",
  description: "Estudia Administración y Negocios en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título con validez en toda la república.",
  keywords: ["licenciatura en administración y negocios en línea", "carrera de negocios virtual", "administración de empresas online"],
  openGraph: {
    title: "Licenciatura en Administración y Negocios en Línea | UDS Mi Universidad",
    description: "Estudia Administración y Negocios en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título con validez en toda la república.",
    url: "https://demo.aulaconsultoria.mx/administracion-negocios-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Administración y Negocios en Línea | UDS Mi Universidad",
    description: "Estudia Administración y Negocios en línea sin dejar de trabajar. RVOE Federal SEP. Beca del 50%. Título con validez nacional.",
  },
}

export default function AdministracionNegociosPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_ADMINISTRACION_NEGOCIOS ?? ""
  return <LandingPage data={administracionNegociosData} webhookUrl={webhookUrl} />
}
