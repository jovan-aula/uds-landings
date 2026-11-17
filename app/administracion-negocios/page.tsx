import type { Metadata } from "next"
import LandingServer from "@/components/LandingServer"

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

export const revalidate = 300

export default function AdministracionNegociosPage() {
  return <LandingServer slug="administracion-negocios" />
}
