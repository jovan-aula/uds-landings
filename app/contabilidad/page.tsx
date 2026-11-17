import type { Metadata } from "next"
import LandingServer from "@/components/LandingServer"

export const metadata: Metadata = {
  title: "Licenciatura en Contabilidad Financiera en Línea | UDS Mi Universidad",
  description: "Estudia Contabilidad Financiera en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
  keywords: ["licenciatura en contabilidad en línea", "carrera de contabilidad virtual", "contador online México"],
  openGraph: {
    title: "Licenciatura en Contabilidad Financiera en Línea | UDS Mi Universidad",
    description: "Estudia Contabilidad Financiera en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
    url: "https://landing.uds.edu.mx/contabilidad",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/hero-contabilidad.png", alt: "Licenciatura en Contabilidad Financiera · UDS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Contabilidad Financiera en Línea | UDS Mi Universidad",
    description: "Estudia Contabilidad Financiera en línea sin dejar de trabajar. RVOE Federal SEP. Beca del 50%. Título y cédula con validez nacional.",
  },
}

export const revalidate = 300

export default function ContabilidadPage() {
  return <LandingServer slug="contabilidad" />
}
