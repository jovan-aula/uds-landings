import type { Metadata } from "next"
import LandingPage from "@/components/LandingPage"
import { ingenieriaIndustrialData } from "@/data/ingenieria-industrial"

export const metadata: Metadata = {
  title: "Licenciatura en Ingeniería Industrial y Logística en Línea | UDS Mi Universidad",
  description: "Estudia Ingeniería Industrial y Logística en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
  keywords: ["ingeniería industrial en línea", "licenciatura en logística virtual", "ingeniería online México"],
  openGraph: {
    title: "Licenciatura en Ingeniería Industrial y Logística en Línea | UDS Mi Universidad",
    description: "Estudia Ingeniería Industrial y Logística en línea sin dejar de trabajar · 3 años · RVOE Federal SEP. Beca del 50%. Título y cédula con validez en toda la república.",
    url: "https://demo.aulaconsultoria.mx/ingenieria-industrial-uds",
    siteName: "UDS Mi Universidad",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licenciatura en Ingeniería Industrial y Logística en Línea | UDS Mi Universidad",
    description: "Estudia Ingeniería Industrial y Logística en línea sin dejar de trabajar. RVOE Federal SEP. Beca del 50%. Título y cédula con validez nacional.",
  },
}

export default function IngenieriaIndustrialPage() {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_INGENIERIA_INDUSTRIAL ?? ""
  return <LandingPage data={ingenieriaIndustrialData} webhookUrl={webhookUrl} />
}
