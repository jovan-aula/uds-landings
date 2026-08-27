import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { centrosHospitalariesData } from "@/data/centros-hospitalarios"

export const metadata: Metadata = {
  title: "Maestría en Administración de Centros Hospitalarios | UDS Mi Universidad",
  description: "Especialízate en gestión hospitalaria 100% en línea. Maestría con validez oficial en México. Sin dejar de trabajar.",
  keywords: ["maestría en administración hospitalaria", "gestión de centros de salud", "administración hospitalaria en línea"],
  openGraph: {
    title: "Maestría en Administración de Centros Hospitalarios | UDS Mi Universidad",
    description: "Especialízate en gestión hospitalaria 100% en línea. Maestría con validez oficial en México. Sin dejar de trabajar.",
    url: "https://demo.aulaconsultoria.mx/centros-hospitalarios-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maestría en Administración de Centros Hospitalarios | UDS Mi Universidad",
    description: "Especialízate en gestión hospitalaria 100% en línea. Maestría con validez oficial en México. Sin dejar de trabajar.",
  },
}

export default function CentrosHospitalariosPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_CENTROS_HOSPITALARIOS ?? ""
  return <LandingPage data={centrosHospitalariesData} webhookUrl={webhookUrl} />
}
