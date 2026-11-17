import type { Metadata } from "next"
import LandingServer from "@/components/LandingServer"

export const metadata: Metadata = {
  title: "Maestría en Administración de Centros Hospitalarios | UDS Mi Universidad",
  description: "Maestría en Administración de Centros Hospitalarios en línea sin dejar de trabajar · 2 años · RVOE Federal SEP. Beca del 50%. Cédula con validez nacional.",
  keywords: ["maestría en administración hospitalaria", "gestión de centros de salud", "administración hospitalaria en línea"],
  openGraph: {
    title: "Maestría en Administración de Centros Hospitalarios | UDS Mi Universidad",
    description: "Maestría en Administración de Centros Hospitalarios en línea sin dejar de trabajar · 2 años · RVOE Federal SEP. Beca del 50%. Cédula con validez nacional.",
    url: "https://demo.aulaconsultoria.mx/centros-hospitalarios-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maestría en Administración de Centros Hospitalarios | UDS Mi Universidad",
    description: "Maestría en Administración Hospitalaria en línea sin dejar de trabajar. RVOE Federal SEP. Beca del 50%. Cédula con validez nacional.",
  },
}

export const revalidate = 300

export default function CentrosHospitalariosPage() {
  return <LandingServer slug="centros-hospitalarios" />
}
